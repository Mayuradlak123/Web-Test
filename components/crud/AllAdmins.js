import dynamic from 'next/dynamic';
const AdminDashLayout = dynamic(() => import('../AdminDashLayout'), { ssr: false });
import { useEffect, useState } from 'react';
import styles from "../../styles/allclubusers.module.css";
import { API } from '../../config';
import { isAuth } from '@/actions/auth';
import { getCookie } from '@/actions/auth';
const token = getCookie('token');

const AllAdmins = () => {


    const [admin, setadmin] = useState([]);
    const [admincount, setadmincount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ModalOpen, setModalOpen] = useState(false);
    const [currentadminslug, setcurrentadminslug] = useState("");


    useEffect(() => { fetchData(); }, [currentPage]);

    const showModal = (slug) => {
        setModalOpen(true);
        setcurrentadminslug(slug);
    };

    const hideModel = () => {
        setModalOpen(false);
        setcurrentadminslug("");
    }; 


    const removeAdmin = async (username, token) => {
        try {
            const encodedUrl = encodeURIComponent(username);
            const response = await fetch(`${API}/admin/search?username=${encodedUrl}`, {
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

    const getallAdmins = async (page) => {
        try {
            const response = await fetch(`${API}/alladmins?page=${page}`, { method: 'GET' });
            return await response.json();
        } catch (err) { return console.log(err); }
    };


    const fetchData = async () => {
        try {
            const data = await getallAdmins(currentPage); setadmin(data.data || []); setadmincount(data.totalAdmins || [])
        } catch (error) { console.error('Error fetching images:', error); }
    };

    const handledelete = async (username) => {
        try {
            removeAdmin(username, token);
            setTimeout(() => {fetchData(); }, 350);
        } catch (error) { console.error('Error Deleting:', error); }
    }


    const handleConfirmDelete = () => {
        handledelete(currentadminslug);
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handlePageChange = (newPage) => { setCurrentPage(newPage); };

    return (

        <AdminDashLayout>
            {isAuth().role === "admin" && (
                <>

                    <div className={styles.center}>    {admincount ? (<h3>Total &nbsp; Admins &nbsp; - &nbsp; <span> {admincount} </span></h3>) : (<></>)}</div>


                    <div className={styles.pagination}>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span className={styles.pagenumber}>{currentPage}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </div>



                    <div className={styles.grid}>

                        {admin && admin.map(user => (

                            <div key={user._id} className={styles.box}>

                                {isAuth().username === 'simar18' && (
                                <div className={styles.iconContainer}>
                                    <div className={styles.delete} onClick={() => showModal(user.username)}>🗑</div>
                                    <div className={styles.edit}><a target='_blank' href={`/admin/editadmin/${user.username}`}>📝</a></div>
                                </div>)}

                                <div className={styles.group}>
                                    <p> {user.name}</p>
                                    <p>{user.username}</p>
                                    <p>{user.email}</p>
                                    <p>Role - {user.role}</p>
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


export default AllAdmins