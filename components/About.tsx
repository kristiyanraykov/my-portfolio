import { motion } from 'framer-motion';

type Props = {};
const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        src='/me.jpeg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl md:text-4xl font-semibold '>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
        I currently work as an Account Manager for business clients in Bulgaria&apos;s industry-leading communications services provider. Although i&apos;ve been involved with telecommunictions ever since i graduated from school, i&apos;ve always had a passion for computers and programming. For the last 3 years most of my free time has been occupied with learning to code and so i have decided it&apos;s time to make a career out of what i love.
        </p>
      </div>
    </motion.div>
  );
};
export default About;
