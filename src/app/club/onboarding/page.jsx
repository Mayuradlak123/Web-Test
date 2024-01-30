"use client"
import React,{useState} from 'react'
import { registerClientManual } from '@/serverActions';
import Cookies from 'js-cookie';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {

    // const [image, setImage] = useState()
    const params = useSearchParams()
    const coachId = params.get('id');
    const router = useRouter();
    const [imageURL, setImageURL] = useState("/avatar.webp")

    const handleFile = (event)=>{
        if(event.target.files && event.target.files[0]) {
            if(event.target.files[0].size > 2097152){
                toast.error("Image size should be less than 2MB");
                return;
            }
          setImageURL(URL.createObjectURL(event.target.files[0]));
          
        }    
      }

    async function clientRegister(data){
        
        
        const toastId = toast.loading("Saving...")
        const toastId2 = toast.loading("Saving...", {position:'bottom-center'})
        const res = await registerClientManual(data, '', "form", coachId);
        toast.remove(toastId);
        toast.remove(toastId2);
        // console.log(res)
        if(res.status){
            toast.success("Details Added Successfully", {duration:5000});
            toast.success("Details Added Successfully", {duration:5000, position:'bottom-center'});
            setTimeout(()=>router.back(), 2000);
        }
        else{
            toast.error(res.message || res.error, {position:'bottom-center'});
        }
        // console.log(res)
        
        

    }


  return (
    <div className=' flex bg-login-image h-fit rounded-none bg-center bg-cover items-center justify-center text-[whitesmoke] '>
    
        <div className="backdrop-brightness-50  h-fit w-full p-10 md:px-20">
            <img src="/Mask group  white.png" className='h-20 mb-20' alt="" />

            {/* <div className=' mr-auto font-semibold md:text-left mb-12 md:mb-1 text-center'>
                Coach : Simar Preet Singh
                </div> */}
            <div className="flex justify-center items-center">                
                <div className='text-2xl md:text-4xl  font-bold tracking-wide text-center flex justify-center'>Onboarding Form</div>
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
                    <label htmlFor="name" className='font-semibold text-sm'>Client Name</label><br />
                    <input type="text" 
                    required className='outline-none w-full text-black rounded-md p-1.5' name="name" id="name" placeholder='Please Enter Your Name'/>
                </div>                
                <div className="md:w-2/5  px-3 my-8 md:my-0">
                    <label htmlFor="mobileNumber" className='font-semibold text-sm'>Phone Number</label><br />
                    <input type="tel" pattern="[6789][0-9]{9}" title="Please enter valid phone number" required className='outline-none w-full text-black rounded-md p-1.5' name="mobileNumber" id="mobileNumber" placeholder='Please Enter Your Phone Number'/>
                </div>
            </div>
             {/* code for client name and phone  ends*/}

            {/* code for next row of inputs  */}
             <div className="md:flex  gap-4 my-8">
                <div className="md:w-3/5 flex gap-4 px-3 ">
                    <div className="w-1/2">
                    <label htmlFor="City" className='font-semibold text-sm'>City</label><br />
                    <input type="text" required className='outline-none w-full text-black rounded-md p-1.5' name="city" id="City" placeholder=''/>
                    </div>
                    <div className="w-1/2">
                    <label htmlFor="Email" className='font-semibold text-sm'>Email</label><br />
                    <input type="email"  className='outline-none w-full text-black rounded-md p-1.5' name="email" id="Email" placeholder=''/>
                    </div>
                </div>                
                <div className="md:w-2/5  px-3 md:my-0 my-8">
                    <label htmlFor="joiningDate" className='font-semibold text-sm'>Joining Date</label><br />
                    <input type="date" required className='outline-none w-full text-black rounded-md p-1.5' name="joiningDate" id="joiningDate" placeholder=''/>
                </div>
            </div>
            {/* code for next row of inputs ends */}

            <div className="md:w-3/5 flex gap-4 px-3 ">
                    <div className="w-1/2">
                    <label htmlFor="sponseredByName" className='font-semibold text-sm'>Sponsored By</label><br />
                    <input type="text" className='outline-none w-full text-black rounded-md p-1.5' name="sponseredByName" id="sponseredByName" placeholder=''/>
                    </div>

                    {/* below is the empty div to balance the alignment with top input box margins */}
                    <div className="w-1/2"></div>
            </div>

            {/* code for submit button  */}
            <div className='flex justify-center w-full'><button type='submit' className='rounded-xl mt-16 px-4 py-2 font-bold text-xl w-80 text-black bg-[whitesmoke]'>Submit</button><Toaster/></div>
            {/* code for submit button  ends*/}

        </div>

    </form>
        </div>
    
     </div>
  )
}

export default Page