import axios from "axios";

export default function Post ({ post }) {

    return (
        <div>
          <h1 className="text-2xl font-bold border-b-2 pb-3">{post.title}</h1>
          <p className="pt-3">{post.body}</p>
        </div>
    );
};
    
export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    
    if (!data) {
        return {
          notFound: true,
        };
    }
    
    const post = data;
      return {
        props: {
          post,
        },
    };
};
// export const getStaticProps = async ({ params }) => {
//     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//     const post = data;
//     return {
//       props: {
//         post,
//       },
//     };
//   };
  
//   export const getStaticPaths = async () => {
//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const posts = data.slice(0, 10);
//     const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
//     return {
//       paths,
//       fallback: true,
//     };
//   };
export const requiredAuth = true
