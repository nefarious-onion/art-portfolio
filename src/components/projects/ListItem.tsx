import Image from 'next/image';
import Link from 'next/link'
import { GetAllProjectsResult } from 'queries/projects';

type ListItemProps = {
  project: GetAllProjectsResult['projectCollection']['items'][0]
}
const ListItem: React.FC<ListItemProps> = ({ project }) => {
  return (
    <Link href={{
      pathname: '/project/[slug]',
      query: { slug: project.slug }
    }} >
      <a className='block py-5 mobile:py-8 laptop:grid grid-cols-2'>
        <Image
          src={project.previewImage.url}
          alt={project.previewImage.title}
          layout="responsive"
          width="300"
          height="200"
          className='stripes rounded-sm'
        />
        <div className='stripes bg-darkerGrey laptop:bg-black pt-5 mobile:pt-8 laptop:text-right laptop:p-0  laptop:hover:bg-darkerGrey transition-colors  duration-300 ease-in'>
          <h2 className='text-fullMint ml-4 laptop:m-0  laptop:py-4 laptop:pr-4 '>
            {project.title}
          </h2>
          <div className='mt-5 mobile:mt-8 ml-4 text-lg laptop:ml-0'>
            {project.shortDescription}
          </div>
          <div className="bg-fullPink text-black p-4 font-bold text-center mt-8 mobile:mt-12 rounded-sm text-xl laptop:inline-block laptop:bg-mutedPink laptop:hover:bg-fullPink transition-colors  duration-200 ease-in ">
            Find out more
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ListItem;
