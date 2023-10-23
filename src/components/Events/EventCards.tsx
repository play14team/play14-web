"use client"

import { Grid } from "@mantine/core"
import EventCard from "./EventCard"

interface EventCardsProps {
	number: number
}

export default function EventCards({ number }: EventCardsProps) {
	return (
		<Grid justify="flex-start" gutter="xl" m={50}>
			{Array(number)
				.fill(0)
				.map((_, index) => (
					<Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
						<EventCard />
					</Grid.Col>
				))}
		</Grid>
	)
}
