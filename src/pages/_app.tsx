import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'setup/apolloClient'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
