import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
const Profile = () => {
  return (
    <div className="col-span-5 lg:col-span-3 bg-white min-h-screen rounded-lg py-14 px-8">
        <h1 className='text-3xl font-bold'>Profile Details</h1>
        <p className='text-[#737373] mt-4'>Add your details to create a personal touch to your profile.</p>
        <div className='w-full h-auto sm:h-[200px] rounded-lg bg-[#fafafa] py-5 px-4 my-6 flex items-start justify-between sm:items-center flex-col sm:flex-row gap-2 '>
            <p className='w-full sm:w-[30%] text-[#737373]'>Profile picture</p>
            <div className='w-[90%] sm:w-[300px] py-5 h-full text-[#633cff] bg-[#633cff] bg-opacity-10 flex justify-center items-center flex-col gap-6 rounded-lg'>
            <GrGallery className='text-2xl font-bold'/>
                <button className='flex justify-center items-center gap-3 font-semibold'> <IoMdAdd className='font-bold' /> Upload Image</button>
            </div>
            <p className='text-[#737373] text-sm'>Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>
        <div className='w-full  rounded-lg bg-[#fafafa] py-5 px-4 mb-6 '>
            <div className='mb-4'>
                <p className='text-[#737373]'>First name*</p>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373]'>Last name*</p>
            </div>
            <div>
                <p className='text-[#737373]'>Email</p>
            </div>
        </div>
        <hr/>
        <div className='flex justify-end'>
            <button className={`bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold mt-4`}>
                Save
            </button>
        </div>
    </div>
  )
}

export default Profile