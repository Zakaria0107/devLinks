import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { LuEqual } from "react-icons/lu";
const Links = ({listLinks , setListlink}) => {

   const  removeLink = (id) => {
    let newList = listLinks.filter(elt => elt.id !== id)
    setListlink(newList)
   }

   const addLink = () => {
    const added = {id : listLinks.length + 1 , platform : "" , link : ""}
    setListlink([...listLinks  ,added])
  }
  return (
    <div className="col-span-5 lg:col-span-3 bg-white min-h-screen rounded-lg py-14 px-8">
        <h1 className='text-3xl font-bold'>Customize your links</h1>
        <p className='text-[#737373] mt-4'>Add/edit/remove links below and then share all your profiles with the world</p>
        <button className='w-full border border-solid border-[#633cff] rounded-md py-2 flex justify-center items-center gap-3 font-bold text-[#633cff] hover:bg-[#633cff] hover:bg-opacity-10  mt-9' onClick={() => addLink()}> <IoMdAdd /> Add new link</button>
        {listLinks.map((elt , index) => 
                <div className='w-full rounded-lg bg-[#fafafa] py-5 px-4 my-6 '>
                    <div className='flex justify-between items-center '>
                        <h2 className='text-lg text-[#737373] font-bold capitalize flex justify-center items-center'> <LuEqual /> Link #{index + 1}</h2>
                        <button className='hover:text-[#633cff] text-[#737373]' onClick={() => removeLink(elt.id)}>Remove</button>
                    </div>
                </div>
            )}
            
        <hr/>
        <div className='flex justify-end'>
            <button className={`bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold mt-4`}>
                Save
            </button>
        </div>
    </div> 
  )
}

export default Links