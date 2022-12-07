import {motion} from 'framer-motion';
import { useHorizontalScroll } from '../utils/useSideScroll';
import Project from './Project';


type Props = {}
const Projects = (props: Props) => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-10">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
        <div ref={scrollRef} className='relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}
export default Projects