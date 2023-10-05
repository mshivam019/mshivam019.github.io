import Image from 'next/image';
import Link from 'next/link';
import {CodeBracketIcon, GlobeAltIcon
} from '@heroicons/react/24/outline';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/client';
import { ProjectItem,ProjectsProps } from '@/types';


function ProjectItems({projectItem}: ProjectItem) {
  const imageProps = useNextSanityImage(client, projectItem.image);
  return (
    <div
      data-aos="fade-up"
      className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
    >
      <div className="md:flex">
        <div className="md:shrink-0 mt-7 px-6">
        <picture className="rounded-lg overflow-hidden block">
          <Link href={projectItem.liveLink}>
            <Image
              src={imageProps.src}
              height={76}
              width={96}
              sizes="90vw"
              className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 ease-in duration-150 cursor-pointer"
              alt={projectItem.altText}
            />
          </Link>
          </picture>
        </div>
        <div className="p-8">
          <div className="sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3">
            <div className="flex flex-col">
              <Link
                href={projectItem.liveLink}
                className="font-bold text-xl hover:cursor-pointer"
              >
                {projectItem.title}
              </Link>
            </div>
            <div className="w-full rounded-md py-6 md:p-0 z-8">
              <ul className="list-disc">
                {projectItem.description.split(",,,").map((line) => (
                  <li className="dark:text-gray-300" key={line.trim()}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600 text-sm font-Text2 md:justify-start">
              {projectItem.technologies.map((technology) => (
                <span key={technology} className="pr-4 z-8">
                  {technology}
                </span>
              ))}
            </ul>
            <div className="z-8 flex fle-row space-x-5">
              <Link
                href={projectItem.githubLink}
                className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0"
              >
                <CodeBracketIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
              </Link>
              <Link
                href={projectItem.liveLink}
                className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0"
              >
                <GlobeAltIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
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
        <ProjectItems key={item.title} projectItem={item} />
      ))}
    </div>
  );
}
