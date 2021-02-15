import Image from 'next/image';
import { apolloClient } from 'setup/apolloClient';
import { GET_HOME_DATA } from 'queries/home';
import { SiteData } from '@shared/Layout/Layout';
//components
import Layout from '@shared/Layout/Layout';
import { GET_SITE_DATA } from 'queries/site';


export type PageData = {
  title: string
  pageTexts: {
    [key: string]: {
      [key: string]: string
    }
  }
  mainImage: {
    title: string
    url: "string"
  }
}

type HomeProps = {
  pageData: PageData
  siteData: SiteData
}

const Home: React.FC<HomeProps> = ({ pageData, siteData }) => {
  const { pageTexts, mainImage } = pageData
  console.log(mainImage);


  return (
    <Layout siteData={siteData}>
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

export const getStaticProps = async () => {
  const { data: homeData } = await apolloClient.query({
    query: GET_HOME_DATA
  })
  const { data: siteData } = await apolloClient.query({
    query: GET_SITE_DATA
  })


  return {
    props: {
      pageData: homeData.page,
      siteData: siteData.siteInfo
    }
  }
}

export default Home;
