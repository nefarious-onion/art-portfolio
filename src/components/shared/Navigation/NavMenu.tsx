import { useRouter } from 'next/router'
import { Site } from 'queries/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//components
import LinkItem from './LinkItem';
import LocaleSwitcher from './LocaleSwitcher';

type NavMenuProps = {
  navData: Site['navigation']
  toggleMenu: () => void
  isVisible: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({
  navData,
  toggleMenu,
  isVisible
}) => {
  const { pathname, locale, locales } = useRouter()
  const menuVisibility = isVisible ? 'visible translate-x-0' : 'invisible translate-x-full largeDesktop:translate-x-0 largeDesktop:visible'
  const transformClasses = 'ease-in-out transition-all duration-300 transform top-0 right-0'
  const sharedClasses = `${menuVisibility} ${transformClasses} leading-10 bg-black z-40 fixed right-0 top-0 h-screen`
  const mobileClasses = 'w-screen text-3xl text-center tablet:text-4x'
  const laptopAndUpClasses = 'desktop:w-1/4 laptop:w-1/3 laptop:pt-0 laptop:text-2xl laptop:text-right laptop:mr-4 laptop:border-r-4 laptop:border-paleGreen laptop:hover:border-fullMint largeDesktop:navAlignRight largeDesktop:border-none largeDesktop:bg-opacity-50 '


  const renderedNavList = navData.map(item => <li key={item.title}>
    <LinkItem href={item.href} pathname={pathname} title={item.title}></LinkItem>
  </li>)

  return (
    <div className={`${sharedClasses} ${mobileClasses} ${laptopAndUpClasses}`}>

      <FontAwesomeIcon
        onClick={toggleMenu}
        icon="times"
        className='text-fullPink float-left ml-10 mt-12 text-4xl largeDesktop:invisible'
      />


      <ul className='mt-40 laptop:mt-24 largeDesktop:mt-6' >
        {renderedNavList}
      </ul>
      <LocaleSwitcher pathname={pathname} currentLocale={locale} locales={locales} />
    </div>

  )
}

export default NavMenu
