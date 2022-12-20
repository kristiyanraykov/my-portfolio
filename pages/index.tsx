import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='My portfolio page' />
      </Head>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Header />
        <section className='snap-start' id='hero'>
          <Hero />
        </section>
        <section className='snap-center' id='about'>
          <About />
        </section>
        <section className='snap-center' id='experience'>
          <WorkExperience />
        </section>
        <section id='skills' className='snap-start'>
          <Skills />
        </section>
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex justify-end mr-10 text-[#F7AB0A]/40'>
            <Link href='#hero'>
              <span>Back to top</span>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
