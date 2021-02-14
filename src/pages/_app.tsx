import { ApolloProvider } from '@apollo/client'
import createApolloClient from 'setup/apolloClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
