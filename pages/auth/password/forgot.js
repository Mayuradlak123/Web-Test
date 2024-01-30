import { useState } from 'react';
import Layout from '../../../components/Layout';
import { forgotPassword } from "../../../actions/auth";
import styles from "../../../styles/signup.module.css";

const ForgotPassword = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        loading: false,
        showForm: true
    });

    const { email, message, error, showForm, loading } = values;

    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, message: '', loading:true, error: '' });
        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message, email: '', showForm: false });
                
            }
        });
    };
  
    const showLoading = () => (loading ? <div className={styles.showLoading1}>Loading...</div> : '');
    const showError = () => (error ? <div className={styles.showError1}>{error}</div> : '');
    const showMessage = () => (message ? <div className={styles.showMessage1}>{message}</div> : '');

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <h2>Forgot Password</h2>
            <br />
            <div >
                <input className={styles.inputs} type="email" onChange={handleChange('email')} value={email} placeholder="Type your email" required />
            </div>
            <br />
            <div>
                <button className={styles.forgotpassbtn0022}>Send Password Reset Link</button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className={styles.backImg}>
                <br /><br />
                <div className={styles.Topmessages}>
                {showError()}
                {showLoading()}
                {showMessage()}
                </div>
                {showForm && passwordForgotForm()}
                <br /><br /><br /><br />
            </div>
        </Layout>
    );
};

export default ForgotPassword;