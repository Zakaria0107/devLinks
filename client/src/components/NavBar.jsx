import React from 'react'
import { FaLink } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
const NavBar = ({activeSection ,setActiveSection}) => {
  const nav = useNavigate()
  const handlePreviewLink = () => {
    nav('/preview')
  }
  return (
    <div className='w-full md:w-[90%] mx-auto bg-white md:rounded-lg px-6 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'> DevLinks</h1>
        <nav className='flex justify-center items-center gap-1 md:gap-3'>
            <button className={`${activeSection === 'links' ? 'text-[#633cff] bg-[#633cff] bg-opacity-10 ':'text-[#737373] hover:bg-[#633cff] hover:bg-opacity-10' } text-md rounded-lg py-2 px-6 font-semibold flex justify-between items-center gap-3`} onClick={() => setActiveSection('links')}>
            <FaLink /> <span className='hidden md:inline'>Links</span>
            </button>
            <button className={`${activeSection === 'profile' ? 'text-[#633cff] bg-[#633cff] bg-opacity-10 ':'text-[#737373] hover:bg-[#633cff] hover:bg-opacity-10' } text-md rounded-lg py-2 px-6 font-semibold  flex justify-between items-center gap-3`} onClick={() => setActiveSection('profile')}>
            <CgProfile /><span className='hidden md:inline'>Profile details</span>
            </button>
        </nav>
        <button className='border border-solid border-[#633cff] text-[#633cff] rounded-lg py-2 px-6 font-semibold hover:bg-[#633cff] hover:bg-opacity-10 flex justify-between items-center gap-3' onClick={() => handlePreviewLink()}>
        <MdOutlineRemoveRedEye className='block md:hidden' />
           <span className='hidden md:inline'>Preview</span>
        </button>
    </div>
  )
}

export default NavBar