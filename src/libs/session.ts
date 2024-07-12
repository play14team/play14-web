import { getServerSession } from "next-auth"

export async function getAuthData() {
	const session = await getServerSession()
	if (session) {
		return { userId: session.user.id, jwt: session.jwt }
	}
}
