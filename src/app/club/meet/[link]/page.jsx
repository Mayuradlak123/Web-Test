"use client"
import React from 'react'
import { verifyClient } from '@/serverActions';
import { useRouter } from 'next/navigation';
import toast,{Toaster} from 'react-hot-toast';
// import { useParams } from 'next/navigation'

const Page = ({params}) => {

  const {link} = params;
  const router = useRouter()

  async function joinMeeting(data){
    const rollno = data.get('roll');
    const res = await verifyClient(link, rollno);
    // console.log(res)
    if(res.status){
      router.push(res.data)
    }
    else{
      toast.error(res.message || res.error || "Something went Wrong!!")
    }
  }

  

  return (
    <>
    {/* {console.log(link)} */}
    <div className='min-h-[80vh] bg-black flex justify-center pt-4 text-[whitesmoke] '>
        <div className='md:w-[80vw]   bg-watermark bg-cover bg-top  pb-6 bg-no-repeat '>
    <img src="/Mask group  white.png" className='h-20 mb-10' alt="" />

            {/* Heading  */}
            <h1 className='font-bold text-4xl m-5 md:w-full text-center'>
                <span className='text-[#7AC143]'>WellnessZ</span>
                &nbsp;Club</h1>
                {/* heading ends here  */}

                {/* subheading */}
            <div className='text-center text-sm px-2 mt-16'>Please Enter your Allocated Roll Number given by your Coach </div>
            {/* subheading ends here  */}

            {/* code for link input design  */}
                <form action={joinMeeting} className='md:w-full w-[90vw] mx-4 flex justify-center'>
            <div className="input items-center  flex justify-center md:justify-between rounded-xl  bg-white text-black md:w-1/2 w-full  mt-4 mb-2 mx-auto">

                <div className='flex items-center'>
                <img src="/link.png" className='h-5 ml-3' alt="" />
                <input type="text" name='roll' className='p-3 rounded-xl outline-none w-auto' placeholder='Enter Your Roll No.' />
                </div>
                <button type='submit' className='bg-[#7AC143] text-[whitesmoke] rounded-xl w-32 h-auto p-3'>Join Meeting</button>
                <Toaster/>
            </div>
                </form>
            {/* code for link input ends here  */}

            

        </div>
    </div>
    </>
  )
}

export default Page