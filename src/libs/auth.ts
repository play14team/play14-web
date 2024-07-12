import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
import AzureADProvider from "next-auth/providers/azure-ad"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

interface AuthenticatedUser extends AdapterUser {
	jwt: String
}

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const nextAuthOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const response = await fetch(`${process.env.STRAPI_API_URL}/api/auth/local`, {
					method: "POST",
					body: JSON.stringify({
						identifier: credentials?.username,
						password: credentials?.password,
					}),
				})
				const data = await response.json()

				if (data.user) {
					return {
						id: data.user.id,
						name: data.user.username,
						email: data.user.email,
						jwt: data.jwt,
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
				const url = `${process.env.STRAPI_API_URL}/api/auth/
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

			// console.log("jwt callback", token, user, account, profile)
			// console.log("token", token)
			// console.log("user", user)
			// console.log("account", account)
			// console.log("profile", profile)

			return token
		},
		async session({ session, token, user }) {
			// console.log("session callback", session, token, user)
			// console.log("token", token)
			// console.log("user", user)
			// console.log("session", session)

			const jwt = token.jwt as string
			session.jwt = jwt
			session.user.id = token.userid as number

			return session
		},
	},
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
	...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []
) {
	return getServerSession(...args, nextAuthOptions)
}
