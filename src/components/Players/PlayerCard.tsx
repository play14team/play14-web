import { Card, Group, Text, Button, Badge, Title, ActionIcon, Spoiler } from "@mantine/core"
import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconCalendarEvent } from "@tabler/icons-react"
import NextImage from "next/image"
import { Image } from "@mantine/core"
import { useRouter } from "next/navigation"

export default function EventCard() {
	const router = useRouter()
	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src="https://cdn.play14.org/strapi-uploads/assets/Cedric_Pontet_9147a45071.jpg"
					h={310}
					w="auto"
					fit="contain"
					width={500}
					height={500}
					component={NextImage}
					alt="Cédric Pontet"
				/>
			</Card.Section>

			<Group justify="space-between" mt="md" mb="xs">
				<Title order={2}>Cédric Pontet</Title>
				<Badge leftSection={<IconCalendarEvent size={15} />}>Founder</Badge>
				<Group>
					<ActionIcon size="md" variant="subtle" aria-label="Twitter">
						<IconBrandTwitter />
					</ActionIcon>
					<ActionIcon size="md" variant="subtle" aria-label="LinkedIn">
						<IconBrandLinkedin />
					</ActionIcon>
					<ActionIcon size="md" variant="subtle" aria-label="Instagram">
						<IconBrandInstagram />
					</ActionIcon>
				</Group>
			</Group>

			<Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
				<Text size="sm" c="dimmed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae! Quae dignissimos incidunt odio
					odit eligendi perspiciatis similique repellendus eum aliquid quidem ducimus voluptatem, earum nisi culpa
					magnam corrupti facere.
				</Text>
			</Spoiler>

			<Button variant="light" fullWidth mt="md" radius="md" onClick={() => router.push("/players/cedric-pontet")}>
				Visit
			</Button>
		</Card>
	)
}
