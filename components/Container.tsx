import Head from 'next/head';
// import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Container(props: { color?: string; children: any }) {
  const router = useRouter();
  const { children, color } = props;
  const meta = {
    title: 'Shivam Mishra - Developer',
    description: `Full-Stack developer, Android enthusiast, and learner.`,
    image:
      'https://raw.githubusercontent.com/mshivam019/mshivam019/master/Banner.png',
    type: 'website',
  };
  // const variants = {
  //   hidden: { opacity: 0, x: -200, y: 0 },
  //   enter: { opacity: 1, x: 0, y: 0 },
  //   exit: { opacity: 0, x: 0, y: -100 },
  // };
  return (
    // <motion.main
    //   initial="hidden"
    //   animate="enter"
    //   exit="exit"
    //   variants={variants}
    //   transition={{ type: 'linear' }}
    //   className=""
    // >
    <div className={color || ''}>
      <Head>
        <link rel="icon" type="image/png" href="/image.png" />

        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mshivam019.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mshivam019.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Shivam Mishra" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mshivam0019" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="dark:bg-neutral-800">
        <Header color={color} />

        <div>{children}</div>
        <Footer color={color} />
      </main>
    </div>
    // </motion.main>
  );
}
