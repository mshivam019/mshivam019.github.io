import React from 'react';

export default function Buttons() {
  return (
    <div className="flex flex-wrap space-x-4">

      <button
        className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden "
        type="button"
        onClick={() => window.open('https://mshivam019.github.io/portfolio/')}
      >
        <span className="absolute inset-0 dark:bg-white bg-black" />
        <span className="absolute inset-0 flex justify-center items-center ">
          Android Apps
        </span>
        Android Apps
      </button>

      <button
        className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black  dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden "
        type="button"
        onClick={() => window.open('https://www.linkedin.com/in/mshivam019/')}
      >
        <span className="absolute inset-0 dark:bg-white bg-black" />
        <span className="absolute inset-0 flex justify-center items-center ">
          Linkedin
        </span>
        Linkedin
      </button>

      <button
        className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black  dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden "
        type="button"
        onClick={() => window.open('https://github.com/mshivam019')}
      >
        <span className="absolute inset-0 dark:bg-white bg-black" />
        <span className="absolute inset-0 flex justify-center items-center ">
          GitHub
        </span>
        GitHub
      </button>

      <button
        className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black  dark:text-gray-200 dark:hover:text-black  tracking-wider leading-none overflow-hidden "
        type="button"
        onClick={() =>
          window.open(
            'https://drive.google.com/drive/folders/1q0KZSNVHhTny67mdtN_LUV7pMb8y6T3O?usp=sharing'
          )
        }
      >
        <span className="absolute inset-0 dark:bg-white bg-black" />
        <span className="absolute inset-0 flex justify-center items-center ">
          Certifications
        </span>
        Certifications
      </button>

      <button
        className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black  dark:text-gray-200 dark:hover:text-black  tracking-wider leading-none overflow-hidden "
        type="button"
        onClick={() => window.open('mailto:mshivam019@gmail.com')}
      >
        <span className="absolute inset-0 dark:bg-white bg-black" />
        <span className="absolute inset-0 flex justify-center items-center ">
          Mail
        </span>
        Mail
      </button>
    </div>
  );
}
