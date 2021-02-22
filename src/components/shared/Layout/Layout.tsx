import { useState } from 'react';
import Head from 'next/head';
import TopNav from '@shared/Navigation/TopNav';
import NavMenu from '@shared/Navigation/NavMenu';
import Footer from '@shared/Footer/Footer';
import { GetPageDataResult } from 'queries/page';

type LayoutProps = {
  siteData: GetPageDataResult['pageCollection']['items'][0]
  headerText: string
}

const Layout: React.FC<LayoutProps> = ({ siteData, children, headerText }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { pageTexts } = siteData

  const toggleMobileMenu = () => {
    setIsVisible(!isVisible)
  }
  const sharedHeaderClasses = 'laptop:text-4xl tablet:text-3xl mobile:text-2xl antialiased'

  return (
    <>
      <Head>
        <title>{pageTexts.metadata.title}</title>
        <meta name="description" content={pageTexts.metadata.description} />
      </Head>
      <div className="laptop:container mx-auto ">
        <header>
          <TopNav
            headerText={headerText}
          />
          <NavMenu
            navData={pageTexts.navigation}
            toggleMobileMenu={toggleMobileMenu}
            isVisible={isVisible}
          />
          <div
            onClick={toggleMobileMenu}
            className="w-12 bg-black py-2 tablet:invisible fixed right-0 top-0 p-2 mr-4 mt-8 z-30 rounded-sm">
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
        <main >
          <div className={`${sharedHeaderClasses} bg-fullMint text-black tablet:text-right text-center pr-4 tablet:w-2/4 laptop:w-2/4 tracking-widest text-2xl mobile:text-3xl font-medium py-4 z-10 sticky top-0 ... tablet:relative`}>
            {headerText}
          </div>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
