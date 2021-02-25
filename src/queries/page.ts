import { gql } from '@apollo/client';
import { Asset } from './projects';

export interface About {
  headers: {
    title: string
    pageHeader: string
  }
}
export interface Projects {
  headers: {
    pageHeader: string
  }
  buttonTexts: {
    linkItemButton: string
  }
}
export interface Project {
  headers: {
  }

}
export interface Contact {
  headers: {
    header1: string
    header2: string
    pageHeader: string
  }
  contactForm: {
    name: string
    send: string
    email: string
    message: string
    subject: string
    contact_title: string
    yup_required: string
    yup_error_name: string
    yup_error_email: string
    yup_error_message: string
    ph_name: string
    ph_email: string
    ph_message: string
  },
  socialmedia: {
    facebook: string
    instagram: string
    youtube: string
  }
}
export interface Site {
  footer: {
    copyright: string
  }
  metadata: {
    title: string
    description: string
  }
  navigation: NavObj[]
}
type NavObj = {
  title: string
  href: string
}
export interface Home {
  hero: {
    hero1: string
    hero2: string
    hero3: string
    hero4: string
    hero5: string
    hero6: string
    hero7: string
  }
}

export interface Page<T> {
  title: string
  pageTexts: T
  longText: string
  pageImagesCollection: {
    items: Asset[]
  }
}

export const GET_PAGE_DATA = gql`
query getPageData($title: String!, $locale: String!) {
  pageCollection(where: {
    title: $title
  }) {
    items {
      title
      pageTexts(locale: $locale)
      longText(locale: $locale)
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
export interface GetPageDataResult<T> {
  pageCollection: {
    items: Page<T>[]
  }
}

export interface GetPageDataQueryVariables {
  title: string
  locale: string
}