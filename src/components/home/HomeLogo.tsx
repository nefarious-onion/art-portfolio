import Link from 'next/link'

const HomeLogo: React.FC = () => {
  return (
    <div className='laptop:text-4xl tablet:text-3xl mobile:text-2xl antialiased pl-8 py-8 laptop:fixed top-0 left-0 bg-black tablet:bg-transparent'>
      <Link href='/'>
        <a className='block uppercase text-2xl mobile:text-3xl  tablet:text-5xl font-extrabold tracking-widest font-logo text-white'>muutos company</a>
      </Link>
    </div>
  );
}

export default HomeLogo;