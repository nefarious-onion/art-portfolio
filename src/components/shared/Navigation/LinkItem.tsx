import Link from 'next/link'

type LinkItemProps = {
  href: string
  pathname?: string
  title: string
  locale?: string
}

const LinkItem: React.FC<LinkItemProps> = ({ href, title, pathname }) => {
  const isActive = pathname === href
  const activeClass = isActive ? 'text-fullPink' : ''
  const transitionClasses = 'transition-colors duration-150 ease-in-out'
  return (
    <Link href={href} >
      <a
        className={`block py-2 tablet:py-1 tablet:px-4 laptop:hover:bg-fullMint laptop:hover:text-black ${transitionClasses} ${activeClass}`}
      >
        {title}
      </a>
    </Link>
  )
}

export default LinkItem
