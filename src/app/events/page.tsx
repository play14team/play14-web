import EventCards from "@/components/Events/EventGrid"
import { getEvents } from "@/components/Events/get.action"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { EventEntity } from "@/models/graphql"
import { Stack, Title } from "@mantine/core"

export default async function page() {
	const response = await getEvents(1, 18)
	const events = dataAsArrayOf<EventEntity>(response.events)
	const pagination = getPagination(response.events)

	return (
		<Stack gap={50}>
			<Title>All events</Title>
			<EventCards events={events} />
		</Stack>
	)
}
