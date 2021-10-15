import Head from 'next/head'
import axios from "axios";
import Link from "next/link";
import Layout from '../../component/Layout';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

export default function Blog(props) {
    const posts = props.data
    

    return (
      <div>
      <Layout>
        <Head>
            <title>Blogs</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div>
                <ol>
                    {posts.map((post) => (
                      <div className="border border-black-500 shadow hover:shadow-md hover:border-pink-600 rounded-md p-4 transition duration-500 ease-in m-4">
                        <li key={post.id} >
                            <Link
                            href={{
                                pathname: "/home/[id]",
                                query: { id: post.id },
                            }}
                            >
                            <a className="font-bold">{post.title}</a>
                            </Link>
                        </li>
                        <p>{post.body}</p>
                      </div>
                    ))}
                </ol>
            </div>
        </main>
        </Layout>
        </div>
    )
}


export async function getStaticProps(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return {
        props: { data: res.data.slice(0, 10)}
    }
}

export const requiredAuth = true
