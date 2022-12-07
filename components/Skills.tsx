import Skill from './Skill';

type Props = {};
const Skills = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill src='/react.png' />
        <Skill src='/nextjs.png' />
        <Skill src='/js.png' />
        <Skill src='/typescript.png' />
        <Skill src='/css-3.png' directionLeft={true} />
        <Skill src='/html.png' directionLeft={true} />
        <Skill src='/tailwind.png' directionLeft={true} />
        <Skill src='/vscode.png' directionLeft={true} />
        <Skill src='/mongodb.png' />
        <Skill src='/nodejs.png' />
        <Skill src='/firebase.webp' />
        <Skill src='/postgre.png' />
      </div>
    </div>
  );
};
export default Skills;
