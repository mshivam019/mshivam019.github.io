import React, { useEffect } from 'react';
import Aos from 'aos';
import Contact from '@/components/Contact';
import Container from '@/components/Container';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import 'aos/dist/aos.css';
import client from '@/client';
import { HomeProps } from '@/types';

export async function getStaticProps() {
  // Fetch your content from Sanity
  const projectsQuery = `*[_type == "project"][0]`;
  const project = await client.fetch(projectsQuery);

  const experiencesQuery = `*[_type == "experience"][0]`;
  const experiences = await client.fetch(experiencesQuery);

  const heroQuery = `*[_type == "hero"][0]`;
  const hero = await client.fetch(heroQuery);

  return {
    props: {
      project,
      experiences,
      hero,
    },
  };
}

export default function Home({ project, experiences, hero }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="dark:bg-neutral-800 ">
      <Container>
        <Hero hero={hero} />
        <Experience experience={experiences} />
        <Projects project={project} />
        <Contact />
      </Container>
    </div>
  );
}
