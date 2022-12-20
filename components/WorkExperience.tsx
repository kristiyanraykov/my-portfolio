import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { useHorizontalScroll } from '../utils/useSideScroll';
import React from 'react';

type Props = {};

const WorkExperience = (props: Props) => {
  const scrollRef = useHorizontalScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div
        ref={scrollRef}
        className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 whitespace-nowrap relative'
      >
        <ExperienceCard
          employer='Vivacom'
          employerIcon='/vivacom.png'
          started='January 2020'
          ended='Currently working'
          position='Account Manager'
          workInfo="I have a customer base of over 200 business clients. Each of them rely on me to offer the best services and solutions for their needs as well as solving problems on a daily basis. I'm responsible for maintaining strong and trusted relationships with them."
        />
        <ExperienceCard
          employer='Yettel'
          employerIcon='/yettel.png'
          started='April 2019'
          ended='December 2019'
          position='SME Sales Executive'
          workInfo='My job was to identify and attract new business customers. Helped me expand my horizons. Improved my business etiquette and negotiation skills.'
        />
        <ExperienceCard
          employer='Yettel'
          employerIcon='/yettel.png'
          started='June 2009'
          ended='March 2019'
          position='Sales representative / Assistant shop manager'
          workInfo='Working as sales representative and assistant shop manager for Globul/Telenor in the biggest store in Ruse, Bulgaria taught me a lot about patience, being humble, respecting your team and managers as well as appreciating every customer.'
        />
      </div>
    </motion.div>
  );
};
export default WorkExperience;
