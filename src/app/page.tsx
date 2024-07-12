"use client"

import EventCards from "@/components/Events/EventCards"
import Logo from "@/components/Shell/Logo"
import { Stack, Title } from "@mantine/core"

export default function Home() {
	return (
		<Stack align="center">
			<Logo h={200} quality="md" />
			<Title>Play is we way</Title>
			<EventCards number={4} />
		</Stack>
	)
}
