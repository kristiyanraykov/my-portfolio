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
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-[70vh]'
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={projectImage}
        className='w-128 h-64 transform-none border-8 border-gray-400/20 rounded-md'
      />
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <Link href={link} target='_blank'>
          <h4 className='text-4xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>{title}</span> -{' '}
            {description}
          </h4>
        </Link>
        <Link href={gitHubLink}>
          <span className='underline flex justify-center text-[#F7AB0A]/50'>GitHub Link</span>
        </Link>
        <div className='flex items-center space-x-2 justify-center'>
          {stackIcons.map((stackIcon, index) => (
            <Image
              key={index}
              width={40}
              height={40}
              src={stackIcon}
              alt='stack-icon'
            />
          ))}
        </div>
        <p className='text-lg text-center md:text-left'>{information}</p>
      </div>
    </motion.div>
  );
};
export default Project;
