import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

function Tabs() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 1 ? ' bg-zinc-600 text-white' : 'text-black-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Google Supported Android Internship - Smartbridge
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 2 ? ' bg-zinc-600 text-white' : 'text-black-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Future Ready Talent Cloud Internship - Microsoft
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <div className="container mt-8 mx-auto p-4 md:p-0">
                  <div className="shadow-lg flex flex-wrap w-full mx-auto">
                    <div className="bg-cover bg-bottom w-full md:w-1/3 h-64 md:h-auto relative">
                      <Image
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        fill
                        style={{ objectFit: 'cover' }}
                        src="/gcer.png"
                        alt=""
                      />
                    </div>

                    <div className="dark:bg-neutral-700 bg-gray-300 w-full md:w-2/3 lg:rounded-r-md sm:rounded-b-md">
                      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                        <div className="dark:bg-zinc-800 rounded-md bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                          <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                            <h3 className="text-black dark:text-slate-200">
                              Android Developer
                            </h3>
                            <p className="mb-0 mt-3 text-zinc-700 text-sm italic dark:text-zinc-200">
                              August - September 2022
                            </p>
                          </div>

                          <div className="w-full lg:w-3/5 lg:px-3">
                            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm dark:text-zinc-200 text-zinc-800">
                              <span className="pr-4 z-10">
                                • Completed Android Basics course and attended
                                8-weeks of training, learning about Layouts and
                                Navigation in Kotlin.
                              </span>
                              <br />
                              <br />
                              <span className="pr-4 z-10">
                                • Experienced the kanban-board style for
                                handling managing and completing tasks.Used Git
                                for Submitting the project.
                              </span>
                              <br />
                              <br />
                              <span className="pr-4 z-10">
                                • Built a grocery-list app using Kotlin and XML
                                for my final project with the help of
                                Coroutines, MVVM and ROOM database.
                              </span>
                              <br />
                            </p>
                          </div>

                          <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                            <Link href="https://github.com/mshivam019/Grocery-List">
                              <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                                Details
                                <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5 dark:text-zinc-200" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                <div className=" container mt-8 mx-auto p-4 md:p-0 ">
                  <div className="shadow-lg flex flex-wrap w-full mx-auto">
                    <div className="bg-cover bg-bottom w-full md:w-1/3 h-64 md:h-auto relative">
                      <Image
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        fill
                        style={{ objectFit: 'cover' }}
                        src="/mcer.png"
                        alt=""
                      />
                    </div>

                    <div className="dark:bg-neutral-700 bg-gray-300 w-full md:w-2/3">
                      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                        <div className="dark:bg-zinc-800 rounded-md bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                          <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                            <h3 className="text-black dark:text-slate-200">
                              Azure Developer
                            </h3>

                            <p className="mb-0 mt-3 text-zinc-700 text-sm italic dark:text-zinc-200">
                              May - June 2022
                            </p>
                          </div>

                          <div className="w-full lg:w-3/5 lg:px-3">
                            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm dark:text-zinc-200 text-zinc-800">
                              <span className="pr-4 z-10">
                                • In the Azure Services technology track, I
                                learnt about the roles and duties of an Azure
                                Dev-ops Engineer Associate.
                              </span>
                              <br />
                              <br />
                              <span className="pr-4 z-10">
                                • Experienced the daily hands-on tasks of an
                                Azure Developer (AZ-204) and learn from the
                                Industry sessions.
                              </span>
                              <br />
                              <br />
                              <span className="pr-4 z-10">
                                • My final project was a tourism website with a
                                Chat-Bot with CI/CD using GitHub, hosted on
                                Azure Static Web-Apps and Chat-Bot learns from
                                the user dynamically using QnA Maker hosted on
                                Azure Bot Services.
                              </span>
                              <br />
                            </p>
                          </div>

                          <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                            <Link href="https://github.com/mshivam019/Tour-Website">
                              <span className="inline-flex dark:text-zinc-200 text-zinc-700 hover:underline pr-2 mx-4 sm:mx-0">
                                Details
                                <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5 dark:text-zinc-200" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div
      id="Experience"
      data-aos="fade-up"
      className="mt-4 flex flex-col justify-center items-center max-w-6xl rounded-md mx-auto"
    >
      <h1 className="font-semi-bold text-3xl md:text-4xl text-black dark:text-white mr-auto pb-3">
        Experience
      </h1>
      <Tabs />
    </div>
  );
}
