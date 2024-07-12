"use client"

import { MantineProvider, MantineTheme } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

interface ProvidersProps extends PropsWithChildren<{}> {
	theme: MantineTheme
}

export function Providers({ children, theme }: ProvidersProps) {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Notifications />
			<ModalsProvider>
				<SessionProvider>{children}</SessionProvider>
			</ModalsProvider>
		</MantineProvider>
	)
}
