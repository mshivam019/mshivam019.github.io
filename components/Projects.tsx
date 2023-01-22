import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

export default function Projects() {
  return (
    <div
      data-aos="fade-up"
      id="Projects"
      className="mt-8 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="font-semi-bold text-3xl md:text-4xl text-black dark:text-white mr-auto">
        Projects
      </h1>
      <div className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl">
        <div className="md:flex ">
          <div className="md:shrink-0 mt-7 px-6">
            <Link href="https://e-commerce-mshivam019.vercel.app/">
              <Image
                height={76}
                width={96}
                sizes="90vw"
                className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer"
                src="/img/ecom.png"
                alt="E-commerce website home screen"
              />
            </Link>
          </div>
          <div className="p-8">
            <div
              className=" sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 "
            >
              <div className="flex flex-col ">
                <Link href="https://e-commerce-mshivam019.vercel.app">
                  <span className="  font-bold text-xl hover:cursor-pointer">
                    EStore
                  </span>
                </Link>
              </div>
              <div className="w-full rounded-md py-6 md:p-0  z-8">
                <p className="dark:text-gray-300 flex flex-wrap">
                  • Developed an E-commerce website with Order-history,
                  Auto-complete Search, Payment-gateway and Cookies.
                  <br />
                  • Built with NextJs for frontend with SSR, MongoDB as database
                  and Next-auth with JWT token for authentication.
                  <br />• MongoDB Realm is used to create and handle the
                  server-less function calls and PayPal for payment gateway.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-8">MongoDB</span>
                <span className="pr-4 z-8">Tailwind CSS</span>
                <span className="pr-4 z-8">Realm</span>
                <span className="pr-4 z-8">Nextjs</span>
                <span className="pr-4 z-8">PayPal</span>
              </ul>
              <div className="z-8 flex fle-row space-x-5 ">
                <Link href="https://e-commerce-mshivam019.vercel.app">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <CommandLineIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
                  </span>
                </Link>
                <Link href="https://github.com/mshivam019/e-commerce">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <ArrowTopRightOnSquareIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 1 project ends */}
      <div
        data-aos="fade-up"
        className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
      >
        <div className="md:flex ">
          <div className="md:shrink-0 mt-7 px-6">
            <Link href="https://hm-system.fly.dev/">
              <Image
                height={76}
                width={96}
                sizes="90vw"
                className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer "
                src="/img/hospital.png"
                alt="Hospital website welcome screen"
              />
            </Link>
          </div>
          <div className="p-8">
            <div
              className=" sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 "
            >
              <div className="flex flex-col ">
                <Link href="https://hms.onrender.com/">
                  <span className="  font-bold text-xl hover:cursor-pointer">
                    Hospital Management System
                  </span>
                </Link>
              </div>
              <div className="w-full rounded-md py-6 md:p-0  z-8">
                <p className="dark:text-gray-300  flex flex-wrap">
                  • Developed a website to create, read, update, and delete
                  (CRUD) appointments on a hospital website using REST APIs.
                  <br />
                  • Implemented login for doctors and patients, try logging in
                  as &apos;doctor@hmd&apos;, &apos;password1&apos; or
                  &apos;patient@hmp&apos;, &apos;password2&apos;.
                  <br />
                  • Created separate databases for appointments and user details
                  using PostgreSQL and JPA Repository.
                  <br />• Used Docker-Compose to dockerize the application,
                  hosting the images on Docker Hub for easy deployment.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-8">Java</span>
                <span className="pr-4 z-8">SpringBoot</span>
                <span className="pr-4 z-8">PostgreSQl</span>
                <span className="pr-4 z-8">Docker</span>
                <span className="pr-4 z-8">REST APIs</span>
              </ul>
              <div className="z-8 flex fle-row space-x-5 ">
                <Link href="https://github.com/mshivam019/Hospital_Management">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <CommandLineIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
                  </span>
                </Link>
                <Link href="https://hm-system.fly.dev/">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <ArrowTopRightOnSquareIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 project ends */}
      <div
        data-aos="fade-up"
        className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
      >
        <div className="md:flex ">
          <div className="md:shrink-0 mt-7 px-6">
            <Link href="https://social-butterfly.vercel.app/">
              <Image
                height={76}
                width={96}
                sizes="90vw"
                className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer "
                src="/img/butterfly.png"
                alt="Social website Home screen"
              />
            </Link>
          </div>
          <div className="p-8">
            <div
              className=" sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 "
            >
              <div className="flex flex-col ">
                <Link href="https://social-butterfly.vercel.app/">
                  <span className=" font-bold text-xl hover:cursor-pointer">
                    Social Butterfly
                  </span>
                </Link>
              </div>
              <div className="w-full rounded-md py-6 md:p-0  z-8">
                <p className="dark:text-gray-300  flex flex-wrap">
                  • Twitter like web-app where you can send, edit, like, delete
                  and share Flutters(Tweets). You can also search Flutters sent
                  by anyone and share it using actual twitter.
                  <br />
                  • Built with NextJs for frontend, MongoDB as database and
                  Auth0 with JWT token for authentication. MongoDB Data API is
                  used to handle the server-less functions to perform CRUD
                  operations.
                  <br />
                  • Data API is used to access and load the flutters, App
                  services with triggers is used to add users from Auth0 to
                  database
                  <br />
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-8">MongoDB</span>
                <span className="pr-4 z-8">Mantine</span>
                <span className="pr-4 z-8">Data API</span>
                <span className="pr-4 z-8">Nextjs</span>
                <span className="pr-4 z-8">Auth0</span>
              </ul>
              <div className="z-8 flex fle-row space-x-5 ">
                <Link href="https://github.com/mshivam019/Social-Butterfly">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <CommandLineIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
                  </span>
                </Link>
                <Link href="https://social-butterfly.vercel.app/">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <ArrowTopRightOnSquareIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 project ends */}
      <div
        data-aos="fade-up"
        className="max-w-md mx-auto rounded-none shadow-md overflow-visible md:max-w-5xl"
      >
        <div className="md:flex ">
          <div className="md:shrink-0 mt-7 px-6">
            <Link href="https://kanban-notes.vercel.app/">
              <Image
                height={76}
                width={96}
                sizes="90vw"
                className="h-70 w-96 rounded-lg md:h-70 md:w-45 lg:hover:scale-125 transition-all duration-500 cursor-pointer "
                src="/img/kanban.png"
                alt="Notes app main screen"
              />
            </Link>
          </div>
          <div className="p-8">
            <div
              className=" sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 "
            >
              <div className="flex flex-col ">
                <Link href="https://kanban-notes.vercel.app/">
                  <span className=" font-bold text-xl hover:cursor-pointer">
                    Kanban Notes
                  </span>
                </Link>
              </div>
              <div className="w-full rounded-md py-6 md:p-0  z-8">
                <p className="dark:text-gray-300  flex flex-wrap">
                  • Developed a Notes app to store user’s daily tasks, logs,
                  to-do, etc with help of Firebase.
                  <br />
                  • Used Firestore as database, lazy-login using google sign-in
                  and traditional login using email and password.
                  <br />
                  • Used Docker to containerize the application, currently using
                  Vercel to host and call the serverless functions.
                  <br />
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full dark:text-gray-300 md:text-gray-600
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-8">Firebase</span>
                <span className="pr-4 z-8">Angular</span>
                <span className="pr-4 z-8">Docker</span>
                <span className="pr-4 z-8">Typescript</span>
                <span className="pr-4 z-8">FireStore</span>
              </ul>
              <div className="z-8 flex fle-row space-x-5 ">
                <Link href="https://github.com/mshivam019/notes-app">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <CommandLineIcon className="ml-1 h-7 w-7 dark:text-zinc-200 " />
                  </span>
                </Link>
                <Link href="https://kanban-notes.vercel.app/">
                  <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                    <ArrowTopRightOnSquareIcon className="ml-1 h-7 w-7 dark:text-zinc-200" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 project ends */}
    </div>
  );
}
