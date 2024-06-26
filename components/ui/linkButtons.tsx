import { Button } from '@/types';
import Link from 'next/link';

interface ButtonProps {
  buttons: Button[];
}

export default function Buttons({ buttons }: ButtonProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
      {buttons?.map((item) => (
        <button
          key={item.label}
          className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden "
          type="button"
          onClick={() => window.open(item.url)}
        >
          <span className="absolute inset-0 dark:bg-white bg-black" />
          <span className="absolute inset-0 flex justify-center items-center">
            {item.label}
          </span>
          {item.label}
        </button>
      ))}
      <Link href="/connect">
        <button
          className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden "
          type="button"
        >
          <span className="absolute inset-0 dark:bg-white bg-black" />
          <span className="absolute inset-0 flex justify-center items-center">
            See more
          </span>
          See more
        </button>
      </Link>
    </div>
  );
}
