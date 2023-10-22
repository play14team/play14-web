import { Loader, Center } from "@mantine/core"
import React from "react"

export default function Loading() {
	return (
		<Center>
			<Loader type="dots" w={100} />
		</Center>
	)
}
