import React, { useState } from 'react'
import styles from './styles/BasicInfo.module.css'
import { updateClient } from '@/serverActions';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
import { Calendar } from '@thumbtack/thumbprint-react';
import { FaCalendarCheck } from "react-icons/fa";

const BasicInfo = ({data}) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [edit, setEdit] = useState(false)
    const [details, setDetails] = useState(data)
    const [attendence, setAttendence] = useState(data?.attendance?.map(date=>{
     return convertAttendence(date);
    }))
    const [month, setMonth] = React.useState(undefined);
    
    // console.log("converted attendence h bhai ",attendence);
    const [imageURL, setImageURL] = useState(details?.profilePhoto)

    const handleFile = (event)=>{
        if(event.target.files && event.target.files[0]) {
          if(event.target.files[0].size > 2097152){
                toast.error("Image size should be less than 2MB");
                return;
            }
          setImageURL(URL.createObjectURL(event.target.files[0]));
          
        }    
      }

      

    function convertAttendence(date){
      // console.log(date)
      const newDate = date?.date?.split(' ')[0].split('-');
      // console.log(`${newDate[2]}-${newDate[1]-1}-${newDate[0]}`)
      return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
    }



    function handleClick(){
      if(edit){
        document.getElementById('photo').click()
      }
      else{
        toast.error("Please Click Edit to Make Any Changes")
      }
    }

    async function editClientInfo(data){
        if(!edit){
            setEdit(true);
            return;
        }
        const token = Cookies.get('refreshToken');
        if(!token) return window.alert('Please Log in !')
        const toastId = toast.loading("Editing Changes")
      console.log(data)
      console.log(details)
      const res = await updateClient(data, token, details._id)
      toast.remove(toastId)
      console.log(res)
      if(res.status){
        toast.success("Changes Saved Successfully",{duration: 4000 })
        setEdit(false)
        }
        else{
            toast.error(res.message || res.error || res.err || "Something went Wrong");
        }
        // console.log(res)
    }

    // console.log(data)
    return (
        <div className="min-h-screen mt-12">
        {/* {console.log("Hello" , data.attendance)} */}
            <form >
            <div className={styles.pic}>
            <div className="w-full  justify-center">
                <div className='mx-auto md:mx-0 w-fit'>
            <div className="rounded-full flex items-center  overflow-hidden justify-center h-32 w-32 md:h-36 md:w-36 mt-10 md:mt-20 md:ml-12 bg-gray-700">
                <img src={imageURL} className="h-full w-full object-fill " alt="" />
            </div>
            <input type="file" accept='image/*' name="file" id="photo" hidden onChange={(e)=>handleFile(e)}/>
                <button type='button'  className='p-1 px-4 mb-10 text-xs w-fit font-semibold -translate-y-3 md:ml-12 translate-x-4 md:translate-x-6 text-black rounded-md text-center bg-[#7AC143]' onClick={handleClick}>Upload Pic</button>
                </div>
                </div>
            </div>
  
            <div className={styles.name}>
                <p>{details?.name}</p>
                <button className={styles.editButton} formAction={editClientInfo} >{edit?"Save":"Edit"}</button>
                <Toaster/>
            </div>

            {details && <table class=" text-sm  table-auto w-[90vw] md:w-[85%] my-4 mx-auto">
  <tbody className='font-semibold'>
    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Name</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black '><input type="text" name='name' disabled={!edit} className='w-fit' value={details?.name} onChange={(e)=>setDetails(det=>({...det, name:e.target.value}))} /></td>
      
    </tr>
    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Mobile</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'><input name='mobileNumber' disabled={!edit} type="tel" pattern="[6789][0-9]{9}" title="Please enter 10 digit valid Phone number" className='w-fit' value={details?.mobileNumber}  onChange={(e)=>setDetails(det=>({...det, mobileNumber:e.target.value}))} /></td>      
    </tr>

    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>City</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'><input name='city' disabled={!edit} type="text" className='w-fit'  value={details?.city} onChange={(e)=>setDetails(det=>({...det, city:e.target.value}))}  /></td>
      
    </tr>
    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Email</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'><input name='email' disabled={!edit} type="email" className='w-fit' value={details?.email}  onChange={(e)=>setDetails(det=>({...det, email:e.target.value}))} /></td>      
    </tr>

    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Roll No</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'><input name='rollno' type="text" disabled className='w-fit' value={details?.rollno}   /></td>
      
    </tr>

    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Joining Date</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'><input type="text" name='joiningDate' disabled className='w-fit' value={details?.joiningDate.split(' ')[0]}   /></td>
      
    </tr>
    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] border-black overflow-ellipsis rounded-tl-md'><span>Attendance</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black'>
        <button type='button' className='text-green-500 text-lg' onClick={()=>setShowCalendar(!showCalendar)}><FaCalendarCheck /></button>
        <div className={`${showCalendar?"":"hidden"}`}>
        <Calendar value={attendence} month={month} onChange={()=>setAttendence(attendence)}  onMonthChange={setMonth} allowMultiSelection disabledDays={null}/></div></td>
      
    </tr>

    <tr className='rounded-tl-md'>
      <td className='  px-3 py-1 border-[1px] text-green-600 border-black overflow-ellipsis rounded-tl-md'><span>Sponsored By</span> </td>
      <td className=' px-3 py-1 border-[1px] border-black '><input name='sponseredByName' disabled={!edit} className='text-green-600 w-fit' type="text"
      placeholder="NA"
       value={details?.sponseredByName || details.sponseredBy?.name }  onChange={(e)=>setDetails(det=>({...det, sponseredByName:e.target.value}))} /></td>
      
    </tr>
    
  </tbody>
</table>}
  </form>
            
        </div>
    )
}

export default BasicInfo