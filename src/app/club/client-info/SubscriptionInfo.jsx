'use client'
import React,{useEffect, useState} from 'react'
import styles from './styles/SubscriptionInfo.module.css'
import { FaToggleOn } from "react-icons/fa";
import { BsEyeFill } from 'react-icons/bs';
import { useSearchParams } from 'next/navigation';
// import { subscriptionInfo } from '@/serverActions';
import Cookies from 'js-cookie';
import SubscriptionModal from './addSubscription';
import UpdateModal from './updateSubscription';
import { getSubscriptionInfoClient } from '@/serverActions';

const SubscriptionInfo = ({id}) => {


  const [data, setData] = useState()
  useEffect(()=>{
    async function f(){
      const token = Cookies.get('refreshToken');
      const D = await getSubscriptionInfoClient(token, id)
      setData(D);
    }
    f();
  }, [])

  
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState()
    // console.log(data)
    const [subscriptionDetails, setSubscriptionDetails] = useState()
    // console.log(subscriptionDetails)
  
    return (
        <div className={styles.container} id='container'>
            <div className={styles.status}>
                {/* <p>
                    Subscription status
                </p> */}
                <div className='  p-2 '>{data?.data?.length!==undefined?`${data?.data?.length} Total Subscription`:"Loading..."} </div>
                <button className='px-2 p-1 ml-auto bg-[#7AC143] text-sm font-[400] rounded-md' onClick={()=>{setIsModalOpen(true)}}>Add Subscription</button>
                {isModalOpen && <SubscriptionModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} />}
            </div>

            <div className="overflow-x-scroll w-[90vw] md:w-full md:overflow-x-visible">
            { <table class=" text-xs md:text-base table-auto md:table-auto w-full  my-4">
  <thead className='bg-gray-300 rounded-t-lg overflow-hidden px-3'>
    <tr className='rounded-t-lg overflow-hidden px-3'>
        <th className='rounded-tl-2xl md:px-3 border-[1px] border-white border-l-0'>S.NO</th>
      <th className='overflow-hidden  md:px-3 justify-center border-[1px] border-white'>Amount</th>
      <th className=' overflow-hidden  md:px-3 mx-2 border-[1px] border-white'>Start Date</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>End Date</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Payment Mode</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Invoice</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Status</th>
      <th className=' overflow-hidden px-3 border-[1px] border-white rounded-tr-2xl'>Update</th>
      {/* <th className=' rounded-tr-2xl overflow-hidden px-3 border-[1px] border-white border-r-0'>View</th> */}

    </tr>
  </thead>
  <tbody className='text-gray-700'>
    {/* {console.log(data)} */}
  {(data && data?.data)?.map((sub, index)=>{
    const active = new Date(sub.endDate)>Date.now();
    return (<tr key={sub._id} id={sub._id} className=''>
      <td className=' text-center mx-2 px-3 py-1 border-[1px] border-black overflow-ellipsis'><span>{index+1}</span> </td>
      <td className='text-center mx-2 overflow-x-scroll no-scrollbar  md:px-3 py-1 border-[1px] border-black'>{sub.amount}</td>
      <td className='text-center mx-2  md:px-3 py-1 border-[1px] border-black'>{sub.startDate}</td>
      <td className='text-center mx-2 md:px-3 py-1 border-[1px] border-black'>{sub.endDate} </td>
      <td className='text-center mx-2 md:px-3 py-1 border-[1px] border-black'>{sub.paymentMode}</td>
      <td className='text-center mx-2 md:px-3 py-1 border-[1px] border-black'>{sub.invoice}</td>
      <td className='text-center mx-2 md:px-3 py-1 border-[1px] border-black'>
        <div className={`rounded-md mx-2 md:mx-0 text-white px-2 py-1 ${active?"bg-green-500 ":"bg-red-600"}`}>{active?"active":"inactive"}</div>
        </td>
      <td className='text-center mx-2 px-3 py-1 border-[1px] border-black'><button className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-1 bg-[#7AC143] text-base leading-6 font-medium text-white hover:bg-green-500 focus:outline-none focus:border-[#7AC143] focus:shadow-outline-green transition ease-in-out sm:ml-3 sm:w-auto sm:text-sm' onClick={()=>setModalId(sub._id)}>Update</button></td>
      {<UpdateModal key={sub._id} isOpen={modalId===sub._id} onClose={()=>setModalId(undefined)} details={sub} id={sub._id} /> }
      {/* <td className='text-center px-3 py-1 border-[1px] border-black'><div className={`rounded-md text-sm ${sub.isSubscription==='true'?"bg-green-600":"bg-red-500"} w-16 mx-auto text-white`}>{sub.isSubscription==='true'?"active":"inactive"}</div></td> */}
      {/* <td className='text-center px-3 py-1 border-[1px] border-black justify-center '>
        <Link href={`/sub-info?id=${sub._id}`} >
            <BsEyeFill className="m-auto flex" color='gray' />
        </Link>
        </td> */}
    </tr>)
            
        })}
    
  </tbody>
</table>}
</div>
            
        </div>
    )
}

export default SubscriptionInfo