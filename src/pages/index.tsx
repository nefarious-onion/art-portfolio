import { GetStaticProps } from 'next';
import Image from 'next/image';
import { apolloClient } from 'setup/apolloClient';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA, Home, Site } from 'queries/page';
//components
import HomeLayout from 'components/home/HomeLayout';

interface HomeProps {
  homeData: GetPageDataResult<Home>['pageCollection']['items'][0]
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
}

const HomePage: React.FC<HomeProps> = ({ homeData, siteData }) => {
  const { pageTexts, pageImagesCollection } = homeData
  const mainImage = pageImagesCollection.items.find(_ => true)
  return (
    <HomeLayout siteData={siteData}>
      <div className='center w-full laptop:w-3/4 overflow-hidden h-full -z-10'>
        <Image
          src={mainImage.url}
          alt={mainImage.title}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className="laptop:pl-12 h-full laptop:pt-12 font-alternate laptop:text-3xl  relative">
        <div className='text-fullMint laptop:mb-12 pl-8 py-2 text-2xl font-bold absolute top-28 left-0 bg-black bg-opacity-50 w-full'>
          <p>{pageTexts.hero.hero1}</p>
          <p>{pageTexts.hero.hero2}</p>
          <p>{pageTexts.hero.hero3}</p>
        </div>
        <div className='text-white  w-full pl-8 py-2 text-right pr-8 absolute bottom-28 right-0 bg-black bg-opacity-50'>
          <p>{pageTexts.hero.hero4}</p>
          <p>{pageTexts.hero.hero7}</p>
          <p>{pageTexts.hero.hero6}</p>
          <p>{pageTexts.hero.hero5}</p>
        </div>
      </div>
    </HomeLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const { data: homeData } = await apolloClient.query<GetPageDataResult<Home>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Home', locale }
  })
  const { data: siteData } = await apolloClient.query<GetPageDataResult<Site>, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site', locale }
  })

  console.log('locale', locale);

  return {
    props: {
      homeData: homeData.pageCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
    }
  }
}

export default HomePage;
