import Layout, { SiteData } from '@shared/Layout/Layout';
import { apolloClient } from 'setup/apolloClient';
import { GET_SITE_DATA } from 'queries/site';
type AboutProps = {
  siteData: SiteData
}

const About: React.FC<AboutProps> = ({ siteData }) => {
  return (
    <Layout siteData={siteData} headerText='about'>
      about
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: siteData } = await apolloClient.query({
    query: GET_SITE_DATA
  })

  return {
    props: {
      siteData: siteData.siteInfo,
    }
  }
}
export default About;
