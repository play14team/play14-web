"use client"

import { Box, Button, Group, PasswordInput, Space, TextInput, Title, Collapse, Fieldset } from "@mantine/core"
import axios from "axios"
import { useDisclosure } from "@mantine/hooks"
import { useForm } from "@mantine/form"

interface User {
	username: string
	email: string
	password: string
	confirmPassword: string
	termsOfService: boolean
}

export default function Profile() {
	const [opened, { toggle }] = useDisclosure(false)
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			termsOfService: false,
		},

		validate: {
			username: value => (value.length < 2 ? "Name must have at least 2 letters" : null),
			email: value => (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value) ? null : "Invalid email"),
			password: value =>
				/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40})/.test(value) ? null : "Password is too weak",
			confirmPassword: (value, values) => (value !== values.password ? "Passwords did not match" : null),
			termsOfService: value => (value == true ? null : "You must accept the terms of service"),
		},
	})

	async function save(values: User) {
		try {
			const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, values)
			console.log(response.data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Box maw={500} pl={15}>
			<Title>Profile</Title>
			<Space h="md" />
			<form onSubmit={form.onSubmit(values => save(values as User))}>
				<Fieldset legend="User information">
					<TextInput withAsterisk label="Name" placeholder="Firstname Lastname" {...form.getInputProps("username")} />
					<TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps("email")} />
				</Fieldset>

				<Group justify="flex-end" mt="md">
					<Button type="submit" disabled={!form.isValid()}>
						Save
					</Button>
				</Group>
			</form>

			<Group justify="center" mb={5}>
				<Button onClick={toggle}>Change password</Button>
			</Group>

			<Collapse in={opened}>
				<PasswordInput label="Password" placeholder="Password" {...form.getInputProps("password")} />

				<PasswordInput
					mt="sm"
					label="Confirm password"
					placeholder="Confirm password"
					{...form.getInputProps("confirmPassword")}
				/>
			</Collapse>
		</Box>
	)
}
