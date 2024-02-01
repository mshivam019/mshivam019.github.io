import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetails, ProjectsProps } from '@/types';
import client from '@/client';
import { useNextSanityImage } from 'next-sanity-image';
import TypewriterEffect from './TypewriterEffect';
import Button from './Button';

export function Header({ project }: ProjectsProps) {
  return (
    <div className="max-w-7xl relative mx-auto px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {project.name}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {project.description}
      </p>
    </div>
  );
}

export function ProductCard({
  projectItem,
  translate,
}: {
  projectItem: ProjectDetails;
  translate: MotionValue<number>;
}) {
  const imageProps = useNextSanityImage(client, projectItem.image);
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={projectItem.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={projectItem.liveLink}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={imageProps.src}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={projectItem.title}
          priority
          quality={90}
          sizes="90vw"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {projectItem.title}
      </h2>
    </motion.div>
  );
}

export function HeroParallax({ project }: ProjectsProps) {
  const firstRow = project?.projects?.slice(0, 4);
  const secondRow = project?.projects?.slice(4, 8);
  const thirdRow = project?.projects?.slice(8, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  if (!project) return null;
  return (
    <>
      <div
        ref={ref}
        className="sm:h-[310vh] h-[260vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header project={project} />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((projecti) => (
              <ProductCard
                projectItem={projecti}
                translate={translateX}
                key={projecti.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 ">
            {secondRow.map((projecti) => (
              <ProductCard
                projectItem={projecti}
                translate={translateXReverse}
                key={projecti.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse mb-20 space-x-reverse space-x-20 ">
            {thirdRow.map((projecti) => (
              <ProductCard
                projectItem={projecti}
                translate={translateX}
                key={projecti.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex align-center justify-center">
        <TypewriterEffect
          words={[
            {
              text: `See`,
            },
            {
              text: 'more',
            },
          ]}
        />
      </div>
      <div className="flex align-center justify-center pb-20 pt-10 ">
        <Button />
      </div>
    </>
  );
}
