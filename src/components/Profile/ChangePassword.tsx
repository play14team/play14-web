"use client"

import { Box, Button, Fieldset, Group, PasswordInput, Stack, Title } from "@mantine/core"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"
import axios from "axios"
import { useSession } from "next-auth/react"

interface Passwords {
	currentPassword: string
	newPassword: string
	confirmPassword: string
}

export default function ChangePassword() {
	const { data: session } = useSession()
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},

		validate: {
			newPassword: value =>
				/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40})/.test(value) ? null : "Password is too weak",
			confirmPassword: (value, values) => (value !== values.newPassword ? "Passwords did not match" : null),
		},
	})

	async function change(values: Passwords) {
		try {
			const config = {
				headers: { Authorization: `Bearer ${session?.jwt}` },
			}
			const payload = {
				currentPassword: values.currentPassword,
				password: values.newPassword,
				passwordConfirmation: values.confirmPassword,
			}
			const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`, payload, config)

			console.log(response.data)

			form.reset()

			notifications.show({
				title: "Change password",
				message: "Password successfully changed",
			})
		} catch (err: any) {
			console.log(err)
			notifications.show({
				title: "Error changing password",
				message: err.toString(),
			})
		}
	}

	return (
		<Box maw={500} pl={15}>
			<Title>Password</Title>
			<form onSubmit={form.onSubmit(values => change(values as Passwords))}>
				<Fieldset legend="Change password" mt={50}>
					<Stack gap={15} mt={20} mb={20}>
						<PasswordInput
							label="Current password"
							placeholder="Currrent password"
							{...form.getInputProps("currentPassword")}
						/>

						<PasswordInput label="New password" placeholder="New password" {...form.getInputProps("newPassword")} />

						<PasswordInput
							label="Confirm password"
							placeholder="Confirm password"
							{...form.getInputProps("confirmPassword")}
						/>
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
