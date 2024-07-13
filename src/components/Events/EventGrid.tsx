"use client"

import { EventEntity } from "@/models/graphql"
import { Grid } from "@mantine/core"
import EventCard from "./EventCard"

interface EventGidProps {
	events: EventEntity[]
}

export default function EventGrid({ events }: EventGidProps) {
	return (
		<Grid justify="flex-start" gutter="xl" m={50}>
			{events.map(event => (
				<Grid.Col key={event.id} span={{ base: 12, md: 6, lg: 3 }}>
					<EventCard event={event.attributes!} />
				</Grid.Col>
			))}
		</Grid>
	)
}
