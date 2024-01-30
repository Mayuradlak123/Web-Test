'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/page.module.css'
import MeetingHeld from './MeetingHeld';
import TotalClient from './TotalClient';
import { getDashData, getAllClients,getOrganization, getMeetings } from '@/serverActions';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FaBell } from "react-icons/fa";
import NotificationModal from './NotificationModal';



const Page = () => {

    const router = useRouter()
    const [toggleState, setToggleState] = useState("meeting held");
    const [dashData, setDashData] = useState()
    const [clientData, setClientData] = useState()
    const [meetingData, setMeetingData] = useState()

    const toggleTab = (tab) => {
        setToggleState(tab);
        
        localStorage.setItem('dashboardTab', tab);
    }


    useEffect(()=>{
        const authToken = Cookies.get('refreshToken')
        const tab = localStorage.getItem('dashboardTab')
        if(tab){
            setToggleState(tab);
        }
    
    }, [])

    useEffect(()=>{
        const token = Cookies.get('refreshToken')
        try {
            const data = fetch('https://api.wellnessz.in/api/isClubCoach',
            {method: 'GET',        
          headers: {
              'authorization': `Bearer ${token}`,
            },
        })
        .then((response) => response.json())
        .then((res)=>{
            if(!(res.status)){
                router.replace('/club/login');
            }
        })
            
        } catch (error) {
            router.replace('/club/login')
        }
       async function f(){
            const result = await getDashData(token);
            // if(result.status===false){
            //     router.replace('/club/login')
            // }
            console.log(result)
            setDashData(result);
            const clients = await getAllClients(token);
            setClientData(clients)
            const meetings = await getMeetings(token);
            setMeetingData(meetings)
            // console.log(meetings)
        }
        f();
        
    }, [])


    function logout(){
        Cookies.remove('refreshToken');
        Cookies.remove('coachId');
        router.replace('/club/login')
    }

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
      };

    return (

        <>
            <div className={`${styles.container} w-full`}>
                <div className="dashboard-header flex items-center w-full justify-between px-12 md:mb-12">
                <img src="/Icon wb 5.png" className='h-22 w-36   mr-auto' alt='logo'/>
                <div className='flex items-center gap-12'>
                <button className='text-lg text-[#7AC143]' onClick={openModal}><FaBell /></button>
                {isOpen && <NotificationModal isOpen={isOpen} onClose={closeModal}/>}
                <button className='rounded-md px-2 py-1 border-2 hover:scale-105 ease-in-out duration-200 border-gray-600' onClick={logout}>Logout</button>
                </div>
                </div>
                {/* {console.log(dashData)} */}
                {dashData?.status && <div className={styles.club_container}>
                    <p>Club Dashboard</p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1 className=''>{dashData?.data.totalAttendence || 0}</h1>
                            <p className='text-xs'>Total Attendence</p>
                        </div>
                        <div className={styles.box}>
                            <h1>{dashData?.data.totalClient || 0}</h1>
                            <p>Total Client</p>
                        </div>
                        <div className={styles.box}>
                            <h1>{dashData?.data.totalLinkGenerated || 0}</h1>
                            <p>Link Generated</p>
                        </div>
                    </div>
                </div>}



                <div className={styles.bloc_tabs}>
                    <div
                        className={toggleState === "meeting held" ? styles.active_tab : styles.tab}
                        onClick={() => toggleTab("meeting held")}
                    >
                        Meeting Held
                    </div>
                    <div
                        className={toggleState === "total client" ? styles.active_tab : styles.tab}
                        onClick={() => toggleTab("total client")}
                    >
                        Total Client
                    </div>
                    {/* <div
                        className={toggleState === "link generated" ? styles.active_tab : styles.tab}
                        onClick={() => toggleTab("link generated")}
                    >
                        Link Generated
                    </div> */}
                </div>
                {toggleState === "meeting held" ? (<MeetingHeld allMeetings={meetingData?.data}/>) : (<></>)}
                {toggleState === "total client" ? (<TotalClient allClients={clientData?.data}/>) : (<></>)}
            </div>
        </>
    )
}

export default Page