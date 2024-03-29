import styles from "../../styles/signup.module.css";
import { useState, useEffect } from 'react';
import { clublogin, isAuth, authenticate } from '../../actions/auth';
import Router from 'next/router';
import Link from "next/link";


const AdminSignin = () => {
  const [values, setValues] = useState({
     email: '',
     password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && isAuth().role==1 &&  Router.push(`/admin`);

    if(isAuth()){
    const username=isAuth().username;
    isAuth() && Router.push(`/${username}`);
    }
  }, []);


  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    clublogin(user).then(data => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          if (isAuth()) {
            const username=isAuth().username;
            Router.push(`/${username}`);
          } else {
            Router.push(`/clublogin`);
          }
        });
      }
    });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () => (loading ? <div className={styles.showLoading}>Loading...</div> : '');
  const showError = () => (error ? <div className={styles.showError}>{error}</div> : '');
  const showMessage = () => (message ? <div className={styles.showMessage}>{message}</div> : '');



  const signinForm = () => {
    return (

      <>

        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Hello User !</h1>
          <p className={styles.paragraph}>Welcome back you've <br /> been missed!</p>


          <form autoComplete="off" onSubmit={handleSubmit}>
            <input className={styles.inputs} value={email} onChange={handleChange('email')} name="email" type="text" placeholder="Email" />
            <input className={styles.inputs} value={password} onChange={handleChange('password')} name="password" type="password" placeholder="Password" />

            <button className={styles.button}>Sign In</button>
{/* 
            <div className={styles.notmember}>
              Not a member ? &nbsp; <Link href="/signup"> Register Now</Link>
            </div> */}

        

          </form>
          <br />
          <Link className={styles.forgotpassbtn00} href="/auth/password/forgot">Forgot Password</Link>

        </div>

      </>

    )
  }


  return (
    <div className={styles.backImg}>
      <br />
      <br />
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
      <br /><br />
    </div>
  )
}

export default AdminSignin
