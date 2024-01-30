import Admin from "@/components/auth/Admin";
import AllAdmins from "@/components/crud/AllAdmins";
import Head from "next/head";

const head = () => (
    <Head>
      <title>All Admins</title>
    </Head>
  );


//Commit


const Alladmins = () => {

    return (

        <Admin>
              {head()}
            <AllAdmins />
        </Admin>

    );
};

export default Alladmins;
