import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Tab {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  imageSrc: string;
  altText: string;
}

const tabs: Tab[] = [
  {
    id: 1,
    title: 'Google Supported Android Internship - Smartbridge',
    date: 'August - September 2022',
    description:
      '• Completed Android Basics course and attended 8-weeks of training, learning about building android apps using Kotlin.\n\n• Learned about Step-by-Step procedure to develop mobile application from wire-framing to data persistence.\n\n• Built a grocery-list app using Kotlin and XML for my final project with the help of Coroutines, MVVM and ROOM database.',
    link: 'https://github.com/mshivam019/Grocery-List',
    imageSrc: '/gcer.png',
    altText: 'Google certificate',
  },
  {
    id: 2,
    title: 'Future Ready Talent Cloud Internship - Microsoft',
    date: 'May - June 2022',
    description:
      '• In the Azure Services technology track, I learnt about the roles and duties of an Azure Dev-ops Engineer Associate.\n\n• Experienced the daily hands-on tasks of an Azure Developer (AZ-204) like utilizing Azure Storage, implementing authentication and authorization.\n\n• My final project was a tourism website with a Chat-Bot with CI/CD using GitHub, hosted on Azure Static Web-Apps and Chat-Bot learns from the user dynamically using QnA Maker hosted on Azure Bot Services.',
    link: 'https://github.com/mshivam019/Tour-Website',
    imageSrc: '/mcer.png',
    altText: '',
  },
];

interface TabProps {
  tab: Tab;
  activeTab: number;
  onClick: (tabId: number) => void;
}

const Tab: React.FC<TabProps> = ({ tab, activeTab, onClick }) => {
  const isActive = tab.id === activeTab;

  const handleClick = () => {
    onClick(tab.id);
  };

  return (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <a
        className={`text-xs font-bold uppercase px-5 py-3 my-2 shadow-lg rounded block leading-normal ${
          activeTab === tab.id ? 'bg-zinc-600 text-white' : 'dark:bg-zinc-400 bg-zinc-300 text-black-600'
        } cursor-pointer`}
        onClick={() => handleClick()}
        data-toggle="tab"
        role="tablist"
      >
        {tab.title}
      </a>
    </li>
  );
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
          role="tablist"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {tabs.map((tab) => (
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
                          fill
                          style={{ objectFit: 'cover' }}
                          src={tab.imageSrc}
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
                              <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm dark:text-zinc-200 text-zinc-800">
                                {tab.description
                                  .split('\n')
                                  .map((line, index) => (
                                    <span key={index} className="pr-4 z-10">
                                      {line}
                                      <br />
                                    </span>
                                  ))}
                              </p>
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
};

const Experience: React.FC = () => {
  return (
    <div
      id="Experience"
      data-aos="fade-up"
      className="mt-4 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="font-semi-bold text-3xl lg:pl-0 pl-2 md:text-4xl text-black dark:text-white mr-auto pb-3">
        Experience
      </h1>
      <Tabs />
    </div>
  );
};

export default Experience;
