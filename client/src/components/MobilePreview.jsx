import React , {useState} from 'react'

const MobilePreview = ({user}) => {
    const [open, setOpen] = useState(false);
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
  
  return (
    <div className="hidden lg:flex justify-center items-center col-span-2 bg-white min-h-screen rounded-lg h-[834px] ">
        <div className='relative'>
            <img src="./images/illustration-phone-mockup.svg" alt='mockup' className='w-[307px] h-auto object-contain'/>
            {user?.profileImage?.path && <img src={`http://localhost:5000/${user?.profileImage?.path}`} alt='avatar' className='w-[96px] h-[96px] rounded-full absolute left-0 right-0 mx-auto top-[63.5px] border-4 border-solid border-[#633CFF]' />}
            {(user.firstName || user.lastName) && <h3 className='text-lg font-semibold text-[#333] w-[80%] text-center bg-white absolute left-0 right-0 mx-auto top-[176px]'>{user.firstName} {user.lastName}</h3>}
            {user.email && <p className='text-[#333] text-sm text-center w-[80%] bg-white absolute left-0 right-0 mx-auto top-[206px]'>{user.email}</p>}
            <div className='w-[237px] flex flex-col gap-4 absolute top-[278px] left-0 right-0 mx-auto'>  
                {
                    user.listLinks && user.listLinks.map(elt => {
                        const platformIcon = elt.platform.toLowerCase().replace(' ', '').replace('.', '')
                        return (
                            <div className='bg-black text-white flex  justify-between items-center rounded-lg h-[46px] px-[16px] border-2 border-solid border-[#D9D9D9]'>
                                <div className='flex gap-2 items-center'>
                                    <img src={`/icons/select-icons/icon-${platformIcon}.svg`} className='!fill-white'  />
                                    {elt.platform}
                                </div>
                                <img src={'/icons/icon-arrow-right.svg'} />
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
       
    </div>
  )
}

export default MobilePreview