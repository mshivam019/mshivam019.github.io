import Contact from '@/components/Contact';
import Container from '@/components/Container';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="dark:bg-neutral-800 ">
      <Container>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}
