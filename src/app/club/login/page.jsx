"use client"
import React,{useEffect, useState} from 'react'
import { login } from './serverActions'
import RegisterModal from './Register'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter()

    useEffect(()=>{
        const authToken = Cookies.get('refreshToken')
        const data = fetch('https://api.wellnessz.in/api/isClubCoach',
        {method: 'GET',        
      headers: {
          'authorization': `Bearer ${authToken}`,
        },
    })
    .then((response) => response.json())
    .then((res)=>{
        if(res.status){
            router.replace('/club/clubdashboard');
        }
    })

    
    }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function Login(data){
    const isRemember = data.get('checkbox')==='on';
    // console.log(isRemember)
    const toastId = toast.loading("Validating...")
    const res = await login(data);
    // console.log(res)
    // console.log(res.data)
    if(res.status) {
        toast.remove(toastId);
        toast.success('Login Successfull, Redirecting to Dashboard.');
        Cookies.set("coachId", res?.data?._id, isRemember && {expires:20});
        Cookies.set("refreshToken", res?.data?.refreshToken, isRemember && {expires:20})
        router.push('/club/clubdashboard')
    } 
    else{
        toast.remove(toastId)
        toast.error(res.message);
    }
  }


  return (
    <>
    <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    {/* <div className="logo w-1/6 h-1/6"> */}
    {/* </div> */}
    <div className='md:px-12 px-4 py-12 pb-40  flex-col w-full min-h-min bg-black text-[whitesmoke]'>
    <img src="/Mask group  white.png" className='h-30 w-40' alt='logo'/>



        <h1 className='text-4xl  font-extrabold px-3 py-10 '>Club Login</h1>

        <div className="form rounded-2xl  border-dashed border-gray-200 border-2 p-2 ">
        
        <div className='bg-login-image bg-center rounded-2xl'>

        
            <div className="md:flex justify-between items-center bg-left  py-5  px-4 relative md:h-[590px] md:w-auto rounded-2xl  backdrop-brightness-50 ">

        {/* WellnessZ CLUB text designing */}
        <div className='  mt-auto md:mb-12 md:ml-20  flex-col items-baseline align-bottom  '>
            <span className=' text-2xl md:text-3xl font-bold tracking-wider'>Welcome to</span>
            <div className='text-4xl md:text-5xl mt-2 mb-5 md:my-5  text-[#7AC143] font-extrabold '>WellnessZ CLUB</div>
        </div>
        {/* WellnessZ CLUB text designing ends*/}


                <div className="form flex-col  justify-center items-center md:w-2/5">
                    <h1 className=' shadow-sm text-3xl font-extrabold'>Login To Your Account</h1>
                    <span className='flex text-sm my-4'> Please enter your details for Log in</span>

                <form action={Login}>
                    {/* div for user name  */}
                    <div className='bg-[#ECECEC] text-black p-2 rounded-lg flex '>
                    <div className='flex items-end pb-1 mr-5 ml-3'>
                        <img src="/usericon.png" alt="" />
                        </div>
                    <div className='overflow-clip px-2'>
                        <label htmlFor="email" className='text-xs px-1'>
                            Email
                        </label><br />                        
                        <input type="email" required className='font-bold bg-[#ECECEC] text-sm p-1 pt-0 outline-none  border-b-2 ' name="email" id="loginEmail" placeholder='Please enter Email' />
                        </div>
                    </div>
                    {/* div for username ends here */}

                    {/* div for password  */}
                    <div className='bg-[#ECECEC] text-black p-2 rounded-lg flex mt-5'>
                    <div className='flex items-end pb-1 mr-5 ml-3'>
                        <img src="/usericon.png" alt="" />
                        </div>

                    <div className='overflow-clip px-2'>
                        <label htmlFor="password" className='text-xs px-1'>
                        Password
                        </label><br />                        
                        <input type="password" required className='font-bold bg-[#ECECEC] text-sm p-1 pt-0 outline-none  border-b-2 ' name="password" id="password" placeholder='Please enter Password' />
                        </div>
                    </div>
                    {/* div for password ends here */}

                    {/* checkbox */}
                    <div className="flex gap-4">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className='text-sm font-bold text-[#7AC143] my-4'>Remember me</label>
                    </div>
                    {/* checkbox ends here */}

                    {/* login button  */}
                    <button type='submit' className=' login w-full text-center bg-[#7AC143]  p-2 rounded-lg flex justify-center py-4 mt-5'>Login</button>
                    <Toaster/>
                    {/* login button ends  */}
                </form>
                    {/* forgot password section begins  */}
                    <div className='flex gap-1 text-sm my-5 items-center'>
                        <span>Forgot Password?</span>
                        <Link href="/contact" className='text-[#7AC143]'>Contact Customer Support</Link>
                        <img src="/support.png" alt="" />
                        </div>
                    {/* forgot password section ends  */}

                {/* Register section begins  */}
                <div className="flex gap-1 text-sm my-5 items-center w-full justify-center mt-8">
                    <span className="text-[#7AC143]">Dont Have an Account?</span>
                    <button onClick={openModal}>Register</button>
                    </div>
                </div>

                
            </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default Page