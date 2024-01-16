import React ,  {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const PreviewNavBar = () => {
    const urlRef = useRef(null);
    const nav = useNavigate()
    const backToEdit = () => {
        nav('/')
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(urlRef.current.value);
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'The link has been copied to the clipboard',
            showConfirmButton: false,
            timer: 2000
        }) 
    }
    
  return (
    <div className='z-10 absolute top-8 left-0 right-0 w-[90%] mx-auto bg-white rounded-lg px-6 py-4 hidden sm:flex justify-between items-center'>
        <button className='border border-solid border-[#633cff] text-[#633cff] rounded-lg py-2 px-6 font-semibold hover:bg-[#633cff] hover:text-white flex justify-between items-center gap-3' onClick={() => backToEdit()} >
           Back to editor
        </button>
        <button className='border border-solid border-[#633cff] text-white bg-[#633cff] rounded-lg py-2 px-6 font-semibold hover:bg-white hover:text-[#633cff] flex justify-between items-center gap-3' onClick={copyToClipboard} >
           Share link
        </button>
        <input
            className='hidden'
            type="text"
            value={window.location.href}
            readOnly
            ref={urlRef}
        />
    </div>
  )
}

export default PreviewNavBar