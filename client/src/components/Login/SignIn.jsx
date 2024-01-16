import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const SignIn = ({switchComponent , setSwitch}) => {
    const nav = useNavigate()
    const [email , setEmail ] = useState("")
    const [password , setPassword] = useState("")
 
    const signIn = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/user/signIn`, {
            email : email , 
            password : password
        })
        .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "",
                showConfirmButton: false,
                timer: 1500
              });
            localStorage.setItem("user" ,JSON.stringify({...res.data}))
            nav('/')
        })
        .catch(err => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: err.response.data.err,
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
  return (
    <div className='shadow-xl w-[98%] sm:w-[476px]  rounded-xl py-8 sm:py-12 px-4 sm:px-10 bg-white '>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-[#737373] mt-4'>Add your details below to get back into the app</p>
        <div className='mb-6 mt-8'>
            <p className='text-[#737373] text-sm mb-2'>Email address</p>
            <div className='relative' >
                <input type='text' className="input"  placeholder='e.g.alex@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='mb-4'>
            <p className='text-[#737373] text-sm mb-2'>Password</p>
            <div className='relative' >
                <input type='password' className="input"  placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}  />
            </div>
        </div>
        <button className={`w-full bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold `} onClick={signIn}>
            Login
        </button>
        <p className='text-[#737373] mt-4 text-center'>Don't have an account ? <button className='text-[#633cff] hover:underline' onClick={() => setSwitch(!switchComponent)}>Create account</button></p>
    </div>
  )
}

export default SignIn