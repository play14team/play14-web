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
      {dark ? <SunIcon style={{ width: 18, height: 18 }} /> : <MoonIcon style={{ width: 18, height: 18 }} />}

    </ActionIcon>
  );
}
