"use client"
import React, { useState } from 'react'
import { registerClientManual } from '@/serverActions';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {

    const [image, setImage] = useState()
    const [imageURL, setImageURL] = useState("/avatar.webp")
    const router = useRouter()

    const handleFile = (event)=>{
        if(event.target.files && event.target.files[0]) {
            if(event.target.files[0].size > 2097152){
                toast.error("Image size should be less than 2MB");
                return;
            }
          setImageURL(URL.createObjectURL(event.target.files[0]));
          setImage(event.target.files[0]);
        }    
      }

    async function clientRegister(data){
        // console.log(image);
        // data.append('file', image)
        // console.log(data)
        // console.log(data.get('file'))
        
        const refreshToken = Cookies.get('refreshToken');
        if(refreshToken){
            const toastId = toast.loading("Adding Client")
            const res = await registerClientManual(data, refreshToken, "manual");
            console.log("Data : ",res)
            toast.remove(toastId);
            if(res.status){
                toast.success("Client Added Successfully", {duration:5000});
                setTimeout(()=>router.back(), 2000);
                
            }
            else{
                // console.log(res)
                toast.error(res.message || res.error);
            }
        // console.log(res)
        }
        else{
            toast.error("Authentication token Did not Match, Please Login Again!")
            return;
        }
        

    }

 
  return (
    <div className=' flex h-fit rounded-none  items-center justify-center bg-white text-black '>
    
        <div className="  h-fit w-full p-10 md:px-20">
            <img src="/Icon wb 5.png" className='h-20 mb-20' alt="" />

            {/* <div className=' mr-auto font-semibold md:text-left mb-12 md:mb-1 text-center'>
                Coach : <span className='text-[#7AC143]'> Simar Preet Singh </span>
                </div> */}
            <div className="flex justify-center items-center">                
                <div className='text-2xl md:text-4xl  font-bold tracking-wide text-center flex justify-center'>Add New Client</div>
            </div>
            <form action={clientRegister}>
            {/* upload pic  */}
            <div className="w-full  justify-center">
                <div className='mx-auto md:mx-0 w-fit'>
            <div className="rounded-full flex items-center  overflow-hidden justify-center h-32 w-32 md:h-36 md:w-36 mt-10 md:mt-20 md:ml-12 bg-gray-700">
                <img src={imageURL} className="h-full w-full object-fill " alt="" />
            </div>
            <input type="file" accept='image/*' name="file" id="photo" hidden onChange={(e)=>handleFile(e)}/>
                <button type='button' className='p-1 px-4 mb-10 text-xs w-fit font-semibold -translate-y-3 md:ml-12 translate-x-4 md:translate-x-6 text-black rounded-md text-center bg-[#7AC143]' onClick={()=>document.getElementById('photo').click()}>Upload Pic</button>
                </div>
                </div>
            {/* upload pic ends */}
    
            
    
        <div className=" md:p-12 w-full h-full">

            {/* code for client name and phone  */}
            <div className=" md:flex  gap-4">
                <div className="md:w-3/5  px-3 ">
                    <label htmlFor="clientname" className='font-semibold text-[#7AC143] text-sm'>Client Name</label><br />
                    <input type="text" 
                    required className='outline-none border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="name" id="clientname" placeholder=''/>
                </div>                
                <div className="md:w-2/5  px-3 my-8 md:my-0">
                    <label htmlFor="mobileNumber" className='font-semibold  text-[#7AC143] text-sm'>Phone Number</label><br />
                    <input type="tel" required pattern="[6789][0-9]{9}" title="Please enter valid phone number" className='outline-none  border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="mobileNumber" id="mobileNumber" placeholder=''/>
                </div>
            </div>
             {/* code for client name and phone  ends*/}

            {/* code for next row of inputs  */}
             <div className="md:flex  gap-4 my-8">
                <div className="md:w-3/5 flex gap-4 px-3 ">
                    <div className="w-1/2">
                    <label htmlFor="City" className='font-semibold  text-[#7AC143] text-sm'>City</label><br />
                    <input type="text" required className='outline-none  border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="city" id="City" placeholder=''/>
                    </div>
                    <div className="w-1/2">
                    <label htmlFor="Email" className='font-semibold  text-[#7AC143] text-sm'>Email</label><br />
                    <input type="email"  className='outline-none  border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="email" id="Email" placeholder=''/>
                    </div>
                </div>                
                <div className="md:w-2/5  px-3 md:my-0 my-8">
                    <label htmlFor="joiningDate" className='font-semibold  text-[#7AC143] text-sm'>Joining Date</label><br />
                    <input type="date" required className='outline-none  border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="joiningDate" id="joiningDate" placeholder=''/>
                </div>
            </div>
            {/* code for next row of inputs ends */}

            <div className="md:w-3/5 flex gap-4 px-3 ">
                    <div className="w-1/2">
                    <label htmlFor="sponseredByName" className='font-semibold  text-[#7AC143] text-sm'>Sponsored By</label><br />
                    <input type="text" className='outline-none  border-2 border-gray-300 w-full text-black rounded-md p-1.5' name="sponseredByName" id="sponseredByName" placeholder=''/>
                    </div>

                    {/* below is the empty div to balance the alignment with top input box margins */}
                    <div className="w-1/2"></div>
            </div>

            {/* code for submit button  */}
            <div className='flex justify-center w-full'><button type='submit' className='rounded-xl mt-16 px-4 py-2 font-bold text-xl w-80 text-white bg-[#7AC143] '>Save</button><Toaster/></div>
            {/* code for submit button  ends*/}

        </div>

    </form>
        </div>
    
     </div>
  )
}

export default Page