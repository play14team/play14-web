"use client"

import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons-react"

export function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const dark = colorScheme === "dark"

	return (
		<ActionIcon
			variant="outline"
			color={dark ? "white" : "black"}
			onClick={() => toggleColorScheme()}
			title={dark ? "Toggle Light theme" : "Toggle Dark theme"}>
			{dark ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
		</ActionIcon>
	)
}
