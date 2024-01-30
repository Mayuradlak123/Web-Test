import Admin from '../../components/auth/Admin';
import AdminDashLayout from "../../components/AdminDashLayout"
import Head from 'next/head';

const head = () => (
  <Head>
    <title>Welcome To Admin Dashboard</title>
  </Head>
);


const AdminIndex = () => {
  return (
    <Admin>
      {head()}
        <AdminDashLayout>
          <h2 style={{color:"var(--text-color)", paddingTop:"7px"}}>Welcome To Admin's DashBoard</h2>
          <div style={{color:"var(--text-color)", paddingTop:"10px"}}>You can now create posts, categories, update or delete anyone's posts in this section</div>
          </AdminDashLayout>  
    </Admin>

  );
};

 export default AdminIndex;
