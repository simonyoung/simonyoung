import Link from 'next/link';
import Headline from 'components/Headline';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

const HomePage = ({ allPosts, siteConfig }) => {
  return (
    <>
      <Headline />

      <div className="max-w-screen-xl mx-auto relative py-4 overflow-hidden">
        {allPosts &&
          allPosts.map((blog, index) => (
            <BlogPostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
            >
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto ">
                  <h1 className="mt-2 mb-6 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    {blog.fields.post_title}
                  </h1>
                  <div className="w-max-content mx-auto">
                    <p className="align-items inline-block px-2 py-0 text-base leading-6 ml-2 uppercase font-medium">
                      By Simon Young
                    </p>
                    <p className="align-items inline-block px-2">
                      <svg
                        class="h-6 w-6 my-2 relative inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <Moment
                        date={blog.fields.publish_date}
                        format="DD MMM YYYY"
                        className="text-base leading-6 ml-2 uppercase font-medium inline-block"
                      />
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="object-cover w-full sm:w-4/5 mx-auto py-10"
                    src="https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="prose prose-lg text-gray-500 mx-auto pb-10">
                  <ReactMarkdown source={blog.fields.content_preview} />
                  <p>
                    <a>
                      <span className="text-gray-600 underline">Read more</span>
                    </a>
                  </p>
                </div>
                <hr />
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};

export default HomePage;
