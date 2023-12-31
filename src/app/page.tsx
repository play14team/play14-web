"use client"

import EventCards from "@/components/Events/EventCards"
import Logo from "@/components/Shell/Logo"
import { Button, Center, Code, Space, Text, Title } from "@mantine/core"
import { modals } from "@mantine/modals"
import { notifications } from "@mantine/notifications"

export default function Home() {
	const openModal = () =>
		modals.openConfirmModal({
			title: "Please confirm your action",
			children: (
				<Text size="sm">
					This action is so important that you are required to confirm it with a modal. Please click one of these
					buttons to proceed.
				</Text>
			),
			labels: { confirm: "Confirm", cancel: "Cancel" },
			onCancel: () =>
				notifications.show({
					title: "Cancel",
					message: "You just canceled",
				}),
			onConfirm: () =>
				notifications.show({
					title: "Confirm",
					message: "You just confirmed",
				}),
		})

	return (
		<>
			<Center>
				<Logo h={200} quality="md" />
			</Center>
			<Title>Welcome to #play14</Title>
			<Space h="xl" />
			<Button onClick={openModal}>Confirm me</Button>
			<Space h="xl" />
			<Code>const scheme = useScheme()</Code>
			<Space h="xl" />
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam fuga suscipit incidunt tenetur vero distinctio
				a repudiandae consectetur illo tempora, consequuntur impedit debitis. Facere quis velit amet placeat quae.
			</Text>
			<Space h="xl" />
			<EventCards number={4} />
		</>
	)
}
