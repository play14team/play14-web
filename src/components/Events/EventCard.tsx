import { Enum_Event_Status, Event } from "@/models/graphql"
import { IconCalendarEvent } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import EventDate from "./EventDate"
import EventDescription from "./EventDescription"

import { ActionIcon, Badge, Button, Card, Group, Image, Spoiler, Text } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import classes from "./EventCard.module.css"

export default function EventCard({ event }: { event: Event }) {
	const router = useRouter()
	return (
		<Card withBorder radius="md" p="md" className={classes.card}>
			<Card.Section>
				<Image src={event.defaultImage.data?.attributes?.url ?? ""} alt={event?.name ?? "event image"} height={250} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group justify="space-between">
					<Text fz="lg" fw={500}>
						{event?.name}
					</Text>
					<Badge size="sm" variant="light">
						{event.location?.data?.attributes?.country}
					</Badge>
				</Group>
				<Text fz="sm" mt="xs" c="dimmed">
					<Spoiler maxHeight={100} showLabel="More..." hideLabel="Hide">
						<EventDescription description={event.description!} />
					</Spoiler>
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group justify="space-between">
					<Text mt="md" className={classes.label} c="dimmed">
						<EventDate start={event.start} end={event.end} timezone={event.timezone} displayYear />
					</Text>
					<Badge variant="light" leftSection={<IconCalendarEvent size={15} />}>
						{event.status}
					</Badge>
				</Group>
			</Card.Section>
			{event.status == Enum_Event_Status.Open && (
				<Group mt="xs">
					<Button radius="md" style={{ flex: 1 }} onClick={() => router.push(`/events/${event.slug}`)}>
						Register
					</Button>
					<ActionIcon variant="default" radius="md" size={36}>
						<IconHeart className={classes.like} stroke={1.5} />
					</ActionIcon>
				</Group>
			)}
		</Card>
	)
}
