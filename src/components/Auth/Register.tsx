"use client"

import axios from "axios"
import { useForm } from "@mantine/form"
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, Title, Space } from "@mantine/core"
import { signIn } from "next-auth/react"
import { notifications } from "@mantine/notifications"

interface RegistrationInfo {
	username: string
	email: string
	password: string
	confirmPassword: string
	termsOfService: boolean
}

export default function Register() {
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

	async function register(values: RegistrationInfo) {
		try {
			const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, values)
			signIn("credentials", {
				username: values.username,
				password: values.password,
				redirect: true,
				callbackUrl: "/",
			})
		} catch (err) {
			console.log(err)
			notifications.show({
				title: "Error registering user",
				message: err.response.data.error.message,
			})
		}
	}

	return (
		<Box maw={340} mx="auto">
			<Title>Register</Title>
			<Space h="md" />
			<form onSubmit={form.onSubmit(values => register(values as RegistrationInfo))}>
				<TextInput withAsterisk label="Name" placeholder="John Doe" {...form.getInputProps("username")} />

				<TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps("email")} />

				<PasswordInput label="Password" placeholder="Password" {...form.getInputProps("password")} />

				<PasswordInput
					mt="sm"
					label="Confirm password"
					placeholder="Confirm password"
					{...form.getInputProps("confirmPassword")}
				/>
				<Checkbox
					mt="md"
					label="I agree the terms of service"
					{...form.getInputProps("termsOfService", { type: "checkbox" })}
				/>

				<Group justify="flex-end" mt="md">
					<Button type="submit" disabled={!form.isValid()}>
						Submit
					</Button>
				</Group>
			</form>
		</Box>
	)
}
