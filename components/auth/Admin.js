import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';
import dynamic from 'next/dynamic';

const Admin = ({ children }) => {

  // const username=isAuth().username;

  useEffect(() => {
    if (!isAuth()) { Router.push(`/wellnessz-admin`); }
      else if (isAuth() && isAuth().role===3) { Router.push(`/`); }
  }, []);
  return (
    <>
      {children}
    </>
  );
};


export default dynamic(() => Promise.resolve(Admin), { ssr: false })