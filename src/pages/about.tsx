import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';

interface AboutProps {
  aboutData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const About: React.FC<AboutProps> = ({ siteData }) => {
  return (
    <Layout siteData={siteData} headerText='about'>
      about
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const { data: aboutData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'About' }
  })
  const { data: siteData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site' }
  })

  return {
    props: {
      aboutData: aboutData.pageCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
    }
  }
}
export default About;
