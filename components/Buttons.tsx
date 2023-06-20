import React from 'react';

export default function Buttons() {
  const buttons = [
    {
      label: 'Android Apps',
      url: 'https://mshivam019.github.io/portfolio/',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/mshivam019/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/mshivam019',
    },
    {
      label: 'Certifications',
      url: 'https://drive.google.com/drive/folders/1q0KZSNVHhTny67mdtN_LUV7pMb8y6T3O?usp=sharing',
    },
    {
      label: 'Mail',
      url: 'mailto:mshivam019@gmail.com',
    },
    {
      label: 'Link Tree',
      url: 'https://linktr.ee/mshivam019',
    },
  ];

  return (
    <div className="flex flex-wrap space-x-4 pl-2">
      {buttons.map((button) => (
        <button
          key={button.label}
          className="btn2 px-3 py-2 my-2 relative border-2 rounded-[16px] hover:text-white dark:border-white border-black dark:text-gray-200 dark:hover:text-black leading-none overflow-hidden"
          type="button"
          onClick={() => window.open(button.url)}
        >
          <span className="absolute inset-0 dark:bg-white bg-black" />
          <span className="absolute inset-0 flex justify-center items-center">
            {button.label}
          </span>
          {button.label}
        </button>
      ))}
    </div>
  );
}
