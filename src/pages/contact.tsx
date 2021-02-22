import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';

interface ContactProps {
  aboutData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const contact: React.FC<ContactProps> = ({ siteData }) => {
  return (
    <Layout siteData={siteData} headerText='contact'>
      Contact
    </Layout>
  );
}
export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const { data: aboutData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Contact' }
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

export default contact;
