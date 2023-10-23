"use client"

import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"
import ReactQueryProvider from "./ReactQueryProvider"

interface ProvidersProps extends PropsWithChildren<{}> {
	theme: MantineThemeOverride
}

export function Providers({ children, theme }: ProvidersProps) {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Notifications />
			<ModalsProvider>
				<SessionProvider>
					<ReactQueryProvider>{children}</ReactQueryProvider>
				</SessionProvider>
			</ModalsProvider>
		</MantineProvider>
	)
}
