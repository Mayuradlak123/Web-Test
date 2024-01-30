import Admin from "@/components/auth/Admin";
import BlogCreate from "@/components/crud/CreateBlog";
import Head from "next/head";

const head = () => (
    <Head>
      <title>Add a Post</title>
    </Head>
  );

const Blog = () => {
    return (

        <Admin>
            {head()}
            <BlogCreate />
        </Admin>

    );
};

export default Blog;