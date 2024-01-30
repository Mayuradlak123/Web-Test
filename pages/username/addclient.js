import styles from '../../styles/AddNewClient.module.css';
import { useState, useEffect } from 'react';
import { getCookie } from '@/actions/auth';
const token = getCookie('token');
import { storage } from "../../components/firebase";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import fetch from "isomorphic-fetch";
import { API } from '@/config';

const AddNewClient = () => {

    const [file, setFile] = useState("");
    const [values, setValues] = useState({
        name: '',
        email: '',
        phonenumber: '',
        city: '',
        joiningdate: '',
        sponsoredby: '',
        loading: false,
        message: '',
        error: '',
    });

    const { name, email, city, phonenumber, joiningdate, sponsoredby, error, loading, message } = values;



    const handleUpload = e => {
         e.preventDefault();
         if (!file || file.length === 0) {
            setValues({ ...values, error: 'No Image Uploaded' });
            return;
        }
        const storageRef = ref(storage, `/blogs/${file[0].name}-${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file[0]);
        uploadTask.on("state_changed", () => { },
            (err) => { console.log(err); },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setValues({ ...values, loading: true, error: false });
                    const user = { name, phonenumber, email, city, joiningdate, sponsoredby, url };
                    addclient(user, token).then(data => {
                        if (data && data.error) { setValues({ ...values, error: data.error, loading: false }); }
                        else {
                            setValues({ ...values, error: '', loading: false, message: data.message, });
                        }
                    });
                });
            });
    };

    const addclient = async (user, token) => {
        try {
            const response = await fetch(`${API}/v1/club/client/addclient`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            return await response.json();
        } catch (err) {
            return console.log(err);
        }
    };


    function handleImg(event) {
        const imageFiles = event.target.files;
        const imageFilesLength = imageFiles.length;
        if (imageFilesLength > 0) {
            setValues({ ...values, error: "" });
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            const imagePreviewElement = document.querySelector("#preview-selected-image");
            imagePreviewElement.src = imageSrc;
            imagePreviewElement.style.display = "block";
            imagePreviewElement.style.width = "100px";
            imagePreviewElement.style.height = "100px";
            imagePreviewElement.style.borderRadius = "50px";
        }
        const selectedFiles = event.target.files;
        setFile(selectedFiles);
    }

    const handleChange = name => e => { setValues({ ...values, error: false, [name]: e.target.value }); };

    const showLoading = () => (loading ? <div className={styles.showLoading}>Loading...</div> : '');
    const showError = () => (error ? <div className={styles.showError}>{error}</div> : '');
    const showMessage = () => (message ? <div className={styles.showMessage}>{message}</div> : '');




    return (


        <div className={styles.container}>
            <div className={styles.heading}>
                <p>Add New Client</p>
            </div>

            <div className={styles.topmsgs}>
                {showError()}
                {showLoading()}
                {showMessage()}
            </div>



            <div className={styles.coach}>
                <p>Coach: <span>SimarPreet Singh</span></p>
            </div>


            <div className={styles.avatar}>
                <img id="preview-selected-image" />
            </div>

            <div className={styles.uploaddiv}>
                <label className={styles.fileInputLabel}>
                    Upload Image
                    <input type="file" className={styles.fileInput} onChange={handleImg} multiple accept="image/*" />
                </label>
            </div>



            <form autoComplete="off" onSubmit={handleUpload}>
                <div className={styles.data}>
                    <div className={styles.name}>
                        <p> Client Name</p>
                        <input type='text' value={name} onChange={handleChange('name')} name='name' />
                    </div>
                    <div className={styles.phone}>
                        <p>Phone No.</p>
                        <input type='number' value={phonenumber} onChange={handleChange('phonenumber')} name='phonenumber' />
                    </div>
                    <div className={styles.city}>
                        <p>City</p>
                        <input type='text' value={city} onChange={handleChange('city')} name='city' />
                    </div>
                    <div className={styles.email}>
                        <p>E-mail</p>
                        <input type='email' value={email} onChange={handleChange('email')} name='email' />
                    </div>
                    <div className={styles.joining}>
                        <p>Joining Date</p>
                        <input type='text' value={joiningdate} onChange={handleChange('joiningdate')} name='joiningdate' />
                    </div>
                    <div className={styles.sponsered}>
                        <p>Sponsered by</p>
                        <input type='text' value={sponsoredby} onChange={handleChange('sponsoredby')} name='sponsoredby' />
                    </div>
                </div>


                <div className={styles.save}>
                    <button >Save</button>
                </div>

                <br />
                <br />

            </form>
        </div>
    )
}

export default AddNewClient