"use server"

import { query } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { Player, PlayerDocument, PlayersDocument } from "@/models/graphql"

export async function getPlayers(page: number, pageSize: number) {
	return await query({
		query: PlayersDocument,
		variables: { page, pageSize },
	})
}

export async function getPlayer({ params }: SlugParamsProps) {
	const { slug } = params
	const response = await query({
		query: PlayerDocument,
		variables: { slug },
	})

	return response.players?.data[0].attributes as Player
}
