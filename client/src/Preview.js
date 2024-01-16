import React , {useEffect, useState} from 'react'
import PreviewNavBar from './components/PreviewNavBar'
import axios from 'axios'
import Swal from 'sweetalert2'

const Preview = () => {
    const [user , setUser] = useState({})
    const getUser = () => {
        let userId = JSON.parse(localStorage.user)._id
        let token = JSON.parse(localStorage.user).token
        axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}` , { headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }})
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: err?.response?.data?.err,
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    useEffect(() => {
        getUser()
    }, [])

  return (
    <div className='w-full min-h-full bg-[#fafafa] '>
        <PreviewNavBar/>
        <div className='hidden sm:block absolute top-0 left-0 right-0 h-[50vh] w-full bg-[#633cff]   rounded-b-3xl'>
        </div>
        <div className='absolute sm:top-48  left-1/2 -translate-x-1/2  flex justify-center items-center flex-col rounded-2xl w-[95%] h-[95%] sm:h-auto sm:w-[349px] shadow-xl bg-white py-8'>
            {user?.profileImage?.path && <img src={`http://localhost:5000/${user?.profileImage?.path}`} alt='avatar' className='w-[96px] h-[96px] rounded-full border-4 border-solid border-[#633CFF]' />}
            {!user?.profileImage?.path && <img src="/images/placeholder-image.png" alt='avatar' className='w-[96px] h-[96px] rounded-full border-4 border-solid border-[#633CFF]' />}
            <h3 className='text-lg font-semibold text-[#333] w-[80%] text-center bg-white mt-4 '>{user.firstName} {user.lastName}</h3>
            <p className='text-[#333] text-sm text-center w-[80%] bg-white '>{user.email}</p>
            <div className='w-[80%] sm:w-[237px] flex flex-col gap-4 mt-8 ' >  
                {
                    user.listLinks && user.listLinks.map(elt => {
                        const platformIcon = elt.platform.toLowerCase().replace(' ', '').replace('.', '')
                        return (
                            <div className={`${platformIcon} text-white flex  justify-between items-center rounded-lg h-[46px] px-[16px] border-1 border-solid border-[#D9D9D9]`}>
                                <div className='flex gap-2 items-center'>
                                    <img src={`/icons/select-icons/icon-${platformIcon}.svg`} />
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

export default Preview