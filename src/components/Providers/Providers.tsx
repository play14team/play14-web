"use client"

import { theme } from "@/themes/default"
import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export function Providers({ children }: PropsWithChildren) {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Notifications />
			<ModalsProvider>
				<SessionProvider>{children}</SessionProvider>
			</ModalsProvider>
		</MantineProvider>
	)
}
