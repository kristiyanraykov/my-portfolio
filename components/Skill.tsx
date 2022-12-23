import { motion } from 'framer-motion';

type Props = {
  src: string;
  directionLeft?: boolean;
};
const Skill = ({ directionLeft, src }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 500,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className='rounded-full border border-gray-500 w-16 h-16 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={src}
      />
    </div>
  );
};
export default Skill;
