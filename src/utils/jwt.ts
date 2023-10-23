import { cookies } from "next/headers"

const cookie = "jwt"

export function getJwt() {
	console.log("Get jwt")
	return cookies().get(cookie)?.value
}

export function setJwt(jwt: string) {
	console.log("Set jwt")
	const oneDay = 24 * 60 * 60 * 1000
	cookies().set(cookie, jwt, { expires: Date.now() - oneDay })
}

export function clearJwt() {
	console.log("Clear jwt")
	cookies().delete(cookie)
}
