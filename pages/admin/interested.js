import Admin from "@/components/auth/Admin";
import AllInterested from "@/components/crud/Interested";
import Head from "next/head";

const head = () => (
    <Head>
      <title>All Interested</title>
    </Head>
  );



const Allclubusers = () => {

    return (

        <Admin>
              {head()}
            <AllInterested />
        </Admin>

    );
};

export default Allclubusers;