import Admin from '../../components/auth/Admin';
import BlogUpdate from '../../components/crud/BlogUpdate';
import Head from 'next/head';

const head = () => (
    <Head>
      <title>Update This Article</title>
    </Head>
  );

const Blog = () => {
    return (

        <Admin>
            {head()}
            <BlogUpdate />
        </Admin>

    );
};

export default Blog;