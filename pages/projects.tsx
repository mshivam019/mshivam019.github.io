import React from 'react';
import Container from '@/components/Container';
import client from '@/client';
import { ProjectsProps } from '@/types';
import LayoutGrid from '@/components/ui/LayoutGrid';

export async function getStaticProps() {
  const projectsQuery = `*[_type == "project"][0]`;
  const project = await client.fetch(projectsQuery);

  return {
    props: {
      project,
    },
  };
}

export default function Home({ project }: ProjectsProps) {
  return (
    <div className="dark:bg-neutral-800">
      <Container>
        <LayoutGrid project={project} />
      </Container>
    </div>
  );
}
