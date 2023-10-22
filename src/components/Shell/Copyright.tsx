import { IconCopyright } from "@tabler/icons-react"
import { Group, Text } from "@mantine/core"

export default function Copyright() {
	return (
		<Group>
			<IconCopyright size={20} />
			<Text>#play14 2014 - {new Date().getFullYear()}</Text>
		</Group>
	)
}
