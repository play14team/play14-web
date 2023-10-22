"use client"

import { Box, Button, Fieldset, Group, Stack, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { notifications } from "@mantine/notifications"
import axios from "axios"

interface User {
	username: string
	email: string
}

export default function Profile() {
	const [opened, { toggle }] = useDisclosure(false)
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			username: "",
			email: "",
		},

		validate: {
			username: value => (value.length < 2 ? "Name must have at least 2 letters" : null),
			email: value => (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value) ? null : "Invalid email"),
		},
	})

	async function save(values: User) {
		try {
			const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, values)
			console.log(response.data)
		} catch (err: any) {
			console.log(err)
			notifications.show({
				title: "Error saving profile",
				message: err.toString(),
			})
		}
	}

	return (
		<Box maw={500} pl={15}>
			<Title>Profile</Title>
			<form onSubmit={form.onSubmit(values => save(values as User))}>
				<Fieldset legend="User information" mt={50}>
					<Stack gap={15} mt={20} mb={20}>
						<TextInput withAsterisk label="Name" placeholder="Your name" {...form.getInputProps("username")} />
						<TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps("email")} />
					</Stack>
				</Fieldset>

				<Group justify="flex-end" mt="xl">
					<Button type="submit" disabled={!form.isValid()}>
						Save
					</Button>
				</Group>
			</form>
		</Box>
	)
}
