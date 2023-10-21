import { TypedDocumentNode } from "@apollo/client"
import { useQuery } from "@tanstack/react-query"
import { GraphQLClient, request, RequestDocument, Variables } from "graphql-request"
import { VariablesAndRequestHeadersArgs } from "graphql-request/build/esm/types"
import { useSession } from "next-auth/react"
import { useMemo } from "react"

const endpoint = process.env.NEXT_PUBLIC_API_URL + "/graphql"

export default function useGraphql<T, V extends Variables = Variables>(
	key: string,
	document: RequestDocument | TypedDocumentNode<T, V>,
	...variablesAndRequestHeaders: VariablesAndRequestHeadersArgs<V>
) {
	const { data: session } = useSession()

	const client = useMemo(() => {
		const headers = {
			headers: {
				authorization: `Bearer ` + session?.jwt,
			},
		}

		return new GraphQLClient(endpoint, headers)
	}, [session?.jwt])

	const fetchData = async () => client.request(document, ...variablesAndRequestHeaders)

	return useQuery({
		queryKey: [key],
		queryFn: fetchData,
	})
}
