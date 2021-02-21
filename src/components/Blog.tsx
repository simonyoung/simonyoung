/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/components/Post';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Blog = ({ posts }: Props) => {
  const isPreview = true;
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="relative max-w-lg mx-auto">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900">Blog</h2>
            <div className="mt-3">
              <p className="text-xl leading-7 text-gray-500">
                Full length articles on engineering management, technology and leadership.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10">
            {posts.map((post: any, index: number) => {
              return (
                <div key={index}>
                  <Post isPreview={isPreview} key={index} {...post} />;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
