/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useNextSanityImage } from 'next-sanity-image';
import Buttons from '@/components/Buttons';
import client from '@/client';

interface Heros {
  technologies: string[];
  altText: string;
  _createdAt: string;
  _type: string;
  name: string;
  _id: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  buttons: {
    label: string;
    _key: string;
    url: string;
  }[];
  _rev: string;
  description: string;
  _updatedAt: string;
  tools: string[];
}

interface HeroProps {
  hero: Heros[];
}

export default function Hero({ hero }: HeroProps) {
  const imageProps = useNextSanityImage(client, hero[0].image);

  return (
    <div
      id="About"
      className="pl-2 flex flex-col justify-center items-start max-w-6xl border-gray-200 dark:border-gray-700 mx-auto py-6"
    >
      <div className="flex flex-col-reverse sm:flex-row items-start pt-8">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            {hero[0].name}
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Student at{' '}
            <span className="font-semibold">
              Lovely Professional University
            </span>
          </h2>
          <p
            className="text-justify text-gray-600 max-w-4xl dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: hero[0].description }}
          />
        </div>

        <div className="w-[90px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto ">
          <Image
            {...imageProps}
            alt="Shivam Mishra"
            height={176}
            width={176}
            sizes="30vw"
            priority
            className="rounded-full"
          />
        </div>
      </div>
      <div className="font-Header tracking-wide flex flex-row space-x-16 pb-6 pt-2">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-4 sm:text-base text-sm">
            {hero[0].technologies.map((tech) => (
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
            {hero[0].tools.map((tech) => (
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
      <Buttons buttons={hero[0].buttons} />
    </div>
  );
}
