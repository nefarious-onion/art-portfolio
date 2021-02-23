import { GetStaticProps } from 'next';
import Image from 'next/image';
import { apolloClient } from 'setup/apolloClient';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
//components
import HomeLayout from 'components/home/HomeLayout';

interface HomeProps {
  homeData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const Home: React.FC<HomeProps> = ({ homeData, siteData }) => {
  const { pageTexts, pageImagesCollection } = homeData
  const mainImage = pageImagesCollection.items.find(_ => true)
  return (
    <HomeLayout siteData={siteData} headerText=''>

      <div className='laptop:w-4/5 laptop:mx-auto'>
        <Image
          src={mainImage.url}
          alt={mainImage.title}
          // width={mainImage.width}
          // height={mainImage.height}
          // layout='responsive'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className='text-black bg-fullMint font-alternate font-medium p-5 laptop:text-3xl tablet:text-2xl w-1/2'>
        <p>{pageTexts.hero.hero1}</p>
        <p>{pageTexts.hero.hero2}</p>
        <p>{pageTexts.hero.hero3}</p>
      </div>
      <div className='text-white font-alternate font-medium p-5 laptop:text-3xl tablet:text-2xl'>
        <p>{pageTexts.hero.hero4}</p>
        <p>{pageTexts.hero.hero5}</p>
        <p>{pageTexts.hero.hero6}</p>
        <p>{pageTexts.hero.hero7}</p>

      </div>
    </HomeLayout>
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
