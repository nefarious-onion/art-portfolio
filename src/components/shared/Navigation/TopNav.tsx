import Link from 'next/link'

const TopNav: React.FC = () => {
  const sharedHeaderClasses = 'laptop:text-4xl tablet:text-3xl mobile:text-2xl antialiased'

  return (
    <div className=''>
      <div className={`${sharedHeaderClasses} text-paleGreen pl-8 py-8`}>
        <Link href='/'>
          <a className='block uppercase text-2xl mobile:text-3xl font-extrabold tracking-widest font-logo text-white'>muutos company</a>
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
