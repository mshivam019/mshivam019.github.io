import { cn } from '@/utils';
import { motion } from 'framer-motion';

export default function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));
  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`dark:text-white text-black `, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        className="overflow-hidden "
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-5xl md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-12 sm:h-12 xl:h-12 bg-blue-500',
          cursorClassName,
        )}
      />
    </div>
  );
}
