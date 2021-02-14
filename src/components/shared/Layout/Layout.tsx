import Footer from '@shared/Footer/Footer';
import Navigation from '@shared/Navigation/Navigation';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>muutos company</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
