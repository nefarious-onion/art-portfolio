import Link from 'next/link'
import { useRouter } from 'next/router'

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

export default LinkItem
