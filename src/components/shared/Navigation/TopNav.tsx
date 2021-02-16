import Link from 'next/link'

export type NavData = {
  home: string
  about: string
  contact: string
  projects: string
}

type NavProps = {
  navData: NavData
  headerText: string
}

const TopNav: React.FC<NavProps> = ({ navData, headerText }) => {
  const responsiveHeaderTextStyles = 'laptop:text-4xl tablet:text-3xl mobile:text-2xl antialiased py-4'

  return (
    <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 grid-rows-2'>
      <div className={`${responsiveHeaderTextStyles} laptop:col-span-2 pl-4 text-highYellow`}>
        <Link href='/'>
          <a>muutos company</a>
        </Link>
      </div>
      <div className={`${responsiveHeaderTextStyles} bg-fullMint text-black text-right row-start-2 mobile:text-center pr-4`}>
        {headerText}
      </div>
    </div>
  );
}

export default TopNav;
