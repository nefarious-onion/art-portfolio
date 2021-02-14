import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const API_TOKEN = process.env.CONTENTFUL_CONTENT_DELIVERY_KEY;

const link = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  headers: {
    authorization: `Bearer ${API_TOKEN}`
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});