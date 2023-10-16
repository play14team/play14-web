"use client";

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications';
import {SessionProvider} from "next-auth/react";
import { PropsWithChildren } from 'react';
import { theme } from '../theme'
import { ApolloProviderWrapper } from './ApolloProviderWrapper';

export function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <ModalsProvider>
        <SessionProvider>
          <ApolloProviderWrapper>
            {children}
          </ApolloProviderWrapper>
      </SessionProvider>;
      </ModalsProvider>
    </MantineProvider>
  )
}