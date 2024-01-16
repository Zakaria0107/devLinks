import React from 'react'
import { FaLink } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
const PreviewNavBar = () => {
    const nav = useNavigate()
    const handlePreviewLink = () => {
        nav('/preview')
    }
  return (
    <div className='z-10 absolute top-8 left-0 right-0 w-[90%] mx-auto bg-white rounded-lg px-6 py-4 hidden sm:flex justify-between items-center'>
        <button className='border border-solid border-[#633cff] text-[#633cff] rounded-lg py-2 px-6 font-semibold hover:bg-[#633cff] hover:text-white flex justify-between items-center gap-3' >
           Back to editor
        </button>
        <button className='border border-solid border-[#633cff] text-white bg-[#633cff] rounded-lg py-2 px-6 font-semibold hover:bg-white hover:text-[#633cff] flex justify-between items-center gap-3' >
           Share link
        </button>
    </div>
  )
}

export default PreviewNavBar