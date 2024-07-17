import PlayerGrid from "@/components/Players/PlayerGrid"
import { getPlayers } from "@/components/Players/get.action"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { PlayerEntity } from "@/models/graphql"
import { Stack, Title } from "@mantine/core"

export default async function page() {
	const response = await getPlayers(1, 40)
	const players = dataAsArrayOf<PlayerEntity>(response.players)
	const pagination = getPagination(response.players)

	return (
		<Stack gap={50}>
			<Title>All players</Title>
			<PlayerGrid players={players} />
		</Stack>
	)
}
