"use client"

import { EventEntity } from "@/models/graphql"
import { Grid } from "@mantine/core"
import EventCard from "./EventCard"

interface EventGirdProps {
	events: EventEntity[]
}

export default function EventGrid({ events }: EventGirdProps) {
	return (
		<Grid justify="flex-start" gutter="xl" m={50}>
			{events &&
				events.map(event => (
					<Grid.Col key={event.id} span={{ base: 12, md: 6, lg: 4 }}>
						<EventCard event={event.attributes!} />
					</Grid.Col>
				))}
		</Grid>
	)
}
