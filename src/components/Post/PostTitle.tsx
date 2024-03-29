import { FunctionComponent } from 'react';
import Link from 'next/link';

type TitleProps = {
  title: string;
  slug: string;
};

export const PostTitle: FunctionComponent<TitleProps> = ({ title, slug }) => (
  <h1 className="text-3xl text-center leading-8 font-extrabold tracking-tight text-logo-mid md:text-4xl">
    <Link href={`/blog/${slug}`} className="hover:underline">
      {title}
    </Link>
  </h1>
);
