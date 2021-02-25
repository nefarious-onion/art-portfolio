import { apolloClient } from 'setup/apolloClient';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown'
import { GET_SLUGS, GET_PROJECT_BY_SLUG, GetProjectBySlugResult, GetProjectBySlugQueryVariables, GetSlugsResult, Project } from 'queries/projects';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA, Site } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';

interface ProjectProps {
  project: GetProjectBySlugResult['projectCollection']['items'][0]
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
  projectData: GetPageDataResult<Project>['pageCollection']['items'][0]
}

const ProjectPage: React.FC<ProjectProps> = ({ project, siteData }) => {
  const mainImage = project.photosCollection.items[0]

  const imageList = project.photosCollection.items
    .filter(image => image.title !== mainImage.title)
    .map(photo => <div key={photo.title} className='mb-14'>
      <Image
        src={photo.url}
        alt={photo.title}
        layout='responsive'
        width={photo.width / 10}
        height={photo.height / 10} />
    </div>)

  return (
    <Layout siteData={siteData} headerText={project.title}>
      <div>
        <div className='laptop:w-2/3 laptop:mx-auto laptop:my-12 mb-8'>
          <Image
            src={mainImage.url}
            alt={mainImage.title}
            layout='responsive'
            width={mainImage.width / 10}
            height={mainImage.height / 10}
          />
          <ReactMarkdown className='textBox p-8 py-14'>
            {project.description}
          </ReactMarkdown>
          {imageList}
        </div>
      </div>
    </Layout>

  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { data } = await apolloClient.query<GetSlugsResult>({
    query: GET_SLUGS
  })

  //join locales and slugs into an array of arrays
  const _paths = data.projectCollection.items.map(project => locales.map(locale => (
    {
      params: { slug: project.slug },
      locale
    }
  )))
  //join separate path arrays into one
  const paths = [].concat(..._paths)

  return {
    paths,
    fallback: false
  }
}

//define type for returned props as projectprops
export const getStaticProps: GetStaticProps<ProjectProps> = async ({ locale, params }) => {
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug

  const { data } = await apolloClient.query<GetProjectBySlugResult, GetProjectBySlugQueryVariables>({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug, locale }
  })

  const { data: siteData } = await apolloClient.query<GetPageDataResult<Site>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site', locale }
  })

  const { data: projectData } = await apolloClient.query<GetPageDataResult<Project>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Project', locale }
  })

  return {
    props: {
      project: data.projectCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
      projectData: projectData.pageCollection.items.find(_ => true),
    }
  };
}
export default ProjectPage;
