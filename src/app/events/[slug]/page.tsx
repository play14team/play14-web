import { SlugParams } from "@/types/params"
import { Title } from "@mantine/core"

export default function page({ params }: SlugParams) {
	return <Title>Event: {params.slug}</Title>
}
