import PlayerCards from "@/components/Players/PlayerCards"
import { Stack, Title } from "@mantine/core"

export default function page() {
	return (
		<Stack gap={50}>
			<Title>All players</Title>
			<PlayerCards number={50} />
		</Stack>
	)
}
