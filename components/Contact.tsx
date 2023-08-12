import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  return (
    <div className="my-36" id="Contact" data-aos="fade-up">
      <div className="w-full p-4 text-center bg-white rounded-lg shadow-md sm:p-8 dark:bg-neutral-800 ">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Let&apos;s Connect
        </h5>
        <p className="mb-5 text-base text-gray-700 sm:text-lg dark:text-gray-400">
          I&apos;m currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:mshivam019@gmail.com"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <EnvelopeIcon className="h-8 w-8 pr-2" />
            <div className="text-left">
              <div className="item-center font-sans text-sm font-semibold">
                Chat
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
