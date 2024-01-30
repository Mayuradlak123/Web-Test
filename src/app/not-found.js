'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
  return (
    <div className="main mx-auto flex flex-col w-full items-center justify-center py-12">
      <img src="/404 Error-light.png" className=' h-[50vh] md:h-[70vh]' />
      <h1 className='w-full text-center my-4 text-2xl font-semibold'>We Couldn't find the Page you are Looking for</h1>
      <button className='mx-auto rounded-md bg-[#509613] text-white px-2 py-1' onClick={()=>router.back()}>Go back</button>
    </div>
  )
}
