import { Card, Group, Text, Button, Badge, Title, Spoiler } from "@mantine/core"
import { IconCalendarEvent } from "@tabler/icons-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function EventCard() {
	const router = useRouter()
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
					height={160}
					width={320}
					alt="Norway"
				/>
			</Card.Section>

			<Group justify="space-between" mt="md" mb="xs">
				<Title order={2}>Luxembourg 2024</Title>
				<Badge leftSection={<IconCalendarEvent size={15} />}>Open</Badge>
				<Title order={4}>March 21-23 2024</Title>
			</Group>

			<Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
				<Text size="sm" c="dimmed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae! Quae dignissimos incidunt odio
					odit eligendi perspiciatis similique repellendus eum aliquid quidem ducimus voluptatem, earum nisi culpa
					magnam corrupti facere.
				</Text>
			</Spoiler>

			<Button variant="light" fullWidth mt="md" radius="md" onClick={() => router.push("/events/luxembourg-2024-03")}>
				Register
			</Button>
		</Card>
	)
}
