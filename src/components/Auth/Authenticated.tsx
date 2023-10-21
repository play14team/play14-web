"use client"

import { useSession } from "next-auth/react"
import { PropsWithChildren } from "react"
import Loading from "../Loading"
import AccessDenied from "./AccessDenied"

export default function Authenticated({ children }: PropsWithChildren<{}>) {
	const { status } = useSession()

	if (status == "authenticated") return <>{children}</>

	if (status == "loading") return <Loading />

	return <AccessDenied />
}
