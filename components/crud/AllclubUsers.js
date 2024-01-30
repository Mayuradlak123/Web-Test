import dynamic from 'next/dynamic';
const AdminDashLayout = dynamic(() => import('../AdminDashLayout'), { ssr: false });
import { useEffect, useState } from 'react';
import styles from "../../styles/allclubusers.module.css"
import { API } from '../../config';
import { isAuth, getCookie } from '@/actions/auth';
const token = getCookie('token');

const AllClubUsers = () => {


    const [clubUsers, setClubUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [userscount, setuserscount] = useState(0);
    const [ModalOpen, setModalOpen] = useState(false);
    const [currentuserSlug, setcurrentuserSlug] = useState("");


    useEffect(() => { fetchData(); }, [currentPage]);

    const showModal = (slug) => {
        setModalOpen(true);
        setcurrentuserSlug(slug);
    };

    const hideModel = () => {
        setModalOpen(false);
        setcurrentuserSlug("");
    };


    const removeClubUser = async (username, token) => {
        try {
            const encodedUrl = encodeURIComponent(username);
            const response = await fetch(`${API}/v1/club/users/search?username=${encodedUrl}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            return await response.json();
        } catch (error) { console.error(error); return { error: 'Failed to delete image' }; }
    };

    const getallClubUsres = async (page) => {
        try {
            const response = await fetch(`${API}/allCoches`, { method: 'GET' });
            return await response.json();
        } catch (err) { return console.log(err); }
    };


    const fetchData = async () => {
        try {
            const data = await getallClubUsres(currentPage); setClubUsers(data.data || []); setuserscount(data.totalclubUsers || [])
        } catch (error) { console.error('Error fetching images:', error); }
    };

    const handledelete = async (username) => {
        try {
            removeClubUser(username, token);
            setTimeout(() => {fetchData(); }, 350);
        } catch (error) { console.error('Error Deleting:', error); }
    }


    const handleConfirmDelete = () => {
        handledelete(currentuserSlug);
        setModalOpen(false);
        document.body.style.overflow = 'auto';

    };


    const handlePageChange = (newPage) => { setCurrentPage(newPage); };


    const formatCreatedAt = (isoDateString) => {
        const date = new Date(isoDateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };




    return (

        <AdminDashLayout>
            {isAuth().role === "admin" && (
                <>

                    <div className={styles.center}>    {userscount ? (<h3>Total &nbsp; ClubUsers &nbsp; - &nbsp; <span> {userscount} </span></h3>) : (<></>)}</div>


                    <div className={styles.pagination}>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span className={styles.pagenumber}>{currentPage}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </div>



                    <div className={styles.grid}>



                        {clubUsers && clubUsers.map(user => (


                            <div key={user._id} className={styles.box}>

                                {isAuth().username === 'simar18' && (
                                <div className={styles.iconContainer}>
                                    <div className={styles.delete} onClick={() => showModal(user.username)}>🗑</div>
                                    <div className={styles.edit}><a target='_blank' href={`/admin/editclubusers/${user.username}`}>📝</a></div>
                                </div>)}

                                <div className={styles.group}>
                                    <p> {user.name}</p>
                                    <p>{user.username}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phonenumber}</p>
                                    <p>{user.city}</p>
                                    <p>{formatCreatedAt(user.createdAt)}</p>
                                </div>

                            </div>
                        ))}


                        {ModalOpen && (
                            <div className="modal">
                                <div className="modalContent">
                                    <div>Are you sure you want to delete this post ?</div>
                                    <br />
                                    <button className={styles.mbtn0} onClick={handleConfirmDelete}> DELETE</button>
                                    <button className={styles.mbtn1} onClick={hideModel}>CANCEL</button>
                                </div>
                            </div>
                        )}
                    </div>

                </>
            )}

        </AdminDashLayout>
    )
}


export default AllClubUsers