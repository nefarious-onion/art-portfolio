import Link from 'next/link'

export type NavData = {
  home: string
  about: string
  contact: string
  projects: string
}

type NavProps = {
  navData: NavData
}

const Navigation: React.FC<NavProps> = ({ navData }) => {

  return (
    <div className='flex justify-between'>
      <div
        className="desktop:text-5xl laptop:text-4xl tablet:text-3xl mobile:text-2xl antialiased place-self-center"
      >
        <Link href='/'>
          <a>muutos company</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/'>
            <a>{navData.home}</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a>{navData.projects}</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>{navData.about}</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>{navData.contact}</a>
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Navigation;
