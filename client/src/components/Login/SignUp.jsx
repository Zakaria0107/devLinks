import React, {useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const SignUp = ({switchComponent , setSwitch}) => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [passwordRep , setPasswordRep] = useState("")

    const signUp = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/user/signUp` , {
            email, 
            password, 
            passwordRep 
        })
        .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "",
                showConfirmButton: false,
                timer: 1500
              })
            setSwitch(!switchComponent)
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
    <div className='shadow-xl w-[98%] sm:w-[476px] rounded-xl py-8 sm:py-12 px-4 sm:px-10 bg-white '>
            <h1 className='text-3xl font-bold'>Create account</h1>
            <p className='text-[#737373] mt-4'>Let's get you started sharing your links!</p>
            <div className='mb-4 mt-8'>
                <p className='text-[#737373] text-sm mb-2'>Email address</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='e.g.alex@email.com' value={email} onChange={(e) => setEmail(e.target.value)}   />
                </div>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373] text-sm mb-2'>Create password</p>
                <div className='relative' >
                    <input type='password' className="input"  placeholder='Enter a password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373] text-sm mb-2'>Comfirm password</p>
                <div className='relative' >
                    <input type='password' className="input"  placeholder='Confirm password'  value={passwordRep} onChange={(e) => setPasswordRep(e.target.value)}/>
                </div>
            </div>
            <button className={`w-full bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold `} onClick={() => signUp()}>
                Create account
            </button>
            <p className='text-[#737373] mt-4 text-center'>Already have an account ? <button className='text-[#633cff] hover:underline' onClick={() => setSwitch(!switchComponent)}>Login</button></p>
        </div>
  )
}

export default SignUp