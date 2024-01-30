'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles/page.module.css'
import { getClientDetails, getSubscriptionInfoClient } from '@/serverActions'
import { useSearchParams } from 'next/navigation'
import BasicInfo from './BasicInfo'
import SubscriptionInfo from './SubscriptionInfo'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter()
    
    const [toggleState, setToggleState] = useState('basic');
    const [data, setData] = useState()
    const [subscriptionInfo, setSubscriptionInfo] = useState()
    const params = useSearchParams()
    const id = params.get('id')
    
    const toggleTab = (tab) => {
        setToggleState(tab);
        localStorage.setItem('clientInfoToggleState',tab);
    }

    useEffect(() => {
      async function f(){
        setToggleState(localStorage.getItem('clientInfoToggleState'));
        const token = Cookies.get("refreshToken");        
        const result = await getClientDetails(token, id)
        if(!(result.status)){
            router.replace("/club/login");
        }
        // console.log(id)
        console.log(result);
        setData(result)
        const subsData = await getSubscriptionInfoClient(token, id)
        setSubscriptionInfo(subsData)
      }
     
        f()
      
    
      return () => {
        
      }
    }, [])
    

    return (
        <>
            <img src="/Icon wb 5.png" className='h-22 w-36 md:ml-40 md:mb-12  mr-auto' alt='logo'/>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <p>Client Info</p>
                    </div>
                    <div className={styles.bloc_tabs}>
                        <div
                            className={toggleState === "basic" ? styles.active_tab : styles.tab}
                            onClick={() => toggleTab("basic")}
                        >
                            Basic Info
                        </div>
                        <div
                            className={toggleState === "subscription" ? styles.active_tab : styles.tab}
                            onClick={() => toggleTab("subscription")}
                        >
                            Subscription Info
                        </div>
                    </div>
                    <div>
                        {toggleState === "basic" ? (data && <BasicInfo data={data?.data}/>) : (<></>)}
                        {toggleState === "subscription" ? (<SubscriptionInfo id={id}/>) : (<></>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page