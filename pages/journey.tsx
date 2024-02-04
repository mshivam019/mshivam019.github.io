import client from '@/client';
import { ExperienceProps } from '@/types';
import ExperienceTree from '@/components/ui/ExperienceTree';
import Container from '@/components/Container';

export async function getStaticProps() {
  const experiencesQuery = `*[_type == "experience"][0]`;
  const experience = await client.fetch(experiencesQuery);

  return {
    props: {
      experience,
    },
  };
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <Container>
      <ExperienceTree experience={experience} />
    </Container>
  );
}
