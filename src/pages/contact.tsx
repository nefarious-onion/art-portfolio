import { apolloClient } from 'setup/apolloClient';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { GetPageDataQueryVariables, GetPageDataResult, GET_PAGE_DATA } from 'queries/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//components
import Layout from '@shared/Layout/Layout';
import ContactForm from 'components/contact/ContactForm';

interface ContactProps {
  contactData: GetPageDataResult['pageCollection']['items'][0]
  siteData: GetPageDataResult['pageCollection']['items'][0]
}

const contact: React.FC<ContactProps> = ({ siteData, contactData }) => {
  console.log(contactData);
  const { pageTexts, pageImagesCollection } = contactData

  return (
    <Layout siteData={siteData} headerText='contact'>
      <div className='laptop:w-2/3 laptop:mx-auto laptop:mt-12'>
        <Image
          src={pageImagesCollection.items[0].url}
          alt={pageImagesCollection.items[0].title}
          height={pageImagesCollection.items[0].height / 10}
          width={pageImagesCollection.items[0].width / 10}
          layout='responsive'
        />
      </div>
      <div className='tablet:max-w-sm tablet:mx-auto laptop:max-w-full '>
        <div className='text-center'>
          <h3>{pageTexts.headers.header1}</h3>
          <div className='flex space-x-12 text-fullMint my-12 text-xl justify-center laptop:text-2xl'>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className='laptop:mb-12' />
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className='laptop:mb-12'
            />
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className='laptop:mb-12'
            />
          </div>
        </div>
        <div className='laptop:w-1/2 mx-auto'>
          <h3 className='mb-12 text-center '>{pageTexts.headers.header2}</h3>
          <ContactForm formTexts={pageTexts.contactForm} />
        </div>
      </div>
    </Layout >
  );
}
export const getStaticProps: GetStaticProps<ContactProps> = async ({ locale }) => {
  const { data: contactData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Contact', locale }
  })
  const { data: siteData } = await apolloClient.query<GetPageDataResult, GetPageDataQueryVariables>({
    query: GET_PAGE_DATA,
    variables: { title: 'Site', locale }
  })

  return {
    props: {
      contactData: contactData.pageCollection.items.find(_ => true),
      siteData: siteData.pageCollection.items.find(_ => true),
    }
  }
}

export default contact;
