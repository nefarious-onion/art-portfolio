import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA, About, Site } from 'queries/page';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
//components
import Layout from '@shared/Layout/Layout';
import { useViewPort } from 'hooks/useViewPort';

interface AboutProps {
  aboutData: GetPageDataResult<About>['pageCollection']['items'][0]
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
}

const AboutPage: React.FC<AboutProps> = ({ siteData, aboutData }) => {
  const pageImage = aboutData.pageImagesCollection.items[0]
  return (
    <Layout siteData={siteData} headerText='about'>


      <div className='laptop:w-2/3 laptop:mx-auto laptop:my-12 mb-8'>
        <Image
          src={pageImage.url}
          alt={pageImage.title}
          layout='responsive'
          width={pageImage.width / 10}
          height={pageImage.height / 10}
        />
      </div>
      <div className='text-white text-center'>
        <h2>{aboutData.pageTexts.headers.title}</h2>
      </div>
      <ReactMarkdown className='textBox p-8 text-center tablet:text-left laptop:w-2/3 laptop:mx-auto tablet:p-12'>
        {aboutData.longText}
      </ReactMarkdown>


    </Layout>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ locale }) => {
  const { data: aboutData } = await apolloClient.query<GetPageDataResult<About>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'About', locale }
  })
  const { data: siteData } = await apolloClient.query<GetPageDataResult<Site>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site', locale }
  })

  return {
    props: {
      aboutData: aboutData.pageCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
    }
  }
}
export default AboutPage;
