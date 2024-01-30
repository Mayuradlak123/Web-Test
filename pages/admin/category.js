import Admin from '../../components/auth/Admin';
import Category from '../../components/crud/Category';
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Categories</title>
  </Head>
);

const category= () => {
  return (
     <Admin>
      {head()}
      <Category/>
      </Admin>      
  )
}

export default category