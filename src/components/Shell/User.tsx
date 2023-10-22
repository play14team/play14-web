import { useSession, signOut } from "next-auth/react"
import { Text, Avatar, Button, Menu, UnstyledButton, Group } from "@mantine/core"
import { IconAt, IconChevronDown, IconChevronRight, IconSettings, IconUser } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Loading from "../Shell/Loading"

export default function SignIn() {
	const { status, data: session } = useSession()
	const router = useRouter()
	const [menuOpened, setMenuOpened] = useState(false)

	if (status == "loading") return <Loading />

	if (status == "authenticated") {
		return (
			<Menu
				shadow="md"
				radius={5}
				position="bottom-start"
				trigger="hover"
				openDelay={200}
				closeDelay={400}
				opened={menuOpened}
				onChange={setMenuOpened}>
				<Menu.Target>
					<UnstyledButton>
						<Group gap={7}>
							<Avatar src={session.user?.image} />
							<Text>{session.user?.name}</Text>
							{menuOpened ? <IconChevronDown size="1rem" /> : <IconChevronRight size="1rem" />}
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
					<Menu.Divider m={10} />
					<Menu.Label>Application</Menu.Label>
					<Menu.Item leftSection={<IconSettings size={14} />} onClick={() => router.push("/profile")}>
						User profile
					</Menu.Item>
					<Menu.Divider m={10} />
					<Menu.Label mb={10} mt={10}>
						<Button onClick={() => signOut()}>Sign out</Button>
					</Menu.Label>
				</Menu.Dropdown>
			</Menu>
		)
	}

	return
}
