import { Enum_Event_Status, Event } from "@/models/graphql"
import { Badge, Button, Card, Group, Spoiler, Text, Title } from "@mantine/core"
import { IconCalendarEvent } from "@tabler/icons-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import EventDate from "./EventDate"
import EventDescription from "./EventDescription"

export default function EventCard({ event }: { event: Event }) {
	const router = useRouter()
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src={event.defaultImage.data?.attributes?.url ?? ""}
					height={160}
					width={320}
					alt={event.defaultImage.data?.attributes?.caption ?? "event image"}
				/>
			</Card.Section>

			<Group justify="space-between" mt="md" mb="xs">
				<Title order={2}>{event.name}</Title>
				<Badge leftSection={<IconCalendarEvent size={15} />}>{event.status}</Badge>
			</Group>

			<Title order={4}>
				<EventDate start={event.start} end={event.end} timezone={event.timezone} displayYear />
			</Title>
			<Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
				<Text size="sm" c="dimmed">
					<EventDescription description={event.description!} />
				</Text>
			</Spoiler>

			{event.status == Enum_Event_Status.Open && (
				<Button variant="light" fullWidth mt="md" radius="md" onClick={() => router.push(`/events/${event.slug}`)}>
					Register
				</Button>
			)}
		</Card>
	)
}
