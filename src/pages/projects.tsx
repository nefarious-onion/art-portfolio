import { apolloClient } from 'setup/apolloClient';
import { GET_SITE_DATA } from 'queries/site';
import { GET_ALL_PROJECTS } from 'queries/projects';
import Layout, { SiteData } from '@shared/Layout/Layout';

type ProjectsData = {
  sys: {
    id: string
  }
  title: string
  previewImage: {
    title: string
    url: string
  }
  shortDescription: string
}

type ProjectsProps = {
  siteData: SiteData
  projectsData: ProjectsData
}

const projects: React.FC<ProjectsProps> = ({ siteData, projectsData }) => {
  return (
    <Layout siteData={siteData}>
      projects
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: siteData } = await apolloClient.query({
    query: GET_SITE_DATA
  })
  const { data: projectsData } = await apolloClient.query({
    query: GET_ALL_PROJECTS
  })

  return {
    props: {
      siteData: siteData.siteInfo,
      projectsData: projectsData.projectCollection.items
    }
  }
}

export default projects;
