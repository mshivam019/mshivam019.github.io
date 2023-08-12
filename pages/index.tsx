import React,{ useEffect } from 'react';
import Aos from 'aos';
import Contact from '@/components/Contact';
import Container from '@/components/Container';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import 'aos/dist/aos.css';
import client from '@/client';

export async function getStaticProps() {
  // Fetch your content from Sanity
  const projectsQuery = `*[_type == "project"]`;
  const project = await client.fetch(projectsQuery);

  const experiencesQuery = `*[_type == "experience"]`;
  const experiences = await client.fetch(experiencesQuery);

  const heroQuery = `*[_type == "hero"]`;
  const hero = await client.fetch(heroQuery);

  return {
    props: {
      project,
      experiences,
      hero,
    },
  };
}

interface ProjectDetails {
  _key: string;
  title: string;
  technologies: string[];
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  githubLink: string;
  altText: string;
  description: string;
  liveLink: string;
}

interface Project {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  projects: ProjectDetails[];
}

interface ExperienceTab {
  id: number;
  _key: string;
  title: string;
  date: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  altText: string;
  link: string;
  description: string;
}

interface Experiences {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  tabs: ExperienceTab[];
}

interface Heros {
  technologies: string[];
  altText: string;
  _createdAt: string;
  _type: string;
  name: string;
  _id: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  buttons: {
    label: string;
    _key: string;
    url: string;
  }[];
  _rev: string;
  description: string;
  _updatedAt: string;
  tools: string[];
}

interface HomeProps {
  project: Project[];
  experiences: Experiences[];
  hero: Heros[];
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
