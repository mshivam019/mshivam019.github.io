import { BuildingOffice2Icon } from '@heroicons/react/24/solid';
import { ExperienceProps } from '@/types';

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div
      id="Experience"
      data-aos="fade-up"
      className="flex flex-col justify-center items-start max-w-6xl border-gray-200 dark:border-gray-700 mx-auto pl-6 pr-2"
    >
      <h1 className="font-semi-bold text-3xl lg:pl-0 pl-2 md:text-4xl text-black dark:text-white mr-auto pb-3 mb-8">
        Experience
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experience.tabs.map((tab) => (
        <li className="mb-10 ml-6" key={tab.title}>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full -left-3 ring-8 ring-gray-200 dark:ring-gray-700 dark:bg-gray-800">
           <BuildingOffice2Icon className="h-4 w-4 text-gray-900 dark:text-gray-100" />
          </span>
          <h3 className="mb-1 text-lg font-semibold pl-2 dark:text-white">
            {tab.title}
          </h3>
          <time className="block mb-2 text-sm pl-2 font-normal leading-none  dark:text-gray-300">
            {tab.date}
          </time>
          <ol className="text-base font-normal list-disc pl-2">
          {tab.description.split(",,,").map((line) => (
                  <li className="dark:text-gray-300" key={line.trim()}>
                    {line}
                  </li>
                ))}
          </ol>
        </li>))}
      </ol>
    </div>
  );
}
