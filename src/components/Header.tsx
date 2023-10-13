import { Avatar, Burger, Group, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import Image from 'next/image';
import Play14Logo from '/public/logo/play14_black_bg_transparent_500x150.png';

export default function Header() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <Group h="100%" px="md" grow>
      <Group>
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        <Image src={Play14Logo} width={166} height={50} alt="play14 logo" />
      </Group>
      <Group justify='center'>
        <ColorSchemeToggle />
        <Tooltip label="Cédric Pontet" withArrow>
          <Avatar src='/avatar/2023-cedric-pontet.jpg' />
        </Tooltip>
      </Group>
    </Group>
  )
}
