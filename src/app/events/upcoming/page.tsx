import EventCards from "@/components/Events/EventCards"
import { Stack, Title } from "@mantine/core"

export default function page() {
	return (
		<Stack gap={50}>
			<Title>Upcoming events</Title>
			<EventCards number={8} />
		</Stack>
	)
}
