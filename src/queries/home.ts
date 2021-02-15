import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
query getHomeData {
  page(id: "7iqhW9XeVBaC0CufvBN9kF") {
    title
    pageTexts
    mainImage{
      title
      url
    }
  }
}
`