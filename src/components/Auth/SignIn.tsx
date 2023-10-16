'use client'

import { Button, Group, Input, PasswordInput, Stack } from '@mantine/core'
import { IconAt } from '@tabler/icons-react';

export default function SignIn() {
  return (
    <Stack mb={10}>
      <Input.Wrapper label="Email" error="Email invalid">
        <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
        <PasswordInput
          label="Password"
          placeholder="Your password"
        />
      </Input.Wrapper>
      <Group justify='flex-end'>
        <Button>Sign in</Button>
        <Button>Cancel</Button>
      </Group>
    </Stack>
  )
}
