import Admin from '../../components/auth/Admin';
import BlogRead from '../../components/crud/BlogRead';
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Edit Blogs</title>
  </Head>
);


const Blog = () => {
    return (

        <Admin>
            {head()}
            <BlogRead/>
        </Admin>

    );
};

export default Blog;