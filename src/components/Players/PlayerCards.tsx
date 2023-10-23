"use client"

import { Grid } from "@mantine/core"
import PlayerCard from "./PlayerCard"

interface PlayerCardsProps {
	number: number
}

export default function PlayerCards({ number }: PlayerCardsProps) {
	return (
		<Grid justify="flex-start" gutter="xl" m={50}>
			{Array(number)
				.fill(0)
				.map((_, index) => (
					<Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
						<PlayerCard />
					</Grid.Col>
				))}
		</Grid>
	)
}
