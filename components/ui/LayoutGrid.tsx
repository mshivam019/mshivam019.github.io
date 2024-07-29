import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import Image from 'next/image';
import { ProjectsProps, ProjectItem, ProjectDetails } from '@/types';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/client';
import Link from 'next/link';
import {
  CodeBracketIcon,
  GlobeAltIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

function Card({
  projectItem,
  isSelected,
}: ProjectItem & { isSelected: boolean }) {
  const imageProps = useNextSanityImage(client, projectItem.image);

  const conditionalStyles = isSelected
    ? 'mt-40 lg:w-8/12 lg:mt-0 rounded-t-xl lg:h-full lg:rounded-t-none w-11/12'
    : 'w-full overflow-hidden rounded-xl h-full';

  return (
    <Image
      src={imageProps.src}
      height={76}
      width={96}
      onClick={() => {
        if (!isSelected) return;
        window.open(projectItem.liveLink, '_blank');
      }}
      sizes="100vw"
      quality={100}
      className={cn('h-72 hover:cursor-pointer', conditionalStyles)}
      alt={projectItem.altText}
    />
  );
}

function SelectedCard({ projectItem }: ProjectItem) {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 h-full w-11/12 lg:w-8/12 justify-end rounded-b-xl lg:rounded-b-none lg:rounded-r-xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full z-10 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70] h-full flex justify-center items-center"
      >
        <div className="">
          <div className="sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3">
            <div className="flex flex-col">
              <Link
                href={projectItem.liveLink}
                className="font-bold text-xl hover:cursor-pointer  mt-5 lg:mt-0"
                target="_blank"
              >
                {projectItem.title}
              </Link>
            </div>
            <div className="w-full rounded-md py-6 md:p-0 z-8">
              <ul className="list-disc">
                {projectItem.description.split(',,,').map((line: string) => (
                  <li key={line.trim()}>{line}</li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-wrap w-full  text-sm font-Text2 md:justify-start">
              {projectItem.technologies.map((technology: string) => (
                <li key={technology} className="pr-4 z-8">
                  {technology}
                </li>
              ))}
            </ul>
            <div className="z-8 flex fle-row space-x-5">
              <Link
                href={projectItem.githubLink}
                className="inline-flex  hover:underline pr-2 mx-4 sm:mx-0"
                target="_blank"
                aria-label={`${projectItem.title} github link`}
              >
                <CodeBracketIcon className="ml-1 h-7 w-7 " />
              </Link>
              <Link
                href={projectItem.liveLink}
                className="inline-flex  hover:underline pr-2 mx-4 sm:mx-0"
                target="_blank"
                aria-label={`${projectItem.title} website link`}
              >
                <GlobeAltIcon className="ml-1 h-7 w-7 " />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LayoutGrid({ project }: ProjectsProps) {
  const [selected, setSelected] = useState<ProjectDetails | null>(null);
  const [lastSelected, setLastSelected] = useState<ProjectDetails | null>(null);
  const [windowScrollPosition, setWindowScrollPosition] = useState<number>(0);

  const handleClick = (projectItem: ProjectDetails) => {
    setLastSelected(selected);
    setSelected(projectItem);
    setWindowScrollPosition(window.scrollY);
    if (window) {
      window?.scrollTo(0, 0);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
    if (window) {
      window?.scrollTo(0, windowScrollPosition);
    }
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {selected?._key && (
        <div className="relative z-[99] flex justify-center items-center lg:justify-normal lg:items-end sm:hidden">
          <XCircleIcon
            className="h-7 w-7 text-zinc-200"
            onClick={() => setSelected(null)}
          />
        </div>
      )}
      {project?.projects?.length > 0 &&
        project.projects.map((projectItem, i) => (
          <div key={i} className={cn(projectItem?.className, '')}>
            <motion.div
              onClick={() => handleClick(projectItem)}
              className={cn(
                projectItem.className,
                'relative ',
                selected?._key === projectItem._key
                  ? 'rounded-lg cursor-pointer absolute lg:inset-0 left-0 top-0 right-0 h-max lg:h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                  : lastSelected?._key === projectItem._key
                  ? 'z-40 rounded-xl h-full w-full'
                  : ' h-full rounded-xl w-full',
              )}
              layout
            >
              <Card
                projectItem={projectItem}
                isSelected={selected?._key === projectItem._key}
              />
              {selected?._key === projectItem._key && (
                <SelectedCard projectItem={selected} />
              )}
            </motion.div>
          </div>
        ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'fixed h-full w-full left-0 top-0 bg-black opacity-0 z-10',
          selected?._key ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        animate={{ opacity: selected?._key ? 0.3 : 0 }}
      />
    </div>
  );
}
