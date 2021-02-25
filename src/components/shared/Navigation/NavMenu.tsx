import { useRouter } from 'next/router'
import { Site } from 'queries/page';
//components
import LinkItem from './LinkItem';
import LocaleSwitcher from './LocaleSwitcher';

type NavMenuProps = {
  navData: Site['navigation']
  toggleMobileMenu: () => void
  isVisible: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({
  navData,
  toggleMobileMenu,
  isVisible
}) => {
  const { pathname, locale, locales } = useRouter()
  const menuVisibility = isVisible ? 'visible translate-x-0' : 'invisible translate-x-full'
  const transformClasses = 'ease-in-out ransition-all duration-300 transform top-0 right-0'
  const sharedClasses = `${menuVisibility} ${transformClasses} leading-10 bg-black z-20 fixed right-0 top-0 h-screen`
  const mobileClasses = 'w-screen pt-40 text-3xl text-center tablet:text-4x'
  const laptopAndUpClasses = 'laptop:w-1/4 laptop:pt-24 laptop:text-2xl laptop:text-right laptop:mr-4 laptop:border-r-4 laptop:border-paleGreen laptop:hover:border-fullMint'


  const renderedNavList = navData.map(item => <li key={item.title}>
    <LinkItem href={item.href} pathname={pathname} title={item.title}></LinkItem>
  </li>)

  return (
    <div className={`${sharedClasses} ${mobileClasses} ${laptopAndUpClasses}`}>
      <ul >
        {renderedNavList}
      </ul>
      <LocaleSwitcher pathname={pathname} currentLocale={locale} locales={locales} />
    </div>

  )
}

export default NavMenu
