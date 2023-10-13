import { Tooltip, Avatar } from '@mantine/core'
import React from 'react'

export default function UserAvatar() {
  return (
    <Tooltip label="Cédric Pontet" withArrow>
      <Avatar src='/avatar/2023-cedric-pontet.jpg' />
    </Tooltip>
)
}
