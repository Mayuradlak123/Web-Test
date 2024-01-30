"use client"
import React,{useEffect, useState, useCallback} from 'react'
import styles from './styles/TotalClient.module.css'
import { getAllClients } from '@/serverActions'
import { BsLink45Deg, BsFillCameraVideoFill, BsEyeFill } from 'react-icons/bs'
import { CgToggleSquareOff } from 'react-icons/cg'
import Link from 'next/link'
import Cookies from 'js-cookie'

const TotalClient = ({allClients}) => {

    const [clients, setClients] = useState(allClients);
    const [name, setName] = useState("")

    const reset = useCallback(()=>{
        setClients(allClients);
    }, [clients])

    function isSubsequence(str1, str2) {
        let i = 0;
        let j = 0;
      
        
        while (i < str1.length && j < str2.length) {
          if (str1[i] === str2[j]) {
            i++;
          }
          j++;
        }
        if (i === str1.length) {
          return true;
        }
        return false;
      }
    
    const handleClick = (e)=>{
        setName(e.target.value);
        if(!(e.target.value) || e.target.value.trim()==='')reset()
        setClients(allClients.filter(client=>{
        return isSubsequence(e.target.value.trim().toLowerCase(), client.name.toLowerCase())
        }))
        
    }
    console.log(allClients)
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.record}>
                    <div className={styles.view}>
                        <div className={styles.record_link}>
                            <BsLink45Deg className={styles.icon} color='gray' />
                            <input type='text' value={name} placeholder='Enter Client Name to view ' onChange={handleClick}/>
                            <button onClick={reset}>Reset</button>
                        </div>
        {/* {console.log("client",allClients[0])} */}

                        <div className={styles.add}>
                            <div className={styles.new_client}>
                                <button>Record New Client</button>
                            </div>
                            <div className={styles.client}>
                                <Link href='/club/Coach/newClient' className='mx-auto'>Add New Client</Link>
                                 <Link href={`/club/onboarding?id=${Cookies.get('coachId')}`} className='mx-auto'>Send Onbording Form</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-scroll w-[90vw] md:w-full md:overflow-x-visible">
                <table class=" text-xs md:text-base table-auto md:table-auto w-full  my-4">
  <thead className='bg-gray-300 rounded-t-lg overflow-hidden px-3'>
    <tr className='rounded-t-lg overflow-hidden px-3'>
       
        <th className='rounded-tl-2xl md:px-3 border-[1px] border-white border-l-0'>S.NO</th>
      <th className='overflow-hidden md:px-3 justify-center border-[1px] border-white'>Client Name</th>
      <th className=' overflow-hidden md:px-3 mx-2 border-[1px] border-white'>Joining Date</th>
      <th className=' overflow-hidden md:px-3 border-[1px] border-white'>Mobile No.</th>
      <th className=' overflow-hidden md:px-3 border-[1px] border-white'>City</th>
      <th className=' overflow-hidden md:px-3 border-[1px] border-white'>RollNo.</th>
      <th className=' overflow-hidden md:px-3 border-[1px] border-white'>Sponser By</th>
      <th className=' overflow-hidden md:px-3 border-[1px] border-white'>Attendence</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Subscription Status</th>
      <th className=' rounded-tr-2xl overflow-hidden md:px-3 border-[1px] border-white border-r-0'>View</th>

    </tr>
  </thead>
  <tbody className='text-gray-700 text-[0.65rem] md:text-sm'>
    {/* {console.log(allClients)} */}

        {/* {console.log(clients, allClients)} */}

      {/* No data value table content begins   */}
      {/* {console.log(clients)} */}
      {!(clients?.length || allClients?.length) && <tr className='font-semibold'>
      <td className=' text-center px-3 py-1 border-[1px] border-black overflow-ellipsis '><span>No data</span> </td>
      <td className='text-center overflow-x-scroll no-scrollbar mx-3 md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      {/* {console.log(client)} */}
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'><div className={`rounded-md text-[0.65rem] md:text-sm  w-14 mx-auto `}>No data</div></td>
      <td className='text-center px-3 py-1 border-[1px] border-black justify-center '>
      No data
        </td>
    </tr>
    }

    {/* No data value table content ends */}

  {(clients || allClients)?.map((client, index)=>{
    // console.log(client.isSubscription)
    return (<tr key={client?._id}>
      <td className=' text-center px-3 py-1 border-[1px] border-black overflow-ellipsis '><span>{index+1}</span> </td>
      <td className='text-center overflow-x-scroll no-scrollbar mx-3 md:px-3 py-1 border-[1px] border-black'>{client?.name}</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.joiningDate.split(" ")[0]}</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.mobileNumber} </td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.city}</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.rollno}</td>
      {/* {console.log(client)} */}
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.sponseredByName || client.sponseredBy.name || "NA"}</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>{client?.totalAttendance}</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'><div className={`rounded-md text-[0.65rem] md:text-sm ${client?.isSubscription?"bg-green-600":"bg-red-500"} w-14 mx-auto text-white`}>{client?.isSubscription?"active":"inactive"}</div></td>
      <td className='text-center px-3 py-1 border-[1px] border-black justify-center '>
        <button onClick={()=>localStorage.setItem('clientInfoToggleState', 'basic')}>
        <Link href={`/club/client-info?id=${client?._id}`} >
            <BsEyeFill className="m-auto flex" color='gray' />
        </Link>
        </button>
        </td>
    </tr>)
            
        })}
    
  </tbody>
</table>
</div>
                
            </div >
        </>
    )
}

export default TotalClient