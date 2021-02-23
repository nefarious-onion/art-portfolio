import { apolloClient } from 'setup/apolloClient';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useViewPort } from 'hooks/useViewPort';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown'
import { GET_SLUGS, GET_PROJECT_BY_SLUG, GetProjectBySlugResult, GetProjectBySlugQueryVariables, GetSlugsResult } from 'queries/projects';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';

interface ProjectProps {
  project: GetProjectBySlugResult['projectCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
  projectData: GetPageDataResult['pageCollection']['items'][0]
}

const Project: React.FC<ProjectProps> = ({ project, siteData }) => {
  const { width } = useViewPort()
  const laptopBreakpoint = 1024
  const mainMobileImage = project.photosCollection.items[0]

  const imageList = project.photosCollection.items.map(photo => <Image
    key={photo.title}
    src={photo.url}
    alt={photo.title}
    layout='responsive'
    width={photo.width / 10}
    height={photo.height / 10}
  />)

  return (
    <Layout siteData={siteData} headerText={project.title}>
      <div className='laptop:flex'>
        {width < laptopBreakpoint
          ? <div className=''>
            <Image
              src={mainMobileImage.url}
              alt={mainMobileImage.title}
              layout='responsive'
              width={mainMobileImage.width / 10}
              height={mainMobileImage.height / 10}
            />
          </div>
          : null
        }
        <ReactMarkdown className='textBox p-8 pt-14 laptop:order-2 laptop:w-2/4 laptop: flex-grow-0'>
          {project.description}
        </ReactMarkdown>
        <div className='laptop:flex-1 laptop:order-1 laptop:w-2/4 laptop:flex-shrink-0'>
          {imageList}
        </div>
      </div>
    </Layout>

  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetSlugsResult>({
    query: GET_SLUGS
  })

  const paths = data.projectCollection.items.map(project => `/project/${project.slug}`)

  return {
    paths,
    fallback: false
  }
}

//define type for returned props as projectprops
export const getStaticProps: GetStaticProps<ProjectProps> = async (props) => {
  const slug = Array.isArray(props.params.slug)
    ? props.params.slug[0]
    : props.params.slug

  const { data } = await apolloClient.query<GetProjectBySlugResult, GetProjectBySlugQueryVariables>({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug }
  })

  const { data: siteData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site' }
  })

  const { data: projectData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Project' }
  })

  return {
    props: {
      project: data.projectCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
      projectData: projectData.pageCollection.items.find(_ => true),
    }
  };
}
export default Project;
