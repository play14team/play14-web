'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'white' : 'black'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <SunIcon /> : <MoonIcon />}

    </ActionIcon>
  );
}
