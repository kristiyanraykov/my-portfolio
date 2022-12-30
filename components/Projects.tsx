import { motion } from 'framer-motion';
import { useHorizontalScroll } from '../utils/useSideScroll';
import Project from './Project';

type Props = {};
const Projects = (props: Props) => {
  // const scrollRef = useHorizontalScroll();
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div
        // ref={scrollRef}
        className='relative w-full flex overflow-x-scroll snap-x snap-center overflow-y-hidden z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        <Project
          projectImage='/revents.png'
          title='Re-vents'
          description='SPA for organizing events with friends'
          information='I built this app with Udemy tutorial by Neil Cummings. I learned a lot about advanced React concepts, improved my Redux knowledge a lot. By that time firebase was the only backend i felt comfortable using, so this was the perfect course to level up my developing skills.'
          stackIcons={['/react.png', '/firebase.webp', '/redux.webp']}
          link='https://revents-personalproject.firebaseapp.com/'
          gitHubLink='https://github.com/kristiyanraykov/revents'
        />
        <Project
          projectImage='/prime-clothing.png'
          title='Prime Clothing'
          description='E-commerce app for clothing'
          information='Another Udemy course by Andrei Neagoie and Yihua Zhang. I learned a lot about React Hooks, Redux, Redux-Saga, Firebase, Stripe, Context API, Hooks, Styled Components, React Router, and more. It went on with re-building the app with TypeScript, which drew my attention to that programming language.'
          stackIcons={[
            '/react.png',
            '/firebase.webp',
            '/redux.webp',
            '/typescript.png',
          ]}
          link='https://prime-clothing.netlify.app'
          gitHubLink='https://github.com/kristiyanraykov/prime-clothing'
        />
        <Project
          projectImage='/jobify.jpg'
          title='Jobify'
          description='SPA for job searching'
          information='Went on with Udemy courses. This time it was a full-stack course by John Smilga. Front-end is built on top of React context api with Redux-like structure. Back-end is built with Node.js, Express, MongoDB, and Mongoose. I learned a lot about back-end development, because the course covered a lot of topics, like authentication, authorization, data protection and more.'
          stackIcons={[
            '/react.png',
            '/mongodb.png',
            '/nodejs.png',
            '/typescript.png',
          ]}
          link='https://jobify-cq7e.onrender.com/'
          gitHubLink='https://github.com/kristiyanraykov/jobify'
        />
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
};
export default Projects;
