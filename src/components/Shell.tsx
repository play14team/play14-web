"use client"

import { AppShell, Burger, Group } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Navbar from "./Navbar"
import { ColorSchemeToggle } from "./ColorSchemeToggle"
import SignIn from "./Auth/SignIn"
import Logo from "./Logo"
import { PropsWithChildren } from "react"

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
						<Logo />
					</Group>
					<Group justify="flex-end">
						<SignIn />
						<ColorSchemeToggle />
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<Navbar />
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
