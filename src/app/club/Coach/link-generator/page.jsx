"use client";
import React, { useEffect, useState } from "react";
import MeetingModal from "./meetingModal";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [baseLink, setBaseLink] = useState("")
  const [convertedLink, setConvertedLink] = useState("Your converted Link will Apear Here")
  const router = useRouter();

  useEffect(()=>{
    const token = Cookies.get('refreshToken')
        const data = fetch('https://api.wellnessz.in/api/isClubCoach',
        {method: 'GET',        
      headers: {
          'authorization': `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((res)=>{
        if(!(res.status)){
            router.replace('/club/login');
        }
    })
  }, [])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="min-h-[90vh] pb-36 w-full bg-black flex justify-center  pt-4 text-[whitesmoke] ">
    <div>
    

    <MeetingModal isOpen={isModalOpen} 
                  onClose={closeModal} 
                  isChecked={isChecked}
                  baseLink={baseLink} 
                  setConvertedLink={setConvertedLink}/>
  </div>
      <div className="md:w-[80vw]  w-full px-4 md:px-14 bg-watermark bg-cover bg-top  pb-6 bg-no-repeat ">
    <img src="/Mask group  white.png" className='h-20 mb-10' alt="" />
        {/* Heading  */}
        <h1 className="font-bold text-4xl m-5 md:w-full text-center">
          <span className="text-[#7AC143]">WellnessZ</span>
          &nbsp;Link Generator
        </h1>
        {/* heading ends here  */}

        {/* subheading */}
        <div className="text-center text-sm md:px-2">
          Say goodbye to looong, complicated links and Say hello to custom
          WellnessZ integerated meeting links{" "}
        </div>
        {/* subheading ends here  */}

        {/* code for link input design  */}
        <div className="input items-center flex justify-between rounded-xl  bg-white text-black w-[80vw] md:w-1/2 mt-20 mb-2  mx-auto">
          <div className="flex items-center w-2/3 text-xs md:text-base">
            <img src="/link.png" className="h-5 md:ml-3 ml-1" alt="" />
            <input
              type="text"
              
              onChange={(e)=>{setBaseLink(e.target.value)}}
              className="p-3 rounded-xl outline-none w-auto"
              placeholder="Type or Paste your Link Here"
            />
          </div>
          <button onClick={openModal} className="bg-[#7AC143] text-[whitesmoke] rounded-xl w-32 h-auto p-3">
            Convert
          </button>
        </div>
        {/* code for link input ends here  */}

        {/* Code for Radio button begins here */}
        <div className=" md:w-full flex justify-center mb-20">
          <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              name="autoSaver"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`slider mr-3 flex h-[18px] w-[32px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#7AC143]" : "bg-[whitesmoke]"
              }`}
            >
              <span
                className={`dot h-[13px] w-[13px] rounded-full bg-[#FBBC05] duration-200 ${
                  isChecked ? "translate-x-3" : ""
                }`}
              ></span>
            </span>
            <span className="label flex items-center  text-sm">
              Auto Paste from Clipboard{" "}
              <span className="pl-1"> {isChecked ? "On" : "Off"} </span>
            </span>
          </label>
        </div>
        {/* Code for radio button Ends here  */}

        {/* code for copy text box  */}
        <div className="meetlink  md:w-4/5 mx-auto text-gray-500 flex justify-between rounded-2xl bg-white font-400 ">
          <div className="p-4 w-1/2 overflow-hidden">
            {convertedLink}
          </div>
          <button className="bg-[#FBBC05] text-[whitesmoke] rounded-xl w-fit md:px-8 flex justify-center items-center h-auto p-3" onClick={() =>{navigator.clipboard.writeText(convertedLink); toast("Link Copied to Clipboard!")}}>
            <img src="/copy.png" className="h-6" alt="" /> Copy
          </button>
          <Toaster/>
        </div>
        {/* code for copy ends here  */}

        <div className="backbutton flex justify-center">
        <button onClick={()=>router.back()} className="bg-[#7AC143] mt-12 mx-auto  text-[whitesmoke] rounded-md px-5  h-auto p-1">
            Back
          </button>
          </div>
      </div>
      
    </div>
    </>
  );
};

export default Page;
