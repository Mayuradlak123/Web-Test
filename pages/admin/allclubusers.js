import Admin from "@/components/auth/Admin";
import AllClubUsers from "@/components/crud/AllclubUsers";
import Head from "next/head";

const head = () => (
    <Head>
      <title>All Club Users</title>
    </Head>
  );



const Allclubusers = () => {

    return (

        <Admin>
              {head()}
            <AllClubUsers />
        </Admin>

    );
};

export default Allclubusers;