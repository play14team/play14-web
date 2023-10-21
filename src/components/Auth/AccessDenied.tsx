import { Button, Center, Group, Stack, Title } from "@mantine/core"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AccessDenied() {
	const router = useRouter()

	return (
		<Center>
			<Stack>
				<Title>Access Denied</Title>
				<Group gap={10}>
					<Button onClick={() => signIn()}>Sign in</Button>
					<Button onClick={() => router.push("/")}>Go home</Button>
					<Button onClick={() => router.back()}>Go back</Button>
				</Group>
			</Stack>
		</Center>
	)
}
