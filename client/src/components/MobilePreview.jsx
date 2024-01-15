import React , {useState} from 'react'

const MobilePreview = ({listLinks}) => {
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
            <div className='w-[237px] flex flex-col gap-4 absolute top-[278px] left-0 right-0 mx-auto'>
               <div className='bg-black text-white flex  justify-between items-center rounded-lg h-[46px] px-[16px] border-1 border-solid border-[#D9D9D9]'>
                <div className='flex gap-2 items-center'>
                    <img src={`/icons/select-icons/icon-${platforms[0]}.svg`} className='!fill-white'  />
                    github
                </div>
                <img src={'/icons/icon-arrow-right.svg'} />
               </div>
            </div>
        </div>
       
    </div>
  )
}

export default MobilePreview