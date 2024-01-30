import AdminDashLayout from "../AdminDashLayout";
import styles from "../../styles/signup.module.css";
import { useState, useEffect } from "react";
import { singleAdmin, updateAdmin } from "@/actions/auth";
import { withRouter } from 'next/router';
import { getCookie } from "../../actions/auth";
const token = getCookie('token');
   
const EditAdmin = ({ router }) => {

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        role:'',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

     const { name, username, email, password, error, loading, message, role} = values;

     const [errorCode, setErrorCode] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });

         const user = { name, email, username, role };

         if (password.trim() !== '') {
            user.password = password;
          }

         updateAdmin(user, token, username).then(data => {
            console.log(data);
            if (data && data.error) {
                setValues({ ...values, error: data.error, loading: false });
                              
            } else {
                setValues({
                    ...values,
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



    const initUser = (res) => {
        if (router.query.username) {
            singleAdmin(router.query.username).then(data => {
                if (data.error) {
                    setErrorCode(404);
                } else {
                    setValues({ ...values, name: data.name, username: data.username, email:data.email, role:data.role });
                }
            });
        }
    };

    useEffect(() => {initUser();}, [router]);
        
    
    if (errorCode) {
        return (
            <AdminDashLayout>
                <div>
                    <br /><br /><br />
                    <div className={styles.page404}>404 Error! ClubUser Not Found</div>
                </div>
            </AdminDashLayout>
        );
    }



    return (
<>

        
        <AdminDashLayout>

            <div className={styles.topmsgs}>
                {showError()}
                {showLoading()}
                {showMessage()}
            </div>


            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Edit Club User</h1>
                <br />

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input className={styles.inputs} value={name} onChange={handleChange('name')} name="name" type="text" placeholder="Name" />
                    <input className={styles.inputs} value={username} name="username" type="text" placeholder="Username" readOnly/>
                    <input className={styles.inputs} value={email} onChange={handleChange('email')} name="email" type="text" placeholder="Email" readOnly />
                    <input className={styles.inputs} value={password} onChange={handleChange('password')} name="password" type="text" placeholder="Password" />
                    <input className={styles.inputs} value={role} onChange={handleChange('role')} name="role" type="text" placeholder="Role" />

                    <button className={styles.button}>Update</button>

                </form>
            </div>
        </AdminDashLayout>
</>

    )
}


export default withRouter(EditAdmin);