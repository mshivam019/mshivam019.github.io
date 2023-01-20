import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Container(props: { [x: string]: any; children: any }) {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Shivam Mishra – Developer',
    description: `Full-Stack developer, Android enthusiast, and learner.`,
    image:
      'https://raw.githubusercontent.com/mshivam019/mshivam019/master/Banner.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/image.png" />

        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mshivam019.github.io${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mshivam019.github.io${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Shivam Mishra" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MShivam019" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="dark:bg-neutral-800 w-full">
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
