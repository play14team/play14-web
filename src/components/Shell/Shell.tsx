"use client"

import { AppShell, Burger, Group, ScrollArea } from "@mantine/core"
import { PropsWithChildren, useState } from "react"
import Navbar from "./Navbar"
import Copyright from "./Copyright"
import Logo from "./Logo"
import SignIn from "../Auth/SignIn"
import { ColorSchemeToggle } from "./ColorSchemeToggle"
import Register from "../Auth/Register"
import { useDisclosure } from "@mantine/hooks"
import User from "./User"

export default function Shell({ children }: PropsWithChildren<{}>) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
			padding="md">
			<AppShell.Header>
				<Group h="100%" px="md" grow>
					<Group>
						<Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
						<Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
						<Logo h={55} quality="xs" />
					</Group>
					<Group justify="flex-end">
						<User />
						<Register />
						<SignIn />
						<ColorSchemeToggle />
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p="md">
				<AppShell.Section grow my="md" component={ScrollArea}>
					<Navbar />
				</AppShell.Section>

				<AppShell.Section>
					<Copyright />
				</AppShell.Section>
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
