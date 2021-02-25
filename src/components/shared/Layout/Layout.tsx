import { useState } from 'react';
import Head from 'next/head';
import { GetPageDataResult, Site } from 'queries/page';
//components
import NavMenu from '@shared/Navigation/NavMenu';
import Footer from '@shared/Footer/Footer';
import Logo from '@shared/Navigation/Logo';

type LayoutProps = {
  siteData: GetPageDataResult<Site>['pageCollection']['items'][0]
  headerText: string
}

const Layout: React.FC<LayoutProps> = ({ siteData, children, headerText }) => {
  const [isMenuVisible, setMenuIsVisible] = useState(false)
  const { pageTexts } = siteData

  const toggleMenu = () => {
    setMenuIsVisible(!isMenuVisible)
  }

  return (
    <>
      <Head>
        <title>{pageTexts.metadata.title}</title>
        <meta name="description" content={pageTexts.metadata.description} />
      </Head>
      <div className="laptop:container mx-auto ">
        <header className='py-6 pl-8'>
          <Logo />
          <NavMenu
            navData={pageTexts.navigation}
            toggleMenu={toggleMenu}
            isVisible={isMenuVisible}
          />
          <div
            onClick={toggleMenu}
            className='w-12 bg-black py-2 fixed right-0 top-0 p-2 mr-4 mt-6 z-30 rounded-sm tablet:w-16 tablet:mr-8 laptop:relative laptop:float-right'>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 30 14.8"
              className='fill-current text-fullMint'
            >
              <rect y="10.8" width="30" height="4" />
              <rect x="15" width="15" height="4" />
            </svg>
          </div>
        </header>
        <main >
          <div className=' bg-black laptop:w-2/4 laptop:text-right text-center  tracking-widest text-3xl  laptop:text-4xl text-black font-bold pt-2 z-10 sticky top-0 laptop:relative '>
            <div className='bg-fullMint  py-4 laptop:pr-8'>
              {headerText}
            </div>

          </div>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
