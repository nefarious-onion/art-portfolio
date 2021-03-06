import { useState } from 'react';
import Head from 'next/head';
import { GetPageDataResult, Site } from 'queries/page';
//components
import HomeLogo from 'components/home/HomeLogo';
import NavMenu from '@shared/Navigation/NavMenu';

type LayoutProps = {
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
}

const HomeLayout: React.FC<LayoutProps> = ({ siteData, children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const { pageTexts } = siteData

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
    <>
      <Head>
        <title>{pageTexts.metadata.title}</title>
        <meta name="description" content={pageTexts.metadata.description} />
      </Head>
      <div className="laptop:container mx-auto relative min-h-screen">
        <header className='py-6 pl-8'>
          <HomeLogo />
          <NavMenu
            navData={pageTexts.navigation}
            toggleMenu={toggleMenu}
            isVisible={isMenuVisible}
          />
          <div
            onClick={toggleMenu}
            className='w-12 bg-black py-2 fixed right-0 top-0 p-2 mr-4 mt-6 laptop:mt-0 z-30 rounded-sm tablet:w-16 tablet:mr-8 laptop:relative laptop:float-right largeDesktop:invisible'>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 30 14.8"
              className='fill-current text-fullMint ...'
            >
              <rect y="10.8" width="30" height="4" />
              <rect x="15" width="15" height="4" />
            </svg>
          </div>
        </header>
        <main className='h-auto'>
          {children}
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
