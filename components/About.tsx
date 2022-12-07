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
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold '>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ullam
          mollitia quis doloremque aspernatur vitae culpa earum consectetur
          debitis, error reprehenderit similique dolorum asperiores sint alias,
          aliquid minus soluta inventore corporis excepturi ipsa rem tempore!
          Est quas velit nobis, qui quasi esse, aspernatur harum natus veniam
          consectetur odit, vitae reprehenderit?
        </p>
      </div>
    </motion.div>
  );
};
export default About;
