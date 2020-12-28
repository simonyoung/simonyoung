import Link from 'next/link';
import Moment from 'react-moment';

const Blog = ({ allPosts }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Blog
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl leading-7 text-gray-500">
                Full length articles on engineering management, technology and leadership.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {allPosts &&
              allPosts.map((blog) => (
                <>
                  <div>
                    <p className="text-sm leading-5 text-gray-500">
                      <Moment date={blog.fields.publish_date} format="DD MMM YYYY" />
                    </p>
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      <Link href={`/blog/${blog.fields.slug}`}>{blog.fields.post_title}</Link>
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      {blog.fields.content_preview}
                    </p>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
