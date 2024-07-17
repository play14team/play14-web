import { Player } from "@/models/graphql"
import { Avatar, Button, Paper, Text } from "@mantine/core"
import { useRouter } from "next/navigation"

export default function EventCard({ player }: { player: Player }) {
	const router = useRouter()
	return (
		<Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
			<Avatar src={player.avatar?.data?.attributes?.url ?? ""} size={120} radius={120} mx="auto" />
			<Text ta="center" fz="lg" fw={500} mt="md">
				{player.name}
			</Text>
			<Text ta="center" c="dimmed" fz="sm">
				{player.position}
			</Text>

			<Button variant="default" fullWidth mt="md" onClick={() => router.push(`/players/${player.slug}`)}>
				Profile
			</Button>
		</Paper>
	)
}
