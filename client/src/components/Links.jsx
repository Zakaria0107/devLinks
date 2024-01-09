import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { LuEqual } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";

const Links = ({listLinks , setListlink}) => {

  const [openLinks, setOpenLinks] = useState({})
  const [selectedPlatform , setSelectedPlatform] = useState('')
  const platforms = [
    "Github",
    "Frontend Mentor",
    "Twitter",
    "LinkedIn",
    "YouTube",
    "Facebook",
    "Twitch",
    "Dev.to",
    "Codewars",
    "Codepen",
    "freeCodeCamp",
    "GitLab",
    "Hashnode",
    "Stack Overflow"
  ]

  const save = () => {
    console.log(listLinks)
  }

  const selectPlatform = (elt , index) => {
    const newList = listLinks.map(element => {
      if(element.id != index)
        return {...element}
      else 
        return {...element , platform : elt}
    })
    setListlink(newList)
    setOpenLinks({})
  }
  const setLink = (e , index) => {
    const newList = listLinks.map(element => {
      if(element.id != index)
        return {...element}
      else 
        return {...element , link : e.target.value}
    })
    setListlink(newList)
  }

   const  removeLink = (id) => {
    let newList = listLinks.filter(elt => elt.id !== id)
    setListlink(newList)
   }

   const addLink = () => {
    const added = {id : listLinks.length + 1 , platform : "" , link : ""}
    setListlink([...listLinks  ,added])
  }
  const toggleDropdown = (id) => {
    setOpenLinks((prevOpenLinks) => ({
      ...prevOpenLinks,
      [id]: !prevOpenLinks[id],
    }));
  };



  return (
    <div className="col-span-5 lg:col-span-3 bg-white min-h-screen rounded-lg py-14 px-8">
        <h1 className='text-3xl font-bold'>Customize your links</h1>
        <p className='text-[#737373] mt-4'>Add/edit/remove links below and then share all your profiles with the world</p>
        <button className='w-full border border-solid border-[#633cff] rounded-md py-2 flex justify-center items-center gap-3 font-bold text-[#633cff] hover:bg-[#633cff] hover:bg-opacity-10  mt-9' onClick={() => addLink()}> <IoMdAdd /> Add new link</button>
        {listLinks.map((elt , index) => 
                <div className='w-full rounded-lg bg-[#fafafa] py-5 px-4 my-6 '>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-lg text-[#737373] font-bold capitalize flex justify-center items-center'> <LuEqual /> Link #{index + 1}</h2>
                        <button className='hover:text-[#633cff] text-[#737373]' onClick={() => removeLink(elt.id)}>Remove</button>
                    </div>
                    <div className='mb-4 relative'>
                      <p className='text-[#737373] text-sm mb-2'>Platform</p>
                      <div className='relative' >
                        <input type='text' className="input cursor-pointer" value={elt.platform} placeholder='Select platform' readOnly onClick={() => toggleDropdown(elt.id)} />
                        <FaChevronDown className={`${openLinks[elt.id] && "rotate-180"} absolute right-4 top-[50%] translate-y-[-50%] text-[#633cff] transition-all duration-300 ease-in-out `} />
                      </div>
                      {openLinks[elt.id] && <div className=' z-10 absolute mt-3 max-h-60 w-full flex flex-col bg-white rounded-lg px-4 overflow-y-scroll shadow' >
                        {
                          platforms.map((elt1 , index) =>{ 
                            const platformIcon = elt1.toLowerCase().replace(' ', '').replace('.', '')
                            return( 
                            <button className='w-full border-b border-solid text-[#333] hover:text-[#633cff] text-left py-4 flex justify-start items-center gap-3' onClick={() => selectPlatform(elt1 , elt.id)}>
                                <img src={`/icons/select-icons/icon-${platformIcon}.svg`}  />
                                {elt1}
                              </button>)
                          })
                        }
                        </div>}
                    </div>
                    <div className=''>
                      <p className='text-[#737373] text-sm mb-2'>Link</p>
                      <input type='text' className="input" placeholder='e.g.email@exemple.com' value={elt.link} onChange={(event) => setLink(event, elt.id)}/>
                    </div>
                </div>
            )}
            
        <hr/>
        <div className='flex justify-end'>
            <button className={`bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold mt-4`} onClick={save}>
                Save
            </button>
        </div>
    </div> 
  )
}

export default Links