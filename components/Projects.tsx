/* eslint-disable react/no-danger */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/client';
import { ProjectDetails,ProjectsProps } from '@/types';


function Project({
  liveLink,
  image,
  altText,
  title,
  description,
  technologies,
  githubLink,
}: ProjectDetails) {
  const imageProps = useNextSanityImage(client, image);
  return (
    <div
      data-aos="fade-up"
      className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
    >
      <div className="md:flex">
        <div className="md:shrink-0 mt-7 px-6">
          <Link href={liveLink}>
            <Image
              {...imageProps}
              height={76}
              width={96}
              sizes="90vw"
              className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer"
              alt={altText}
            />
          </Link>
        </div>
        <div className="p-8">
          <div className="sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3">
            <div className="flex flex-col">
              <Link
                href={liveLink}
                className="font-bold text-xl hover:cursor-pointer"
              >
                {title}
              </Link>
            </div>
            <div className="w-full rounded-md py-6 md:p-0 z-8">
              <p
                className="dark:text-gray-300 flex flex-wrap"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
            <ul className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600 text-sm font-Text2 md:justify-start">
              {technologies.map((technology) => (
                <span key={technology} className="pr-4 z-8">
                  {technology}
                </span>
              ))}
            </ul>
            <div className="z-8 flex fle-row space-x-5">
              <Link
                href={liveLink}
                className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0"
              >
                <CommandLineIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
              </Link>
              <Link
                href={githubLink}
                className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0"
              >
                <ArrowTopRightOnSquareIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ project }: ProjectsProps) {
  return (
    <div
      data-aos="fade-up"
      id="Projects"
      className="mt-8 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="lg:pl-0 pl-2 font-semi-bold text-3xl md:text-4xl text-black dark:text-white mr-auto">
        Projects
      </h1>
      {project.projects.map((item) => (
        <Project key={item._key} {...item} />
      ))}
    </div>
  );
}
