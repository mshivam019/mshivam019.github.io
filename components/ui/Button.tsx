import { useRouter } from 'next/router';

interface ButtonProps {
  route: string;
  name: string;
  external?: boolean;
}

export default function Button({ route, name, external }: ButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="dark:bg-slate-800 bg-slate-300 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-sm md:text-base lg:text-lg font-semibold leading-6 text-white inline-block"
      onClick={() => {
        if (external) {
          window.open(route, '_blank');
          return;
        }
        router.push(route);
      }}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950 bg-zinc-800 py-1 px-6 md:px-8 lg:px-10 ring-1 ring-white/10">
        <span className="text-base md:text-lg lg:text-xl">{name}</span>
        <svg
          fill="none"
          height="20" // Adjust the height of the icon
          viewBox="0 0 24 24"
          width="20" // Adjust the width of the icon
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-2 w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}
