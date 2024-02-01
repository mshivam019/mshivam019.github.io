import Link from 'next/link';
import { cn } from '@/utils';

export default function Footer({ color }: { color?: string }) {
  const date = new Date();
  const footerClasses = color || 'dark:bg-neutral-800 bg-neutral-200';
  const textColor = color ? 'text-white' : '';
  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className={cn('text-xl font-bold cursor-pointer', textColor)}>
          <Link href="/">Shivam Mishra</Link>
        </div>
        <p className={cn('py-2 sm:py-0', textColor)}>
          All rights reserved © {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
