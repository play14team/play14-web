"use client";

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications';
import {SessionProvider} from "next-auth/react";
import { theme } from '../theme'

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <ModalsProvider>
        <SessionProvider>
          {children}
      </SessionProvider>;
      </ModalsProvider>
    </MantineProvider>
  )
}