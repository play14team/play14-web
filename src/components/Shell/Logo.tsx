import { MantineColorScheme, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"
import { Image } from "@mantine/core"
import NextImage, { StaticImageData } from "next/image"

import Play14DarkXs from "/public/logo/dark/play14_dark_xs.png"
import Play14DarkSm from "/public/logo/dark/play14_dark_sm.png"
import Play14DarkMd from "/public/logo/dark/play14_dark_md.png"
import Play14DarkLg from "/public/logo/dark/play14_dark_lg.png"
import Play14DarkXl from "/public/logo/dark/play14_dark_xl.png"

import Play14LightXs from "/public/logo/light/play14_light_xs.png"
import Play14LightLg from "/public/logo/light/play14_light_lg.png"
import Play14LightXl from "/public/logo/light/play14_light_xl.png"
import Play14LightMd from "/public/logo/light/play14_light_md.png"
import Play14LightSm from "/public/logo/light/play14_light_sm.png"

const dark = new Map<Quality, StaticImageData>([
	["xs", Play14DarkXs],
	["sm", Play14DarkSm],
	["md", Play14DarkMd],
	["lg", Play14DarkLg],
	["xl", Play14DarkXl],
])

const light = new Map<Quality, StaticImageData>([
	["xs", Play14LightXs],
	["sm", Play14LightSm],
	["md", Play14LightMd],
	["lg", Play14LightLg],
	["xl", Play14LightXl],
])

const sources = new Map<MantineColorScheme, Map<Quality, StaticImageData>>([
	["dark", dark],
	["light", light],
])

type Quality = "xs" | "sm" | "md" | "lg" | "xl"

interface LogoProps {
	w?: number
	h?: number
	quality?: Quality
}

export default function Logo({ w, h, quality }: LogoProps) {
	const { colorScheme } = useMantineColorScheme()
	const source = sources.get(colorScheme)?.get(quality ?? "sm")

	return (
		<Link href="/">
			<Image src={source} w={w ? w : "auto"} h={h ? h : "auto"} alt="play14 logo" component={NextImage} />
		</Link>
	)
}
