import { useRouter } from 'next/router'
import { Site } from 'queries/page';
//components
import LinkItem from './LinkItem';
import LocaleSwitcher from './LocaleSwitcher';

type NavMenuProps = {
  navData: Pick<Site, 'navigation'>
  toggleMobileMenu: () => void
  isVisible: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({
  navData,
  toggleMobileMenu,
  isVisible
}) => {
  const { pathname, locale, locales } = useRouter()
  const mobileVisibility = isVisible ? 'visible' : 'invisible'

  const sharedClasses = 'fixed right-0 top-0 leading-10 bg-black antialiased z-20'

  const mobileClasses = `${mobileVisibility} h-screen w-screen pt-40 text-3xl text-center`

  const tabletAndUpClasses = 'tablet:visible tablet:h-auto tablet:w-auto tablet:pt-0 laptop:text-3xl tablet:text-2xl tablet:text-right tablet:mr-4 tablet:mt-8 tablet:border-r-4 tablet:border-paleGreen laptop:hover:border-fullMint'


  const renderedNavList = navData.map(item => <li key={item.title}>
    <LinkItem href={item.href} pathname={pathname} title={item.title}></LinkItem>
  </li>)

  return (
    <div className={`${sharedClasses} ${mobileClasses} ${tabletAndUpClasses}`}>
      <ul >
        {renderedNavList}
      </ul>
      <LocaleSwitcher pathname={pathname} currentLocale={locale} locales={locales} />
    </div>

  )
}

export default NavMenu
