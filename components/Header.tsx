import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Experience', href: '#Experience', current: false },
  { name: 'Projects', href: '#Projects', current: false },
  { name: `Let's Connect`, href: '#Contact', current: false },
];

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <Disclosure
      as="nav"
      className="sticky top-0 z-30 dark:bg-neutral-800 bg-neutral-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-1 items-center">
                  <Link href="/">
                    <div className="block h-8 w-auto text-black lg:hidden dark:text-white text-2xl font-semibold cursor-pointer">
                      Portfolio
                    </div>

                    <div className="hidden h-8 w-auto lg:block text-black dark:text-white text-2xl font-semibold cursor-pointer">
                      Portfolio
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" hover:bg-zinc-600 hover:text-white
                        block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
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
                  className="hidden md:flex hover:text-white border-2 dark:border-white border-black hover:bg-black focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-[16px] text-base px-5 py-2 text-center mr-2 dark:text-gray-200 dark:hover:text-black dark:hover:bg-gray-200 dark:focus:ring-gray-800"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className=" hover:bg-zinc-600 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="a"
                href="https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view?usp=share_link"
                className="block px-3 py-2 rounded-md text-base font-medium "
              >
                Resume
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
