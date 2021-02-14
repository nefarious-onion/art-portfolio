import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const API_TOKEN = process.env.CONTENTFUL_CONTENT_DELIVERY_KEY;



const createApolloClient = (spaceId: string, apiToken: string) => {
  const link = createHttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    headers: {
      authorization: `Bearer ${apiToken}`
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
}

export const apolloClient = createApolloClient(SPACE_ID, API_TOKEN)