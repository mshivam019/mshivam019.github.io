import client from '@/client';
import Container from '@/components/Container';
import { LinkTree } from '@/components/ui/LinkTree';
import { LinkProps } from '@/types';

export async function getStaticProps() {
  const linkQuery = `*[_type == "linktree"][0]`;
  const links = await client.fetch(linkQuery);

  return {
    props: {
      links,
    },
  };
}

export default function Experience({ links }: LinkProps) {
  return (
    <Container>
      <LinkTree links={links.Links} />
    </Container>
  );
}
