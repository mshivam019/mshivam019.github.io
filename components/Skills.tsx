import client from '@/client';
import { Skill as Skills } from '@/types';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { cn } from '@/utils';

interface SingleSkill {
  skill: Skills;
}

interface HeroSkillsProps {
  skills: Skills[];
}

function Skill({ skill }: SingleSkill) {
  const imageProps = useNextSanityImage(client, skill?.svg);
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-36 max-h-36">
      <Image
        src={imageProps?.src}
        alt={skill.altText}
        height={64}
        width={64}
        className={cn('min-h-24 max-h-24 h-24', skill?.classname)}
      />
      <h3 className="text-lg font-bold">{skill?.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
    </div>
  );
}

export default function SkillsList({ skills }: HeroSkillsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
              A showcase of my proficiency in various languages, frameworks, and
              tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl auto-rows-fr items-start gap-12 py-12 lg:grid-cols-3 lg:gap-12">
          {skills?.map((skill, index) => <Skill skill={skill} key={index} />)}
        </div>
      </div>
    </section>
  );
}
