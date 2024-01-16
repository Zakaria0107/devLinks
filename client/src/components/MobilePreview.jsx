import React from 'react'
import { ReactSortable } from "react-sortablejs";
import axios from 'axios';

const MobilePreview = ({user , listLinks ,setListlink}) => {
    const handleSorting = (event) => {
        const newList = [...listLinks];
        const [movedItem] = newList.splice(event.oldIndex, 1);
        newList.splice(event.newIndex, 0, movedItem);
        let userId = JSON.parse(localStorage.user)._id
        let token = JSON.parse(localStorage.user).token
        axios.post(`${process.env.REACT_APP_API_URL}/information/${userId}/updateLinks`, {listLinks : newList}  ,
        { headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }} )
        .then(res => {
        })
        .catch(err =>{
           console.log(err)
        })
    }
  return (
    <div className="hidden lg:flex justify-center items-center col-span-2 bg-white min-h-screen rounded-lg h-[834px] ">
        <div className='relative'>
            <img src="./images/illustration-phone-mockup.svg" alt='mockup' className='w-[307px] h-auto object-contain'/>
            {user?.profileImage?.path && <img src={`http://localhost:5000/${user?.profileImage?.path}`} alt='avatar' className='w-[96px] h-[96px] rounded-full absolute left-0 right-0 mx-auto top-[63.5px] border-4 border-solid border-[#633CFF]' />}
            {(user.firstName || user.lastName) && <h3 className='text-lg font-semibold text-[#333] w-[80%] text-center bg-white absolute left-0 right-0 mx-auto top-[176px]'>{user.firstName} {user.lastName}</h3>}
            {user.email && <p className='text-[#333] text-sm text-center w-[80%] bg-white absolute left-0 right-0 mx-auto top-[206px]'>{user.email}</p>}
            <div >  
            <ReactSortable list={listLinks} setList={setListlink} onEnd={handleSorting} className='w-[237px] flex flex-col gap-4 absolute top-[278px] left-0 right-0 mx-auto'>
                {
                    listLinks && listLinks.map((elt , index) => {
                        const platformIcon = elt.platform.toLowerCase().replace(' ', '').replace('.', '')
                        return (
                            <div className={`${platformIcon} cursor-grab text-white flex  justify-between items-center rounded-lg h-[46px] px-[16px] border-1 border-solid border-[#D9D9D9]`} key={index}>
                                <div className='flex gap-2 items-center'>
                                    <img src={`/icons/select-icons/icon-${platformIcon}.svg`}  alt={elt.platform}/>
                                    {elt.platform}
                                </div>
                                <img src={'/icons/icon-arrow-right.svg'}  alt={"arrow"} />
                            </div>
                        )
                    })
                }
                </ReactSortable>
                
            </div>
        </div>
       
    </div>
  )
}

export default MobilePreview