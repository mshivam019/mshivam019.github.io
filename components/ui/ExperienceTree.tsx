import React, { ReactNode } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import {
  BuildingOffice2Icon,
  AcademicCapIcon,
  HomeIcon,
  CakeIcon,
} from '@heroicons/react/24/solid';
import { ExperienceProps } from '@/types';

const getIconCode = (icon: string) => {
  switch (icon) {
    case 'BuildingOffice2Icon':
      return <BuildingOffice2Icon />;
    case 'AcademicCapIcon':
      return <AcademicCapIcon />;
    case 'HomeIcon':
      return <HomeIcon />;
    case 'CakeIcon':
      return <CakeIcon />;
    default:
      return <BuildingOffice2Icon />;
  }
};
export default function ExperienceTree({ experience }: ExperienceProps) {
  const { theme } = useTheme();

  return (
    <div className="my-4 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto overflow-hidden">
      <h1 className="font-semi-bold text-3xl lg:pl-0 pl-2 md:text-4xl text-black dark:text-white mr-auto pb-3">
        Experience
      </h1>
      {experience?.tabs && (
        <VerticalTimeline lineColor={theme === 'light' ? 'black' : 'gray'}>
          {experience?.tabs &&
            experience?.tabs.map((item) => (
              <React.Fragment key={item.title}>
                <VerticalTimelineElement
                  contentStyle={{
                    background:
                      theme === 'light'
                        ? '#f3f4f6'
                        : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === 'light'
                        ? '0.4rem solid #9ca3af'
                        : '0.4rem solid rgba(255, 255, 255, 0.5)',
                  }}
                  date={item.date}
                  icon={
                    item.icon ? getIconCode(item.icon) : <BuildingOffice2Icon />
                  }
                  iconStyle={{
                    background: theme === 'light' ? 'white' : 'gray',
                    fontSize: '1.5rem',
                    boxShadow: 'none',
                    border:
                      theme === 'light'
                        ? '2px solid black'
                        : '2px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <ul className=" list-outside list-disc">
                    {item.description.split(',,,').map((line) => (
                      <li
                        className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                        key={line.trim()}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
      )}
    </div>
  );
}
