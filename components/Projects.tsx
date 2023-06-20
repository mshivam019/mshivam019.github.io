/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

interface ProjectProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

function Project({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  technologies,
  githubLink,
}: ProjectProps) {
  return (
    <div
      data-aos="fade-up"
      className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
    >
      <div className="md:flex">
        <div className="md:shrink-0 mt-7 px-6">
          <Link href={href}>
            <Image
              height={76}
              width={96}
              sizes="90vw"
              className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer"
              src={imageSrc}
              alt={imageAlt}
            />
          </Link>
        </div>
        <div className="p-8">
          <div className="sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3">
            <div className="flex flex-col">
              <Link
                href={href}
                className="font-bold text-xl hover:cursor-pointer"
              >
                {title}
              </Link>
            </div>
            <div className="w-full rounded-md py-6 md:p-0 z-8">
              <p className="dark:text-gray-300 flex flex-wrap">
                {description.split('\n').map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
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
                href={href}
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

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      href: 'https://e-commerce-mshivam019.vercel.app/',
      imageSrc: '/img/ecom.png',
      imageAlt: 'E-commerce website home screen',
      title: 'EStore',
      description:
        ' • Developed an E-commerce website with Order-history,Auto-complete Search, Payment-gateway and Cookies. \n\n • Built with NextJs for frontend with SSR, MongoDB as database and Next-auth with JWT token for authentication.\n\n • MongoDB Realm is used to create and handle the server-less function calls and PayPal for payment gateway.',
      technologies: ['MongoDB', 'Tailwind CSS', 'Realm', 'Nextjs', 'PayPal'],
      githubLink: 'https://github.com/mshivam019/e-commerce',
    },
    {
      href: 'https://general-averil-mshivam019.koyeb.app/',
      imageSrc: '/img/hospital.png',
      imageAlt: 'Hospital website welcome screen',
      title: 'Hospital Management System',
      description:
        ' • Developed a website to create, read, update, and delete (CRUD) appointments on a hospital website using REST APIs. \n\n • Implemented login using Auth0 with support of lazy login and Spring Security 5. \n\n • Created separate databases for appointments and user details using PostgreSQL and JPA Repository. \n\n• Used Docker-Compose to dockerize the application, hosting the images on Docker Hub for easy deployment.',
      technologies: [
        'Java',
        'SpringBoot',
        'PostgreSQl',
        'Docker',
        'REST APIs',
        'Auth0',
      ],
      githubLink: 'https://github.com/mshivam019/Hospital_Management',
    },
    {
      href: 'https://kanban-notes.vercel.app/',
      imageSrc: '/img/kanban.png',
      imageAlt: 'Notes app main screen',
      title: 'Kanban Notes',
      description:
        ' • Developed a Notes app to store user’s daily tasks, logs, to-do, etc with help of Firebase. \n\n • Used Firestore as database, lazy-login using google sign-in and traditional login using email and password. \n\n • Used Docker to containerize the application, currently using Vercel to host and call the serverless functions.',
      technologies: [
        'Firebase',
        'Angular',
        'Docker',
        'Typescript',
        'FireStore',
      ],
      githubLink: 'https://github.com/mshivam019/notes-app',
    },
    {
      href: 'https://mood-swinger.vercel.app/',
      imageSrc: '/img/mood.png',
      imageAlt: 'Social website Home screen',
      title: 'Mood Swinger',
      description:
        ' • Mood tarcking web-app where you can store your moods, see your average mood, create notes, see your mood history. You can also identify your mood triggers and overcome them. \n\n • Built with ReactJs for frontend, Firestore as database and OAuth with Firebase for authentication. Firebase storage is used for storing user data such as profile picture. \n\n • Serverless functions are used to retrieve and store moods, TailwindCSS is used for handling dark and light mode. Recharts is used for constructing graphs and charts.',
      technologies: ['Firebase', 'React', 'Tailwind CSS', 'Firestore', 'OAuth'],
      githubLink: 'https://github.com/mshivam019/mood-swinger',
    },
  ];

  return (
    <div
      data-aos="fade-up"
      id="Projects"
      className="mt-8 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="lg:pl-0 pl-2 font-semi-bold text-3xl md:text-4xl text-black dark:text-white mr-auto">
        Projects
      </h1>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}
