import Admin from "@/components/auth/Admin";
import ClubUserSignup from "@/components/auth/ClubuserSignup";
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Create ClubUser</title>
  </Head>
);


const CreateClubUser= () => {
    return (
       <Admin>
        {head()}
       <ClubUserSignup/>
        </Admin>
        
    )
  }
  
  export default CreateClubUser