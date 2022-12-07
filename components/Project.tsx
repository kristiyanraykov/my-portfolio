import { motion } from 'framer-motion';

type Props = {};
const Project = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src='./me-animated.png'
      />
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline decoration-[#F7AB0A]/50'>Re-vents</span> -
          SPA for organizing events
        </h4>

        <p className='text-lg text-center md:text-left'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam
          sint mollitia voluptatem provident explicabo odio sapiente architecto
          eligendi ut possimus voluptate, perspiciatis quis eaque facere iste
          dolor modi enim repellat tempora suscipit, quia omnis. Qui numquam
          sunt quaerat itaque. Dolor quisquam illum labore quos.
        </p>
      </div>
    </motion.div>
  );
};
export default Project;
