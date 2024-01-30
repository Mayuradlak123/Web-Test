import Admin from '@/components/auth/Admin';
import ImageGallary from '@/components/crud/ImageGallary';
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Images</title>
  </Head>
);


const Blog = () => {
    return (

        <Admin>
            {head()}
            <ImageGallary/>
        </Admin>

    );
};

export default Blog;