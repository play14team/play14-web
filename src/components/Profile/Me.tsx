import { getJwt } from "@/libs/jwt"
import { MeDocument } from "@/models/graphql"
import { Stack, Text, Title } from "@mantine/core"
import { GraphQLClient } from "graphql-request"
import { getServerSession } from "next-auth"
import Authenticated from "../Auth/Authenticated"

export default async function Me() {
	const session = await getServerSession()
	const jwt = session?.jwt || (getJwt() as string)

	console.log("jwt", jwt)

	const client = createAuthorizedClient(jwt)
	const { me } = await client.request(MeDocument)

	console.log(me)

	return (
		<Authenticated>
			<Title>Me</Title>

			<Stack m={20}>
				<Text>Id: {session?.user.id}</Text>
				<Text>Email: {session?.user.email}</Text>
				<Text>Name: {session?.user.name}</Text>
			</Stack>
		</Authenticated>
	)
}

async function getMe() {
	const session = await getServerSession()
	const jwt = session?.jwt as string

	console.log(session)

	const client = createAuthorizedClient(jwt ?? process.env.API_TOKEN)
	const { me } = await client.request(MeDocument)

	return me
}

const endpoint = process.env.NEXT_PUBLIC_API_URL + "/graphql"

function createAuthorizedClient(jwt: string) {
	return new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ` + jwt,
		},
	})
}
