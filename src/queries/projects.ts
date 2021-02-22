import { gql } from '@apollo/client';

export interface Project {
  sys: Pick<Sys, 'id'>
  projectType: ProjectType
  title: string
  slug: string
  location: string
  date: Date
  shortDescription: string
  description: string
  previewImage: Asset
  photosCollection: {
    items: Asset[]
  }
}
export interface Sys {
  id: string
  publishedAt: Date
  firstPublishedAt: Date
  spaceId: string
  environmentId: string
}
export interface ProjectType {
  sys: Sys
  type: 'Future Event' | 'Body Painting' | 'Performance' | string
}
export interface Asset {
  title: string
  url: string
  width: number
  height: number
}

export const GET_ALL_PROJECTS = gql`
query getAllProjects {
  projectCollection {
    items {
      sys {
        id
      }
      title
      slug
      previewImage {
        title
        url
        width
        height
      }
      shortDescription
      }
    }
}
`
export interface GetAllProjectsResult {
  projectCollection: {
    items: Pick<Project, 'sys' | 'slug' | 'title' | 'shortDescription' | 'previewImage'>[]
  }
}

export const GET_SLUGS = gql`
query getSlugs {
  projectCollection {
    items {
      slug
    }
  }
}
`
export interface GetSlugsResult {
  projectCollection: {
    items: Pick<Project, 'slug'>[]
  }
}

export const GET_PROJECT_BY_SLUG = gql`
query getId($slug: String!) {
  projectCollection(where: {
    slug: $slug
  }) {
    items {
      title
      location
      date
      description
      photosCollection {
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
export interface GetProjectBySlugResult {
  projectCollection: {
    items: Omit<Project, 'shortDescription' | 'previewImage'>[]
  }
}
export interface GetProjectBySlugQueryVariables {
  slug: string;
}

// export const GET_ID = gql`
// query getId($currentSlug: String!) {
//   projectCollection(where: {
//     slug: $currentSlug
//   }) {
// 	  items {
//       sys {
//         id
//       }
//     }
//   }
// }
// `
// export const GET_PROJECT = gql`
// query getProject($id: String!) {
//   project(id: $id) {
//     title
//     location
//     date
//     description
//     photosCollection {
//       items {
//         title
//         url
//       }
//     }
//   }
// }
// `