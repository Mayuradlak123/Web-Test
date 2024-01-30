import styles from "../../styles/signup.module.css";
import { useState } from 'react';
import { clubregister } from '../../actions/auth';
import AdminDashLayout from "../AdminDashLayout";
import { getCookie } from "../../actions/auth";
const token = getCookie('token');


const ClubUserSignup = () => {
  const [values, setValues] = useState({
    name:'',
    username: '',
    email: '',
    password: '',
    error: '',
    mobileNumber: '',
    city: '',
    loading: false,
    message: '',
    showForm: true
  });



  const { name, username, email, city, mobileNumber, password, error, loading, message, showForm } = values;


  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, username, mobileNumber, email, password, city };

    clubregister(user, token).then(data => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, loading: false });

      } else {
        setValues({
          ...values,
          // username: '',
          // name:'',
          // email: '',
          //  password: '',
          // city: '',
          // phonenumber: '',
          error: '',
          loading: false,
          message: data.message,
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



  const signupForm = () => {
    return (

      <>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Create Club User</h1>
          <br />



          <form autoComplete="off" onSubmit={handleSubmit}>
          <input className={styles.inputs} value={name} onChange={handleChange('name')} name="name" type="text" placeholder="Name" />
            <input className={styles.inputs} value={username} onChange={handleChange('username')} name="username" type="text" placeholder="Username" />
            <input className={styles.inputs} value={mobileNumber} onChange={handleChange('mobileNumber')} name="mobileNumber" type="number" placeholder="mobileNumber" />
            <input className={styles.inputs} value={email} onChange={handleChange('email')} name="email" type="text" placeholder="Email" />
            <input className={styles.inputs} value={password} onChange={handleChange('password')} name="password" type="text" placeholder="Password" />
            <input className={styles.inputs} value={city} onChange={handleChange('city')} name="city" type="text" placeholder="City" />

            <button className={styles.button}>Create</button>

          </form>
        </div>
      </>

    )
  }


  return (

    <AdminDashLayout>
      {/* <div className={styles.backImg}> */}
      <div className={styles.topmsgs}>
        {showError()}
        {showLoading()}
        {showMessage()}
      </div>
      {showForm && signupForm()}
      <br /><br />

      {/* </div> */}
    </AdminDashLayout>
  )
}

export default ClubUserSignup
