import { motion } from 'framer-motion';

type Props = {
  workInfo: string;
  started: string;
  ended: string;
  employerIcon: string;
  position: string;
  employer: string;
};
const ExperienceCard = (props: Props) => {
  const { workInfo, started, ended, employerIcon, position, employer } = props;
  return (
    <div className='relative flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[500px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
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
        src={employerIcon}
        className='w-32 h-32 rounded-md object-cover object-center'
      />
      <div className='px-0 md:px-10 max-w-full text-center'>
        <h4 className='text-4xl font-light'>{position}</h4>
        <p className='font-bold text-2xl mt-1'>{employer}</p>
        <p className='uppercase py-5 text-gray-300'>
          <span className='text-[#F7AB0A]/40'>Started work:</span> {started} / <span className='text-[#F7AB0A]/40'>Ended:</span> {ended}
        </p>
        {/* <ul className='list-disc space-y-4 ml-5 text-lg'>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul> */}
        <p className='text-lg text-center whitespace-normal h-36'>
          {workInfo}
        </p>
      </div>
    </div>
  );
};
export default ExperienceCard;
