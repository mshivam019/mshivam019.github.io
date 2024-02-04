import { useState, useEffect } from 'react';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import clsx from 'clsx';
import { cn, Framer, useTabs } from '@/utils';

export default function Header({ color }: { color?: string }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = color ? 'text-white border-white ' : '';
  const navClasses = clsx(
    'sticky',
    'top-0',
    'z-[99]',
    color || 'dark:bg-neutral-800 bg-neutral-200',
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const [hookProps] = useState({
    tabs: [
      {
        label: 'About',
        route: '/about',
        id: 'About',
      },
      {
        label: 'Journey',
        route: '/journey',
        id: 'Journey',
      },
      {
        label: 'Projects',
        route: '/projects',
        id: 'Projects',
      },
      {
        label: `Connect`,
        route: '/connect',
        id: 'Connect',
      },
    ],
    initialTabId: 'About',
  });
  const framer = useTabs(hookProps);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-6 h-6 m-2 text-yellow-500 dark:bg-neutral-700 box-content p-1.5 rounded-md bg-gray-200"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    }
    return (
      <MoonIcon
        className="w-6 h-6 m-2 text-black dark:bg-neutral-700 box-content p-1.5 rounded-md bg-zinc-300"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  };

  return (
    <nav className={navClasses}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-1 items-center">
              <Link href="/">
                <div
                  className={cn(
                    'block h-8 w-auto text-black lg:hidden dark:text-white text-2xl font-semibold cursor-pointer',
                    textColor,
                  )}
                >
                  SKM
                </div>

                <div
                  className={cn(
                    'hidden h-8 w-auto lg:block text-black dark:text-white text-2xl font-semibold cursor-pointer hover:bg-transparent',
                    textColor,
                  )}
                >
                  SKM
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Framer.Tabs {...framer.tabProps} colors={color} />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {renderThemeChanger()}
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view?usp=share_link',
                )
              }
              className={cn(
                'hidden md:flex hover:text-white border-2 dark:border-white border-black hover:bg-black focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-[16px] text-base px-5 py-2 text-center mr-2 dark:text-gray-200 dark:hover:text-black dark:hover:bg-gray-200 dark:focus:ring-gray-800',
                textColor,
              )}
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div
            className={cn('px-2 pt-2 pb-3 space-y-1', textColor)}
            aria-label="Pages"
          >
            {hookProps.tabs.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className="hover:bg-zinc-600 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view?usp=share_link"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
