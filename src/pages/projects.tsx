import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import { GetAllProjectsQueryVariables, GetAllProjectsResult, GET_ALL_PROJECTS } from 'queries/projects';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA, Projects, Site } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';
import ListItem from 'components/projects/ListItem';
interface ProjectsProps {
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
  projects: GetAllProjectsResult['projectCollection']['items']
  projectsData: GetPageDataResult<Projects>['pageCollection']['items'][0]
}

const ProjectsPage: React.FC<ProjectsProps> = ({ siteData, projects }) => {

  const projectList = projects.map(project => <ListItem
    key={project.sys.id}
    project={project}
  />)


  return (
    <Layout siteData={siteData} headerText='projects'>
      <div className='bg-black py-5 px-8'>
        {projectList}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({ locale }) => {
  const { data: siteData } = await apolloClient.query<GetPageDataResult<Site>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site', locale }
  })
  const { data: projectsData } = await apolloClient.query<GetPageDataResult<Projects>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Projects', locale }
  })

  const { data } = await apolloClient.query<GetAllProjectsResult, GetAllProjectsQueryVariables>({
    query: GET_ALL_PROJECTS,
    variables: { locale }
  })
  return {
    props: {
      siteData: siteData.pageCollection.items.find(_ => true),
      projectsData: projectsData.pageCollection.items.find(_ => true),
      projects: data.projectCollection.items
    }
  }
}

export default ProjectsPage;
