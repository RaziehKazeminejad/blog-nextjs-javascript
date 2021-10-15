import Head from "next/head";
import { getAllPosts } from "../../lib/data";
import BlogListItem from "../../component/BlogListItem";
import Layout from "../../component/Layout";

export default function Home({ posts }) {
    return (
      <div>
        <Layout>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="space-y-4">
            {posts.map((item) => (
              <BlogListItem key={item.slug} {...item} />
            ))}
          </div>
        </Layout>
      </div>
    );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}
