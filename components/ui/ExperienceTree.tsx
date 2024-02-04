import React from 'react';
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
  ComputerDesktopIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/solid';
import { ExperienceProps, ExperienceTab } from '@/types';
import { useNextSanityImage } from 'next-sanity-image';
import client from '@/client';

import Image from 'next/image';

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
    case 'ComputerDesktopIcon':
      return <ComputerDesktopIcon />;
    case 'DevicePhoneMobileIcon':
      return <DevicePhoneMobileIcon />;
    default:
      return <BuildingOffice2Icon />;
  }
};

interface ExperienceItemProps {
  experienceItem: ExperienceTab;
}

function ExperienceItem({ experienceItem }: ExperienceItemProps) {
  const { theme } = useTheme();
  const imageProps = experienceItem.image
    ? useNextSanityImage(client, experienceItem.image)
    : null;
  return (
    <VerticalTimelineElement
      key={experienceItem._key}
      contentStyle={{
        background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
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
      date={experienceItem.date}
      icon={
        experienceItem.icon ? (
          getIconCode(experienceItem.icon)
        ) : (
          <BuildingOffice2Icon />
        )
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
      <div className="flex flex-col justify-between items-center">
        <h3 className="font-semibold capitalize">{experienceItem.title}</h3>
        <p className="font-normal !mt-0">{experienceItem.location}</p>
        {imageProps?.src && (
          <Image
            src={imageProps?.src}
            alt={experienceItem.title}
            height={100}
            width={200}
            sizes="100vw"
            quality={100}
            className="rounded-md h-60 w-96 my-4 "
          />
        )}
        {experienceItem.description && (
          <ul className=" list-outside list-disc">
            {experienceItem.description.split(',,,').map((line: string) => (
              <li
                className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                key={line.trim()}
              >
                {line}
              </li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
  );
}

export default function ExperienceTree({ experience }: ExperienceProps) {
  const { theme } = useTheme();

  return (
    <div className="my-4 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto overflow-hidden">
      <h1 className="font-semi-bold text-3xl lg:pl-0 pl-2 md:text-4xl text-black dark:text-white mr-auto pb-3">
        My Journey
      </h1>
      {experience?.tabs && (
        <VerticalTimeline lineColor={theme === 'light' ? 'black' : 'gray'}>
          {experience.tabs.map((experienceItem: any) => (
            <ExperienceItem
              experienceItem={experienceItem}
              key={experienceItem._key}
            />
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
}
