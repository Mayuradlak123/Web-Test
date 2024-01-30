"use client"
import React, { useCallback, useState } from 'react'
import styles from './styles/MeetingHeld.module.css'
import { BsLink45Deg, BsFillCameraVideoFill, BsEyeFill } from 'react-icons/bs'
import { FaCalendar } from "react-icons/fa";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';




const MeetingHeld = ({allMeetings}) => {

    


    
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


    // console.log(allMeetings)
    const [meetings, setMeetings] = useState(allMeetings)
    const [link, setLink] = useState("")
    const reset = useCallback(()=>{
      // console.log(allMeetings);
        setMeetings(allMeetings);
        // console.log(meetings)
    }, [meetings])
    
    const handleClick=(e)=>{
        setLink(e.target.value);
        if(!(e.target.value))reset();
        // console.log(link);
        setMeetings(allMeetings.filter(md=>{
            return isSubsequence(e.target.value.trim().toLowerCase(), md.wellnessZLink.toLowerCase())
            
        }))
        if(link.trim()==='')reset()
        // console.log(meetings, link)
    }


    return (
        <>
            <div className={styles.record}>
                <div className={styles.view}>
                    <div className={styles.record_link}>
                        <BsLink45Deg className={styles.icon} color='gray' />
                        <input type='text' value={link} placeholder='Enter meet link to view record' onChange={(e)=>handleClick(e)}/>
                        <button onClick={reset}>Reset</button>
                    </div>

                    <Link href="/club/Coach/link-generator" className={styles.new_meet}>
                        <BsFillCameraVideoFill color='white' />
                        <p>Record New Meet</p>
                    </Link>

                </div>
                {/* <div className={styles.dates}>

                    <div >
                        <FaCalendar />
                        <p>19 Aug 2023</p>
                    </div>
                </div> */}

            </div>
            <div className="overflow-x-scroll w-[90vw] md:w-[90%] md:overflow-x-visible">
            <table class=" text-xs md:text-base table-auto md:table-auto w-full  my-4">
  <thead className='bg-gray-300 rounded-t-lg overflow-hidden px-3'>
    <tr className='rounded-t-lg overflow-hidden px-3'>
        <th className='rounded-tl-2xl md:px-3 border-[1px] border-white border-l-0'>S.NO</th>
      <th className='overflow-hidden  md:px-3 justify-center border-[1px] border-white'>Base Link</th>
      <th className=' overflow-hidden  md:px-3 mx-2 border-[1px] border-white'>WellnessZ Link</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Schedule At</th>
      <th className=' overflow-hidden  md:px-3 border-[1px] border-white'>Total Attendence</th>
      <th className='rounded-tr-2xl overflow-hidden  md:px-3 border-[1px] border-white'>Club Type</th>
      {/* <th className=' overflow-hidden px-3 border-[1px] border-white'>Remark</th> */}
      {/* <th className=' rounded-tr-2xl overflow-hidden px-3 border-[1px] border-white border-r-0'>View</th> */}

    </tr>
  </thead>
  <tbody className='text-gray-700'>

    {/* No data value table content begins   */}
    
    {!(meetings || allMeetings) && <tr className='font-semibold'>
      <td className=' text-center px-3 py-1 border-[1px] border-black overflow-ellipsis '><span>No data</span> </td>
      <td className='text-center overflow-x-scroll no-scrollbar mx-3 md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      <td className='text-center overflow-x-scroll no-scrollbar md:px-3 py-1 border-[1px] border-black'>No data</td>
      {/* {console.log(client)} */}
    
    </tr>
}

    {/* No data value table content ends */}


  {(meetings || allMeetings)?.map((meeting, index)=>{
    return (<tr key={meeting?._id} className=''>
      <td className=' text-center px-3 py-1 border-[1px] border-black overflow-ellipsis'><span>{index+1}</span> </td>
      <td className='text-center overflow-x-scroll no-scrollbar  md:px-3 py-1 border-[1px] border-black'>{meeting?.baseLink}</td>
      <td className='text-center cursor-pointer  md:px-3 py-1 border-[1px] border-black' >
        <button onClick={()=>{navigator.clipboard.writeText(meeting.wellnessZLink); toast.success("Link Copied to Clipboard")}}>{meeting?.wellnessZLink}
        </button><Toaster/></td>
      
      <td className='text-center  md:px-3 py-1 border-[1px] border-black'>{meeting?.schedulueDate} </td>
      <td className='text-center  md:px-3 py-1 border-[1px] border-black'>{meeting?.attendence}</td>
      <td className='text-center  md:px-3 py-1 border-[1px] border-black'>{meeting?.clubType}</td>
      {/* <td className='text-center px-3 py-1 border-[1px] border-black'>{meeting?.coach}</td> */}
      {/* <td className='text-center px-3 py-1 border-[1px] border-black'><div className={`rounded-md text-sm ${meeting?.isSubscription==='true'?"bg-green-600":"bg-red-500"} w-16 mx-auto text-white`}>{meeting?.isSubscription==='true'?"active":"inactive"}</div></td> */}
      {/* <td className='text-center px-3 py-1 border-[1px] border-black justify-center '>
        <Link href={`/meeting-info?id=${meeting?._id}`} >
            <BsEyeFill className="m-auto flex" color='gray' />
        </Link>
        </td> */}
    </tr>)
            
        })}
    
  </tbody>
</table>
</div>
            
        </>
    )
}

export default MeetingHeld