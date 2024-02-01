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
    <Container color="bg-gradient-to-br from-slate-950 to-slate-950">
      <LinkTree links={links.Links} />
    </Container>
  );
}
