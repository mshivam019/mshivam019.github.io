import client from '@/client';
import { useNextSanityImage } from 'next-sanity-image';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Blog } from '@/types';

interface BlogType {
  blog: Blog;
}

function Blogs({ blog }: BlogType) {
  const imageSources = useNextSanityImage(client, blog.image);
  return (
    <div key={`content-${blog._key}`} className="mb-10">
      <p className={twMerge('', 'text-xl mb-4')}>{blog.title}</p>

      <div className="text-base prose prose-sm dark:prose-invert items-center justify-center flex flex-col">
        {blog?.image && (
          <Image
            src={imageSources.src}
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover"
          />
        )}
        {blog.description}
      </div>
    </div>
  );
}

export default Blogs;
