import React, { useEffect, useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { getNotifications } from '@/serverActions'
import Cookies from 'js-cookie'

export default function NotificationModal({isOpen, onClose}) {
    const[notifications, setNotifications] = useState([])
    useEffect(()=>{
        const token = Cookies.get('refreshToken')
        
       async function f(){
            const result = await getNotifications(token);
            // if(result.status===false){
            //     router.replace('/club/login')
            // }
            console.log(result)
            setNotifications(result.data.slice(0, 20))
            // console.log(meetings)
        }
        f();
        
    }, [])
  return (
    <div  className={`fixed inset-0 h-full overflow-y-auto md:text-base text-sm transition-opacity ${
        isOpen ? 'opacity-100 visible z-10  backdrop-brightness-90 backdrop-blur-md' : 'opacity-0 invisible'
      }`}>
        <div className="w-[90%] rounded-md md:w-[70%] overflow-y-scroll h-[80%] md:h-[70%] mt-12 flex-col gap-12 bg-white  items-center justify-center mx-auto py-5 px-4 ">

            <div className="head  flex border-b-2 text-2xl border-gray-500 justify-between">
            <h1 className=' flex gap-4 items-center'><button onClick={()=>onClose()}>←</button> Notification</h1>
            <button className='text-red-500' onClick={onClose}>X</button>
            </div>

            <div className="notifications flex-col my-8 px-5">

            {notifications?.map(notification=>{
                return <div key={notification?._id} className="flex gap-12 my-4">
                <div>
                <div className="icon mt-2 rounded-full p-3 flex items-center justify-center text-xl bg-[#7AC143] text-white"><FaRegBell/></div>
                </div>
                <div className="content w-full border-b-2 border-gray-400 pr-10">
                    <p className='mt-2'>{notification?.message}</p>
                    <div className="metadata flex my-4 gap-4 text-gray-400">
                        <div className="time ">{notification?.createdDate}</div>
                        {/* <div className="date">01/01/2024</div> */}
                    </div>
                </div>
            </div>
            })}
                


                
            </div>
        </div>
      </div>
  )
}
