import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from "next-auth/providers/azure-ad"
import LinkedInProvider from "next-auth/providers/linkedin"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"
import { AdapterUser } from "next-auth/adapters"

interface AuthenticatedUser extends AdapterUser {
	jwt: String
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
					identifier: credentials?.username,
					password: credentials?.password,
				})

				if (response.data.user) {
					return {
						id: response.data.user.id,
						name: response.data.user.username,
						email: response.data.user.email,
						jwt: response.data.jwt,
					}
				}

				return null
			},
		}),
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID as string,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
			tenantId: process.env.AZURE_AD_TENANT_ID,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID as string,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET as string,
	session: {
		strategy: "jwt",
	},
	debug: false,
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (account && account.access_token) {
				const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/
					${account?.provider.replace("azure-ad", "microsoft")}
					/callback?access_token=${account.access_token}`
				const response = await fetch(url)
				const data = await response.json()

				token.jwt = data.jwt
				token.userid = data.user.id
			}

			const authenticatedUser = user as AuthenticatedUser
			if (authenticatedUser) {
				token.jwt = authenticatedUser.jwt
				token.userid = authenticatedUser.id
			}

			return token
		},
		async session({ session, token, user }) {
			session.jwt = token.jwt as string
			session.user.id = token.userid as number

			return session
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
