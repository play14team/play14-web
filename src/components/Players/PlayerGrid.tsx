"use client"

import { PlayerEntity } from "@/models/graphql"
import { Grid, Pagination } from "@mantine/core"
import { useState } from "react"
import PlayerCard from "./PlayerCard"

interface PlayerGridProps {
	players: PlayerEntity[]
}

export default function PlayerGrid({ players }: PlayerGridProps) {
	const [activePage, setPage] = useState(1)
	return (
		<>
			<Grid justify="flex-start" gutter="xl" m={50}>
				{players &&
					players.map(player => (
						<Grid.Col key={player.id} span={{ base: 12, md: 6, lg: 3 }}>
							<PlayerCard player={player.attributes!} />
						</Grid.Col>
					))}
			</Grid>
			<Pagination total={100} value={1} onChange={setPage} mt="sm" />
		</>
	)
}
