import { gql } from '@apollo/client';

export const GET_SITE_DATA = gql`
query getSiteData {
  siteInfo(id: "2hSCXaCboqfpZSuWvxWT0w") {
    title
    metadata
    applicationTexts
    socialMediaLinks
  }
}
`