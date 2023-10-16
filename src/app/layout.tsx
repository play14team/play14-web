import './globals.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ColorSchemeScript } from '@mantine/core'
import { Providers } from './providers';
import Shell from '@/components/Shell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '#play14',
  description: 'Play is the way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Shell>
            {children}
          </Shell>
        </Providers>
      </body>
    </html>
  )
}
