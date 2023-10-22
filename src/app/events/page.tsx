import EventCards from "@/components/Events/EventCards"
import { Stack, Title } from "@mantine/core"

export default function page() {
	return (
		<Stack gap={50}>
			<Title>All events</Title>
			<EventCards number={40} />
		</Stack>
	)
}
