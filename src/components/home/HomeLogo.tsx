import Link from 'next/link'

const HomeLogo: React.FC = () => {
  return (
    <Link href='/'>
      <a className='inline-block uppercase text-2xl mobile:text-3xl  tablet:text-5xl font-extrabold tracking-widest font-logo text-white'>
        muutos company
    </a>
    </Link>
  );
}

export default HomeLogo;
