import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavData } from './TopNav';

type NavMenuProps = {
  navData: NavData
  toggleMobileMenu: () => void
  isVisible: boolean
}

type LinkItemProps = {
  href: string
}

const LinkItem: React.FC<LinkItemProps> = ({ children, href }) => {
  const router = useRouter()
  const isActive = router.pathname === href
  const activeClass = isActive ? 'text-fullPink' : ''
  const transitionClasses = 'transition-colors duration-150 ease-in-out '
  const menuItemClasses = `block mobile:py-4 tablet:py-1 tablet:px-4 laptop:hover:bg-fullMint laptop:hover:text-black ${transitionClasses} ${activeClass}`
  return (
    <Link href={href}>
      <a
        className={menuItemClasses} >
        {children}
      </a>
    </Link>
  )
}

const NavMenu: React.FC<NavMenuProps> = ({ navData, toggleMobileMenu, isVisible }) => {
  const mobileVisibility = isVisible ? 'mobile:visible' : 'mobile:invisible'
  const mobileClasses = `${mobileVisibility} mobile:h-screen mobile:w-screen mobile:pt-40  mobile:text-3xl text-center`
  const tabletAndUpClasses = 'laptop:text-3xl tablet:text-2xl tablet:text-right tablet:mr-4 tablet:mt-8 tablet:border-r-4 tablet:border-paleGreen laptop:hover:border-fullMint'
  const sharedClasses = 'fixed right-0 top-0 leading-10 bg-black antialiased'

  return (

    <ul className={`${sharedClasses} ${mobileClasses} ${tabletAndUpClasses}`}>
      <li >
        <LinkItem href='/'>{navData.home}</LinkItem>
      </li>
      <li >
        <LinkItem href='/projects'>{navData.projects}</LinkItem>
      </li>
      <li >
        <LinkItem href='/about'>{navData.about}</LinkItem>
      </li>
      <li>
        <LinkItem href='/contact'>{navData.contact}</LinkItem>
      </li>
    </ul>

  );
}

export default NavMenu;
