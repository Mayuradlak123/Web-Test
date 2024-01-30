"use client"
import React,{useState} from 'react';
// import { generateLink } from './serverActions';
import { updateSubscriptionInfoClient } from '@/serverActions';
import Cookies from 'js-cookie';
import toast, {Toaster} from 'react-hot-toast';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const UpdateModal = ({ isOpen, onClose, details, id}) => {

  const [startDate, setStartDate] = useState(details?.startDate)
  const [endDate, setEndDate] = useState(details?.endDate)
  // console.log(details)
    // console.log(baseLink)
    async function subscribe(data){
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        if(startDateObj>endDateObj){
            toast.error("End date must not be greater than start date.");
            return;
        }
        
        const refreshToken = Cookies.get('refreshToken');
        if(!refreshToken){
            toast.error("Your Session is Timed Out or You have logged in on Another Device! Please Login Again!");
            return;
        }
        const toastId = toast.loading("Updating Subscription...")
        const res = await updateSubscriptionInfoClient(data, refreshToken, id);    
        toast.remove(toastId);
        // console.log(res)
        if(res.status){
          toast.success("Subscription Updated Successfully!", {duration:5000});
          
        //   setSubscriptionDetails(subscriptionDetails.push(res.data))
            // console.log(res)
        }
        else{
          toast.error(res.message || res.error || "Something Went Wrong!");
        }
        
        setTimeout(()=>location.reload(), 2000);
    }

   


  return (
    <div
      className={`fixed inset-0 overflow-y-auto  transition-opacity ${
        isOpen ? 'opacity-100 visible z-10 backdrop-blur-sm' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0  opacity-75 backdrop-blur-sm "></div>
        </div>
        <div className="bg-[whitesmoke] rounded-lg overflow-hidden text-black transform transition-all sm:max-w-lg sm:w-full">
      
        <form action={subscribe}>
        <div className='px-4 my-4 text-gray-500'>
        <div className="flex gap-3 items-center">
        <div className="mt-2  mx-auto w-1/2">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                required
                type="date"
                id="startDate"
                name="startDate"
                className="mt-1 p-2 border-green-600  w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                defaultValue={startDate}
                onChange={(e)=>{setStartDate(e.target.value)}}
              />
            </div>
            
            <div className="mt-2 w-1/2 mx-auto">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                required
                type="date"
                id="endDate"
                name="endDate"
                min={startDate}
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                defaultValue={details?.endDate}
                onChange={(e)=>setEndDate(e.target.value)}
              />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700">
                Payment Mode
              </label>
              <select name="paymentMode" id="paymentMode" className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" required>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Internet Banking">Internet Banking</option>
                <option value="Cheque">Cheque</option>
              </select>
            
            </div>
            <div className="flex gap-3 items-center">
        <div className="mt-2  mx-auto w-1/2">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                required
                type="number"
                id="amount"
                name="amount"
                defaultValue={details?.amount}
                min={0}
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <div className="mt-2 w-1/2 mx-auto">
              <label htmlFor="invoice" className="block text-sm font-medium text-gray-700">
                Invoice
              </label>
              <input
                required
                type="text"
                id="invoice"
                name="invoice"
                defaultValue={details?.invoice}
                className="mt-1 p-2 border-green-600 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button              
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#7AC143] text-base leading-6 font-medium text-white hover:bg-green-500 focus:outline-none focus:border-[#7AC143] focus:shadow-outline-green transition ease-in-out sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update
            </button>
            <Toaster/>
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
         </div>
        </form>
      
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
