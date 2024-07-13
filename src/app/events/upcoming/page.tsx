import EventCards from "@/components/Events/EventGrid"
import { dataAsArrayOf } from "@/libs/apollo-client"
import { EventEntity } from "@/models/graphql"
import { Stack, Title } from "@mantine/core"
import moment from "moment"
import { getUpcomingEvents } from "./get-upcoming-events.action"

export default async function page() {
	const today = moment().format()
	const response = await getUpcomingEvents({ today })
	const events = dataAsArrayOf<EventEntity>(response?.data?.events)

	return (
		<Stack gap={50}>
			<Title>Upcoming events</Title>
			<EventCards events={events} />
		</Stack>
	)
}
