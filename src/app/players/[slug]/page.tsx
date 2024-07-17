import { getPlayer } from "@/components/Players/get.action"
import { SlugParamsProps } from "@/libs/slug-params"
import { Title } from "@mantine/core"

export default async function page(props: SlugParamsProps) {
	const player = await getPlayer(props)

	return <Title>Player: {player.name}</Title>
}
