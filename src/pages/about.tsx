import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
//components
import Layout from '@shared/Layout/Layout';
import { useViewPort } from 'hooks/useViewPort';

interface AboutProps {
  aboutData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const About: React.FC<AboutProps> = ({ siteData, aboutData }) => {
  const pageImage = aboutData.pageImagesCollection.items[0]
  return (
    <Layout siteData={siteData} headerText='about'>
      <div className='p-8 laptop:p-12'>
        <div className='text-white pb-8 laptop:pb-12 text-center'>
          <h2>{aboutData.pageTexts.about.title}</h2>
        </div>
        <div className='laptop:w-2/3 laptop:mx-auto'>
          <Image
            src={pageImage.url}
            alt={pageImage.title}
            layout='responsive'
            width={pageImage.width / 10}
            height={pageImage.height / 10}
          />
        </div>
        <ReactMarkdown className='textBox p-8 text-center tablet:text-left laptop:w-2/3 laptop:mx-auto tablet:p-12'>
          {aboutData.longText}
        </ReactMarkdown>
      </div>

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
