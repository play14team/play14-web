'use client'

import Cards from "@/components/Cards";
import Loading from "@/components/Loading";
import SingIn from "@/components/SingIn";
import { Button, Code, Text, Title } from "@mantine/core";
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

export default function Home() {

  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => notifications.show({
      title: 'Cancel',
      message: 'You just canceled',
    }),
    onConfirm: () => notifications.show({
      title: 'Confirm',
      message: 'You just confirmed',
    }),
  });

  return (
    <>
      <Title>Welcome to #play14</Title>
      <Button onClick={openModal}>Confirm me</Button>
      <br></br>
      <Code>const scheme = useScheme()</Code>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam fuga suscipit incidunt tenetur vero distinctio a repudiandae consectetur illo tempora, consequuntur impedit debitis. Facere quis velit amet placeat quae.</Text>
      <Loading />
      <SingIn />
      <Cards />
    </>
  )
}
