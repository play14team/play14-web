import { useSession, signIn } from "next-auth/react"
import { Button, Group, Modal, Box, TextInput, PasswordInput, Text, Divider, Stack, ActionIcon } from "@mantine/core"
import { IconBrandAzure, IconBrandGoogle, IconBrandLinkedin, IconKey, IconUser } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { notifications } from "@mantine/notifications"

interface RegistrationInfo {
	username: string
	password: string
}

export default function SignIn() {
	const { status, data: session } = useSession()
	const router = useRouter()
	const [menuOpened, setMenuOpened] = useState(false)
	const [modalOpened, { open, close }] = useDisclosure(false)
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			username: value => (value.length < 2 ? "Username must have at least 2 letters" : null),
			password: value => (value.length < 8 ? "Password must have at least 8 letters" : null),
		},
	})

	async function login(values: RegistrationInfo) {
		try {
			console.log("Here I log", values)
			await signIn("credentials", {
				username: values.username,
				password: values.password,
				redirect: true,
				callbackUrl: "/",
			})
		} catch (err: any) {
			console.log(err)
			notifications.show({
				title: "Error signing user in",
				message: err.response.data.error.message,
			})
		}
	}

	if (status == "unauthenticated") {
		return (
			<>
				<Button onClick={open}>Sign in</Button>

				<Modal opened={modalOpened} onClose={close} title="Sign In">
					<Box maw={360} mx="auto" mt={20} mb={20}>
						<Stack gap={30}>
							<form onSubmit={form.onSubmit(values => login(values as RegistrationInfo))}>
								<Stack gap={15}>
									<TextInput
										withAsterisk
										label="Username or email"
										{...form.getInputProps("username")}
										leftSection={<IconUser />}
									/>

									<PasswordInput
										withAsterisk
										label="Password"
										placeholder="Password"
										{...form.getInputProps("password")}
										leftSection={<IconKey />}
									/>

									<Group justify="flex-end" mt="md">
										<Button type="submit" disabled={!form.isValid()}>
											Sign in
										</Button>
									</Group>
								</Stack>
							</form>

							<Divider my="xs" label="or" labelPosition="center" />

							<Group gap={40} justify="center">
								<Stack align="center">
									<ActionIcon variant="default" aria-label="Google" size={75} onClick={() => signIn("google")}>
										<IconBrandGoogle stroke={3} size={50} />
									</ActionIcon>
									<Text>Google</Text>
								</Stack>
								<Stack align="center">
									<ActionIcon variant="default" aria-label="Azure" size={75} onClick={() => signIn("azure-ad")}>
										<IconBrandAzure stroke={3} size={50} />
									</ActionIcon>
									<Text>Azure AD</Text>
								</Stack>
								<Stack align="center">
									<ActionIcon variant="default" aria-label="LinkeIn" size={75} onClick={() => signIn("linkedin")}>
										<IconBrandLinkedin stroke={3} size={50} />
									</ActionIcon>
									<Text>LinkedIn</Text>
								</Stack>
							</Group>
						</Stack>
					</Box>
				</Modal>
			</>
		)
	}

	return
}
