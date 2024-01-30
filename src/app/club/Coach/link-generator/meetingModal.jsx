"use client"
import React,{useState} from 'react';
import { generateLink } from './serverActions';
import Cookies from 'js-cookie';
import toast, {Toaster} from 'react-hot-toast';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


const ScheduleMeeting = ({isOpen, onClose, baseLink, setConvertedLink, isChecked, onParentClose})=>{
  async function scheduleMeeting(data){
    const payload = {
        schedulueDate:data.get('date').split("-").reverse().join("-")+" "+data.get('time')+":00",
        remarks:data.get('remarks'),
        time:data.get('time'),
        clubType:data.get('club'),
        baseLink:baseLink
    }
    // console.log("dateTime", data.get('datetime'))
    // console.log(payload)
    const refreshToken = Cookies.get('refreshToken');
    if(!refreshToken){
        return {message:"Your Session is Timed Out! Please Login Again"}
    }
    const toastId = toast.loading("Generating Link...")
    const res = await generateLink(payload, refreshToken);
    toast.remove(toastId);
    // console.log(res)
    if(res.status){
      toast.success("Link Generated Successfully!", {duration:5000});
      setConvertedLink(res?.data?.wellnessZLink);
    }
    else{
      toast.error(res.message || "Something Went Wrong!");
    }
    if(isChecked){
    navigator.clipboard.writeText(res?.data?.wellnessZLink)
    toast("Copied to Clipboard Successfully!");
    }
    onClose()
    onParentClose()
}
  return (
    <div
      className={`relative inset-0 overflow-y-auto w-[80vw] md:w-auto transition-opacity ${
        isOpen ? 'opacity-100 visible z-30' : 'opacity-0 invisible'
      }`}
    >
    <div className="border-t-2 border-gray-300">
        <form action={scheduleMeeting}>
          <div className=" py-4 px-12 flex justify-center ">
            <h3 className="  md: px-2 py-2 rounded-md leading-6 font-semibold ">Schedule Meeting</h3>
          </div>
          <div className="px-8">
          {/* <div className="mt-2">
              <label htmlFor="date-datetime" className="block text-sm font-medium text-gray-700">
                DateTime
              </label>
              <DateTimePicker
                required
                type="date"
                id="datetime"
                format='dd-MM-y h:mm:ss a'
                name="datetime"
                onChange={onChange} value={value}
                className="mt-1 p-2 class1 class2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div> */}
            <div className="mt-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                name="date"
                
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                required
                id="time"
                name="time"
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="clubType" className="block text-sm font-medium text-gray-700">
                Club Type
              </label>
              <select name="club" id="clubType" className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" required>
                <option value="Morning" >Morning Club</option>
                <option value="Training">Training Club</option>
                <option value="Evening">Evening Club</option>
                <option value="Other">Other</option>
              </select>
              {/* <input
                type="text"
                required
                id="clubType"
                name="club"
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              /> */}
            </div>
            <div className="mt-4">
              <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
                Remarks
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows="3"
                className="mt-1 p-2 w-full border-green-600 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button              
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#7AC143] text-base leading-6 font-medium text-white hover:bg-green-500 focus:outline-none focus:border-[#7AC143] focus:shadow-outline-green transition ease-in-out sm:ml-3 sm:w-auto sm:text-sm"
            >
              Schedule
            </button>
            {/* <Toaster/> */}
            <button
              onClick={()=>{onClose()}}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
          </form>
          </div>
          </div>
  )
}


const MeetingModal = ({ isOpen, onClose, baseLink, setConvertedLink, isChecked }) => {

  const [value, onChange] = useState(new Date());
  const [isScheduleOpen, setIsScheduleOpen] = useState()
  // console.log(Date.now())
    // console.log(baseLink)

    const closeSchedule = ()=>{setIsScheduleOpen(false)}
    const openSchedule = ()=>{setIsScheduleOpen(true)}
    

    async function instantMeeting(){
      var today = new Date();
      let hrs = today.getHours(); // => 9
      let min = today.getMinutes(); // =>  30
      let sec = today.getSeconds();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy + " "+hrs+ ":"+min+ ":"+sec;
    // console.log(today)
        const payload={
            baseLink,
            schedulueDate:today
        }
        const refreshToken = Cookies.get('refreshToken');
        if(!refreshToken){
            return {message:"Your Session is Timed Out! Please Login Again"}
        }
        const toastId = toast.loading("Generating Link...")
        const res = await generateLink(payload, refreshToken);
        toast.remove(toastId);
        // console.log(res)
        if(res.status){
          toast.success("Link Generated Successfully!", {duration:5000});
          setConvertedLink(res.data.wellnessZLink);
        }
        else{
          toast.error(res.message || "Something Went Wrong!");
        }
        onClose()
    }


  return (
    <div
      className={`fixed inset-0 overflow-y-auto transition-opacity ${
        isOpen ? 'opacity-100 visible z-10' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex w-full mx-auto items-center justify-center min-h-screen p-4 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg md:w-[30%] overflow-hidden text-black transform transition-all sm:max-w-lg sm:w-full">
          


               {isScheduleOpen ? <ScheduleMeeting isOpen={isScheduleOpen} onClose={closeSchedule}
               baseLink={baseLink}
               isChecked={isChecked}
               onParentClose={onClose}
               setConvertedLink={setConvertedLink}/>:
               <>
               <div className="containier w-[80vw] md:w-auto">
                <button className='ml-auto flex mr-4 mt-1 text-red-600 font-bold' onClick={onClose}>X</button>
               <div className='w-full  text-center font-bold text-lg mb-4 mt-2'>Meeting</div>
        <div className='flex  justify-between items-center px-4 py-4 mb-4'>
        <button onClick={()=>instantMeeting()} className='bg-[#7AC143] rounded-md p-2   flex  font-semibold text-white'>Quick Meeting</button>
        <button className='bg-[#7AC143] rounded-md p-2   flex  font-semibold text-white' onClick={openSchedule}>Schedule Meeting</button>
        </div>
        </div>
        </>
      }
        </div>
      </div>
    </div>
  );
};

export default MeetingModal;
