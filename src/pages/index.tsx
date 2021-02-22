import { GetStaticProps } from 'next';
import Image from 'next/image';
import { apolloClient } from 'setup/apolloClient';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
//components
import Layout from '@shared/Layout/Layout';

interface HomeProps {
  homeData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const Home: React.FC<HomeProps> = ({ homeData, siteData }) => {
  const { pageTexts } = homeData

  return (
    <Layout siteData={siteData} headerText=''>
      <div className="md:container">
        <div className='h-5/6 w-2/4'>
          {/* <Image
            src={mainImage.url}
            alt={mainImage.title}
            // layout="responsive"
            // width="240"
            // height="360"
            layout='fill'
            objectFit='cover'
            className=''
          //sizes="(max-width: 600px) 100vw"
          /> */}
        </div>
      </div>

      <div className='text-black bg-fullMint text-alternate font-medium p-5 laptop:text-3xl tablet:text-2xl'>
        <p>{pageTexts.hero.hero1}</p>
        <p>{pageTexts.hero.hero2}</p>
        <p>{pageTexts.hero.hero3}</p>
      </div>
      <div className='text-black text-alternate font-medium p-5 laptop:text-3xl tablet:text-2xl'>
        <p>{pageTexts.hero.hero4}</p>
        <p>{pageTexts.hero.hero5}</p>
        <p>{pageTexts.hero.hero6}</p>
        <p>{pageTexts.hero.hero7}</p>

      </div>


    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: homeData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Home' }
  })
  const { data: siteData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site' }
  })
  return {
    props: {
      homeData: homeData.pageCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
    }
  }
}

export default Home;
