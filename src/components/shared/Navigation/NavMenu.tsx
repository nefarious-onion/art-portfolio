import LinkItem from './LinkItem';

type NavMenuProps = {
  navData: { [key: string]: string }
  toggleMobileMenu: () => void
  isVisible: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({ navData, toggleMobileMenu, isVisible }) => {
  const mobileVisibility = isVisible ? 'visible' : 'invisible'

  const mobileClasses = `${mobileVisibility} h-screen w-screen pt-40  text-3xl text-center`

  const tabletAndUpClasses = 'tablet:visible tablet:h-auto tablet:w-auto tablet:pt-0 laptop:text-3xl tablet:text-2xl tablet:text-right tablet:mr-4 tablet:mt-8 tablet:border-r-4 tablet:border-paleGreen laptop:hover:border-fullMint'

  const sharedClasses = 'fixed right-0 top-0 leading-10 bg-black antialiased z-20'

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

  )
}

export default NavMenu
