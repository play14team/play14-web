import { Title } from "@mantine/core"
import Authenticated from "../Auth/Authenticated"

export default function Me() {
	return (
		<Authenticated>
			<Title>Me</Title>
		</Authenticated>
	)
}
