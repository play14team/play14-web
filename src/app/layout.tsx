import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Shell from "@/components/Shell/Shell"
import { ColorSchemeScript } from "@mantine/core"
import { PropsWithChildren } from "react"
import { Providers } from "../components/Providers/Providers"
import { theme } from "./theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "#play14",
	description: "Play is the way",
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="dark" />
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
			</head>
			<body className={inter.className}>
				<Providers theme={theme}>
					<Shell>{children}</Shell>
				</Providers>
			</body>
		</html>
	)
}
