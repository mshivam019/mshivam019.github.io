import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import client from '@/client';
import { HeroProps } from '@/types';
import { useNextSanityImage } from 'next-sanity-image';
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemWithDescription,
} from '@/components/ui/BentoGrid';
import Buttons from '@/components/ui/linkButtons';
import SkillsList from '@/components/Skills';
import Button from '@/components/ui/Button';

export async function getStaticProps() {
  const heroQuery = `*[_type == "hero"][0]`;
  const hero = await client.fetch(heroQuery);

  return {
    props: {
      hero,
    },
  };
}

export default function About({ hero }: HeroProps) {
  const imageProps = useNextSanityImage(client, hero?.image);
  return (
    <Container>
      <div className="pl-2 flex flex-col justify-center items-center max-w-6xl border-gray-200 dark:border-gray-700 mx-auto py-6">
        <div className="flex flex-col-reverse sm:flex-row items-center pt-8">
          <div className="flex flex-col lg:pr-8 pr-2 items-center">
            <div className="space-y-2 flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                About Me
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed text-center lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
                {hero?.description}
              </p>
            </div>
            <Image
              src={imageProps?.src}
              alt={hero?.altText}
              height={176}
              width={176}
              sizes="30vw"
              priority
              className={hero?.classname}
            />
          </div>
        </div>
        <Buttons buttons={hero?.buttons} />
      </div>
      <SkillsList skills={hero?.skills} />
      <div className="flex flex-col items-center justify-center space-y-4 gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Certifications
        </h2>
        <BentoGrid className="max-w-6xl mx-auto">
          {hero?.certificates.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.image}
              className={item.classname}
              url={item.url}
              altText={item.altText}
            />
          ))}
        </BentoGrid>
        <Button
          route="https://drive.google.com/drive/folders/1q0KZSNVHhTny67mdtN_LUV7pMb8y6T3O?usp=drive_link"
          external
          name="View All Certifications"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl my-8">
          Read my blogs
        </h2>
        <BentoGrid className="max-w-6xl mx-auto mb-16">
          {hero?.readmore.map((item, index) => (
            <BentoGridItemWithDescription
              title={item.title}
              key={index}
              description={item.description}
              header={item.image}
              className=""
              altText={item.altText}
              url={item.url}
            />
          ))}
        </BentoGrid>
      </div>
    </Container>
  );
}
