import './globals.css'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'
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
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Shell>
            {children}
          </Shell>
        </MantineProvider>
      </body>
    </html>
  )
}
