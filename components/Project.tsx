import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  projectImage: string;
  title: string;
  description: string;
  information: string;
  stackIcons: string[];
  link: string;
  gitHubLink: string;
};
const Project = (props: Props) => {
  const { title, description, information, stackIcons, projectImage, link, gitHubLink } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-[60vh]'
    >
      {/* <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{  }}
        src={projectImage}
        className='w-96 h-72 transform-none border-8 border-gray-400/20 rounded-md'
      /> */}
      <Image src={projectImage} className='transform-none border-8 border-gray-400/20 rounded-md' alt='title' width={260} height={180}/>
      <div className='px-0 md:px-10 max-w-6xl'>
        <Link href={link} target='_blank'>
          <h4 className='text-2xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>{title}</span> -{' '}
            {description}
          </h4>
        </Link>
        <Link href={gitHubLink}>
          <span className='underline flex justify-center text-base text-[#F7AB0A]/50'>GitHub Link</span>
        </Link>
        <div className='flex items-center justify-center mt-5'>
          {stackIcons.map((stackIcon, index) => (
            <Image
              key={index}
              width={28}
              height={28}
              src={stackIcon}
              alt='stack-icon'
            />
          ))}
        </div>
        <p className='text-md text-center md:text-left mt-5'>{information}</p>
      </div>
    </motion.div>
  );
};
export default Project;
