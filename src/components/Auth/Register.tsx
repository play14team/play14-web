"use client"

import axios from "axios"
import { useForm } from "@mantine/form"
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, Title, Space, Modal } from "@mantine/core"
import { signIn, useSession } from "next-auth/react"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"
import { IconKey, IconMail, IconUser } from "@tabler/icons-react"

interface RegistrationInfo {
	username: string
	email: string
	password: string
	confirmPassword: string
	termsOfService: boolean
}

export default function Register() {
	const { status } = useSession()
	const [opened, { open, close }] = useDisclosure(false)
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
		} catch (err: any) {
			console.log(err)
			notifications.show({
				title: "Error registering user",
				message: err.response.data.error.message,
			})
		}
	}

	if (status == "authenticated" || status == "loading") return

	return (
		<>
			<Button onClick={open}>Register</Button>
			<Modal opened={opened} onClose={close} title="Register">
				<Box maw={340} mx="auto">
					<Space h="md" />
					<form onSubmit={form.onSubmit(values => register(values as RegistrationInfo))}>
						<TextInput
							withAsterisk
							label="Name"
							placeholder="John Doe"
							{...form.getInputProps("username")}
							leftSection={<IconUser />}
						/>
						<Space h="xs" />
						<TextInput
							withAsterisk
							label="Email"
							placeholder="your@email.com"
							{...form.getInputProps("email")}
							leftSection={<IconMail />}
						/>
						<Space h="xs" />
						<PasswordInput
							label="Password"
							placeholder="Password"
							{...form.getInputProps("password")}
							leftSection={<IconKey />}
						/>
						<Space h="xs" />
						<PasswordInput
							mt="sm"
							label="Confirm password"
							placeholder="Confirm password"
							{...form.getInputProps("confirmPassword")}
							leftSection={<IconKey />}
						/>
						<Space h="xs" />
						<Checkbox
							mt="md"
							label="I agree the terms of service"
							{...form.getInputProps("termsOfService", { type: "checkbox" })}
						/>

						<Group justify="flex-end" mt="xl">
							<Button type="submit" disabled={!form.isValid()}>
								Submit
							</Button>
						</Group>
					</form>
				</Box>
			</Modal>
		</>
	)
}
