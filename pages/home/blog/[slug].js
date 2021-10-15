import Head from "next/head";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "../../../lib/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="border-b-2 border-purple-300 mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="text-gray-400 text-md">
            {format(parseISO(date), "MMMM do, uuu")}
          </div>
        </div>
        <div className="prose">
          <MDXRemote {...content} />
        </div>
        {/* <div>{content}</div> */}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);
  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
