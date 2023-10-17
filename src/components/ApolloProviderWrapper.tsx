import { PropsWithChildren, useMemo } from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useSession } from 'next-auth/react'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + '/graphql'
})

export const ApolloProviderWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { data: session } = useSession()

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const token = session?.jwt
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`
        }
      }
    })

    const link = from([authMiddleware, httpLink]);

    return new ApolloClient({
      link: link,
      cache: new InMemoryCache()
    })
  }, [session?.jwt])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
