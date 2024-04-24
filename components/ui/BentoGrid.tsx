import React from 'react';
import { cn } from '@/utils';
import Image from 'next/image';
import client from '@/client';
import { useNextSanityImage } from 'next-sanity-image';

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  url,
  altText,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  header: Object;
  url: string;
  altText: string;
}) {
  const imageProps = useNextSanityImage(client, header);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      window.open(url);
    }
  };
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-stone-900 dark:border-white/[0.2] bg-stone-300 border border-transparent justify-between flex flex-col space-y-4',
        '',
      )}
      onClick={() => {
        window.open(url);
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <Image
        src={imageProps?.src}
        alt={altText}
        height={200}
        width={600}
        sizes="90vw"
        quality={100}
        priority
        className={cn('overflow-hidden', className)}
      />
    </div>
  );
}

export function BentoGridItemWithDescription({
  className,
  title,
  description,
  header,
  url,
  altText,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  header: Object;
  url: string;
  altText: string;
}) {
  const imageProps = useNextSanityImage(client, header);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      window.open(url);
    }
  };
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-zinc-700 dark:border-white/[0.2] bg-stone-200 border border-transparent justify-between flex flex-col space-y-4',
        '',
      )}
      onClick={() => {
        window.open(url);
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <Image
        src={imageProps?.src}
        alt={altText}
        height={200}
        width={300}
        sizes="90vw"
        quality={100}
        priority
        className={cn('overflow-hidden', className)}
      />

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}
