import { motion } from 'framer-motion';

type Props = {};
const ExperienceCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[500px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src='/vivacom.png'
        className='w-32 h-32 rounded-full xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Account Manager</h4>
        <p className='font-bold text-2xl mt-1'>Vivacom</p>
        <p className='uppercase py-5 text-gray-300'>Started work ... - Ended ....</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Something i have done while working there for a while i guess</li>
          <li>Something i have done while working there for a while i guess</li>
          <li>Something i have done while working there for a while i guess</li>
          <li>Something i have done while working there for a while i guess</li>

        </ul>
      </div>
    </div>
  );
};
export default ExperienceCard;
