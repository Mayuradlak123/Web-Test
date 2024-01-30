import Admin from "@/components/auth/Admin";
import AdminSignup from "@/components/auth/AdminSignup";
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Create Admin</title>
  </Head>
);


const CreateAdmin= () => {
    return (
       <Admin>
        {head()}
       <AdminSignup/>
        </Admin>
        
    )
  }
  
  export default CreateAdmin