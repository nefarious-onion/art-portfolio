import { useState } from 'react';
import Head from 'next/head';
import TopNav, { NavData } from '@shared/Navigation/TopNav';
import NavMenu from '@shared/Navigation/NavMenu';
import Footer from '@shared/Footer/Footer';

export type SiteData = {
  __typename: string,
  title: string
  metadata: {
    title: string
    description: string
  }
  applicationTexts: {
    navigation: NavData
  }
  socialMediaLinks: {
    facebook: string
    youtube: string
    instagram: string
  }
  footer: {
    copyright: string
  }
}

type LayoutProps = {
  siteData: SiteData
  headerText: string
}

const Layout: React.FC<LayoutProps> = ({ siteData, children, headerText }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { metadata, applicationTexts, socialMediaLinks } = siteData

  const toggleMobileMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <header className="bg-black">
        <TopNav
          navData={applicationTexts.navigation}
          headerText={headerText}
        />
        <NavMenu
          navData={applicationTexts.navigation}
          toggleMobileMenu={toggleMobileMenu} isVisible={isVisible}
        />
        <div
          onClick={toggleMobileMenu}
          className="w-8 bg-black py-2 tablet:invisible fixed right-0 top-0  mr-4 mt-5">
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
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
