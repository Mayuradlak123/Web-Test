import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full min-h-min bottom-0 gap-8 px-2 py-6 md:px-32 md:py-16 bg-white text-[#272727] flex md:justify-between '>
        <div className='h-auto flex-col  gap-4 justify-center w-44'>
            <div className=' mb-6 flex justify-center'>
            <img src="/Icon wb 5.png" className='h-24' alt="" />
            </div>
            <span className='font-semibold text-sm tracking-wide'>Mohi Lifestile Solutions Private Limited</span>
        </div>

        <div>
            <div className='flex justify-between md:gap-14 gap-4'>
            <div className='flex-col justify-center text-sm'>
                <div className='flex justify-center mb-6 font-bold'>Company</div>
                <Link href={"/about"}><div className='flex justify-center'>About us</div></Link>
            </div>
            <div className='flex-col  md:justify-center text-sm'>
                <Link href="/privacy-policy" className=' mb-4 md:mb-6 flex md:justify-center font-bold'>Privacy Policy </Link>
                <Link href={"/contact"}><div className='flex justify-center'>Terms & Conditions</div></Link>
            </div>
            <div className='flex-col justify-center text-sm'>
                <div className='flex justify-center mb-6 font-bold'>Resources</div>
                <Link href={"/blogs"}><div className='flex justify-center'>Blog</div></Link>
            </div>
            </div>

            <div className='social media flex justify-center md:justify-normal mt-8 md:mt-24 gap-8'>
                <Link href="https://www.linkedin.com/company/wellnessz/"><img src="/linkedin.png" alt="" /></Link>
                <Link href="https://www.facebook.com/profile.php?id=61553253021745&mibextid=ZbWKwL/"><img src="/facebook.png" alt="" /></Link>
                <Link href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ=="><img src="/instagram.png" alt="" /></Link>
                {/* <Link href=""><img src="/twitter.png" alt="" /></Link> */}
            </div>
        </div>
    </div>
  )
}

export default Footer