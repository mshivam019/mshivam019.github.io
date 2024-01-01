import Link from 'next/link';

export default function Footer() {
  const date = new Date();
  return (
    <footer className=" sticky top-[100vh]">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">
          <Link href="/">Portfolio</Link>
        </div>
        <p className="py-2  sm:py-0">All rights reserved © {date.getFullYear()}</p>
      </div>
    </footer>
  );
}
