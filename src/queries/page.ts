import { gql } from '@apollo/client';
import { Asset } from './projects';

export interface Page {
  title: string
  pageTexts: {
    [key: string]: {
      [key: string]: string
    }
  }
  longText: string
  pageImagesCollection: {
    items: Asset[]
  }
}

// export const GET_PAGE_IMAGE = gql`
// query getPageImage($title: String!) {
//   pageCollection(where: {
//     title: $title
//   }) {
//     items {
//       pageImagesCollection {
//         items {
//           title
//           url
//           width
//           height
//         }
//       }
//     }
//   }
// `
// export interface GetPageImageResult {
//   pageCollection: {
//     items: Pick<Page, 'pageImageCollection'>
//   }
// }

export const GET_PAGE_DATA = gql`
query getPageData($title: String!) {
  pageCollection(where: {
    title: $title
  }) {
    items {
      title
      pageTexts
      longText
      pageImagesCollection {
        items {
          title
          url
          width
          height
        }
      }
    }
  }
}
`
export interface GetPageDataResult {
  pageCollection: {
    items: Page[]
  }
}

export interface GetPageDataQueryVariables {
  title: string
}