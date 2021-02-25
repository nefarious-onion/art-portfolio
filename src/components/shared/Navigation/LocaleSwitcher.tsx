
import Link from 'next/link'

interface LocaleSwitcherProps {
  pathname: string
  currentLocale: string
  locales: string[]
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ pathname, currentLocale, locales }) => {
  const linkClasses = 'laptop:hover:bg-fullPink laptop:hover:text-black'

  const links = locales.map(locale => <Link key={locale} href={pathname} locale={locale}>
    <a className={locale === currentLocale ? `text-fullPink border-b-2 border-fullPink ${linkClasses}` : `${linkClasses}`}>
      {locale}
    </a>
  </Link>)
  return (
    <div className='tablet:mr-4 text-xl uppercase text-center space-x-12 mt-20 laptop:text-right laptop:mt-10 laptop:mr-10'>
      {links}
    </div>
  );
}

export default LocaleSwitcher;
