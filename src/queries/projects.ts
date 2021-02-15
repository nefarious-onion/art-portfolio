import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
query getAllProjects {
  projectCollection {
    items {
      sys {
        id
      }
      title
      previewImage {
        title
        url
      }
      shortDescription
    }
  }
}
`