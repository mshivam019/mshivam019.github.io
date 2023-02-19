import React from 'react';
import Image from 'next/image';
import Buttons from '@/components/Buttons';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const technologies = [
    ['Java', 'C', 'C++', 'Kotlin', 'JavaScript', 'Typescript', 'Docker'],
    [
      'MongoDB',
      'Jetpack Compose',
      'Tailwind CSS',
      'Angular',
      'ReactJS',
      'SQL',
      'XML',
    ],
  ];
  return (
    <div
      id="About"
      className="pl-2 flex flex-col justify-center items-start max-w-6xl border-gray-200 dark:border-gray-700 mx-auto py-6"
    >
      <div className="flex flex-col-reverse sm:flex-row items-start pt-8">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Shivam Mishra
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Student at{' '}
            <span className="font-semibold">
              Lovely Professional University
            </span>
          </h2>
          <p className="text-justify text-gray-600 max-w-4xl dark:text-gray-400">
            Hello I am a senior sophist, CSE Student at Lovely Professional
            University, having holistic knowledge over software development,IT
            Support, UX design and also experienced in Dev-Ops. My objective is
            to have growth oriented and challenging career where I can
            contribute my knowledge and skills to the organization and enhance
            my experience through continuous learning and teamwork. Do check out
            my android apps by clicking the link below.
          </p>
        </div>

        <div className="w-[90px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto ">
          <Image
            alt="Shivam Mishra"
            height={176}
            width={176}
            src="/avatar.jpg"
            sizes="30vw"
            priority
            className="rounded-full"
          />
        </div>
      </div>

      <div className="font-Header tracking-wide pb-4 ">
        <span className="dark:text-gray-400">
          Here are a few technologies I&apos;ve been working with recently:
        </span>
      </div>
      <div className="font-Header tracking-wide flex flex-row space-x-16 pb-6">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-4 sm:text-base text-sm">
            {technologies[0].map((tech) => (
              <div key={tech} className="flex flex-row items-center space-x-2">
                <ChevronRightIcon className="h-3 w-3 " />
                <span className="dark:text-gray-400 sm:text-sm text-xs">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-4 sm:text-base text-sm">
            {technologies[1].map((tech) => (
              <div key={tech} className="flex flex-row items-center space-x-2">
                <ChevronRightIcon className="h-3 w-3 " />
                <span className="dark:text-gray-400 sm:text-sm text-xs">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}
