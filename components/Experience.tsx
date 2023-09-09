/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/client';
import { ExperienceProps,ExperienceTab,imagePropsTypes } from '@/types';

interface TabProps {
  tab: ExperienceTab;
  activeTab: number;
  onClick: (tabId:number) => void;
}

function TabItem({ tab, activeTab, onClick }: TabProps) {
  const handleClick = () => {
    onClick(tab.id);
  };

  return (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <a
        className={`text-xs font-bold uppercase px-5 py-3 my-2 shadow-lg rounded block leading-normal ${
          activeTab === tab.id
            ? 'bg-zinc-600 text-white'
            : 'dark:bg-zinc-400 bg-zinc-300 text-black-600'
        } cursor-pointer`}
        onClick={() => handleClick()}
        data-toggle="tab"
        role="tablist"
      >
        {tab.title}
      </a>
    </li>
  );
}

function Tabs({ experience }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  function getsrc(image: imagePropsTypes) {
    const imageProps = useNextSanityImage(client, image);
    return imageProps.src;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
          role="tablist"
        >
          {experience.tabs.map((item) => (
            <TabItem
              key={item.id}
              tab={item}
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {experience.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={tab.id === activeTab ? 'block' : 'hidden'}
                  id={`link${tab.id}`}
                >
                  <div className="container mt-8 mx-auto p-4 md:p-0">
                    <div className="shadow-lg flex flex-wrap w-full mx-auto">
                      <div className="bg-cover bg-bottom w-full md:w-1/3 h-64 md:h-auto relative z-10">
                        <Image
                          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                          style={{ objectFit: 'cover' }}
                          src={getsrc(tab.image)}
                          fill
                          alt={tab.altText}
                        />
                      </div>

                      <div className="dark:bg-neutral-700 bg-gray-300 w-full md:w-2/3 lg:rounded-r-md sm:rounded-b-md">
                        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                          <div className="dark:bg-zinc-800 rounded-md bg-white lg:h-full p-8 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                            <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                              <h3 className="text-black dark:text-slate-200">
                                {tab.title}
                              </h3>
                              <p className="mb-0 mt-3 text-zinc-700 text-sm italic dark:text-zinc-200">
                                {tab.date}
                              </p>
                            </div>

                            <div className="w-full lg:w-3/5 lg:px-3">
                              <p
                                className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm dark:text-zinc-200 text-zinc-800"
                                dangerouslySetInnerHTML={{
                                  __html: tab.description,
                                }}
                              />
                            </div>

                            <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                              <Link href={tab.link}>
                                <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                                  Details
                                  <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5 dark:text-zinc-200" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({ experience }: ExperienceProps) {
  return (
    <div
      id="Experience"
      data-aos="fade-up"
      className="mt-4 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="font-semi-bold text-3xl lg:pl-0 pl-2 md:text-4xl text-black dark:text-white mr-auto pb-3">
        Experience
      </h1>
      <Tabs experience={experience} />
    </div>
  );
}

export default Experience;
