import { useSession, signIn, signOut } from "next-auth/react"
import { Text, Avatar, Button, Menu, UnstyledButton, Group, Space } from "@mantine/core"
import { IconAt, IconChevronDown, IconChevronRight, IconSettings, IconUser } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Loading from "../Loading"

export default function SignIn() {
	const { status, data: session } = useSession()
	const router = useRouter()
	const [opened, setOpened] = useState(false)

	if (status == "authenticated") {
		return (
			<Menu
				shadow="md"
				radius={5}
				position="bottom-start"
				trigger="hover"
				openDelay={200}
				closeDelay={400}
				opened={opened}
				onChange={setOpened}>
				<Menu.Target>
					<UnstyledButton>
						<Group gap={7}>
							<Avatar src={session.user?.image} />
							<Text>{session.user?.name}</Text>
							{opened ? <IconChevronDown size="1rem" /> : <IconChevronRight size="1rem" />}
						</Group>
					</UnstyledButton>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label>User</Menu.Label>
					<Menu.Label>
						<Group gap={10}>
							<IconUser size={14} />
							<Text>{session.user?.name}</Text>
						</Group>
					</Menu.Label>
					<Menu.Label>
						<Group gap={10}>
							<IconAt size={14} />
							<Text>{session.user?.email}</Text>
						</Group>
					</Menu.Label>
					<Menu.Divider />
					<Menu.Label>Application</Menu.Label>
					<Menu.Item leftSection={<IconSettings size={14} />} onClick={() => router.push("/profile")}>
						Profile
					</Menu.Item>
					<Menu.Divider />
					<Menu.Label>
						<Button onClick={() => signOut()}>Sign out</Button>
					</Menu.Label>
				</Menu.Dropdown>
			</Menu>
		)
	}

	if (status == "loading") return <Loading />

	return (
		<Group gap={10}>
			<Button onClick={() => router.push("/register")}>Register</Button>
			<Button onClick={() => signIn()}>Sign in</Button>
		</Group>
	)
}
