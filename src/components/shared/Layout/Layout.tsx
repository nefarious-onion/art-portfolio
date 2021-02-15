import Footer from '@shared/Footer/Footer';
import Navigation, { NavData } from '@shared/Navigation/Navigation';
import Head from 'next/head';

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
}

const Layout: React.FC<LayoutProps> = ({ siteData, children }) => {
  const { metadata, applicationTexts, socialMediaLinks } = siteData

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="'absolute top-0 left-0 w-full h-24 pb-0 px-4 z-50 s-20 bg-black">
        <Navigation navData={applicationTexts.navigation} />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
