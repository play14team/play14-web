import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // }),
    // AzureADProvider({
    //   clientId: process.env.AZURE_AD_CLIENT_ID as string,
    //   clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
    //   tenantId: process.env.AZURE_AD_TENANT_ID,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  debug: false,
  callbacks: {
    async session({ session, token, user }) {
      //console.log("Token: ", token);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // console.log("Token: ", token)
      // console.log("User: ", user)
      // console.log("Account: ", account)
      // console.log("Profile: ", profile)

      return token;
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };