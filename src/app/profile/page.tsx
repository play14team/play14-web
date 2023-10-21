import Authenticated from "@/components/Auth/Authenticated"
import { Title } from "@mantine/core"

export default function Profile() {
	return (
		<Authenticated>
			<Title>Profile page</Title>
		</Authenticated>
	)
}
