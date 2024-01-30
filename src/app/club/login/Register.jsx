'use client'
import { useState } from "react";
import { id } from "date-fns/locale";
import { register } from "./serverActions";
import toast, { Toaster } from 'react-hot-toast';

const RegisterModal = ({ isOpen, onClose }) => {

  const [loading, setLoading] = useState(false);
  async function Register(data){
    setLoading(true);
    const toastId = toast("Registering...");
    const res = await register(data);
    if(res){
      toast.success("Thank you for Registering, Our team will Contact you soon!", {id:toastId});
      setTimeout(()=>onClose(), 2000);
      setLoading(false);
    }
    else{
      toast.error("Some Error Occurred", {id:toastId});
    }
    // console.log(res)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-[92%] ml-4 mr-4 md:w-full h-full flex items-center  justify-center md:mx-0 ${
        isOpen ? 'visible opacity-100 z-10 backdrop-blur-sm' : 'invisible opacity-0 '
      } transition duration-300 ease-linear`}
    >
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form action={Register} >
        <div className="mb-4">
            <label htmlFor="Name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              className="mt-1 p-2 w-full border-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 p-2 w-full border-2 rounded-md"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[6789][0-9]{9}"
              title="Please enter valid phone number"
              className="mt-1 p-2 w-full border-2 rounded-md"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="bg-[#7AC143] text-white px-4 py-2 rounded" >
            {loading?"Registering...":"Register"}
          </button>
          <Toaster/>
          <button  onClick={onClose} className="bg-[whitesmoke] border-2 ml-3 text-black px-4 py-2 rounded">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
