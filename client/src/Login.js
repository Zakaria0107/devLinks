import React, { useState } from 'react'

const Login = () => {
    const [switchComponent , setSwitch] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[#fafafa]'>
        <h1>DevLinks</h1>
        {!switchComponent ?
         <div className='w-full sm:w-[476px]  rounded-lg py-8 sm:py-12 px-4 sm:px-10 bg-white '>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-[#737373] mt-4'>Add your details below to get back into the app</p>
            <div className='mb-6 mt-8'>
                <p className='text-[#737373] text-sm mb-2'>Email address</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='e.g.alex@email.com'  />
                </div>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373] text-sm mb-2'>Password</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='Enter your password'  />
                </div>
            </div>
            <button className={`w-full bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold `}>
                Login
            </button>
            <p className='text-[#737373] mt-4 text-center'>Don't have an account ? <button className='text-[#633cff] hover:underline' onClick={() => setSwitch(!switchComponent)}>Create account</button></p>
        </div>: 
        <div className='w-full sm:w-[476px] rounded-lg py-8 sm:py-12 px-4 sm:px-10 bg-white '>
            <h1 className='text-3xl font-bold'>Create account</h1>
            <p className='text-[#737373] mt-4'>Let's get you started sharing your links!</p>
            <div className='mb-4 mt-8'>
                <p className='text-[#737373] text-sm mb-2'>Email address</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='e.g.alex@email.com'  />
                </div>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373] text-sm mb-2'>Create password</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='Enter a password'  />
                </div>
            </div>
            <div className='mb-4'>
                <p className='text-[#737373] text-sm mb-2'>Comfirm password</p>
                <div className='relative' >
                    <input type='text' className="input"  placeholder='Confirm password'  />
                </div>
            </div>
            <button className={`w-full bg-[#633cff] text-white text-md rounded-lg py-2 px-6 font-semibold `}>
                Create account
            </button>
            <p className='text-[#737373] mt-4 text-center'>Already have an account ? <button className='text-[#633cff] hover:underline' onClick={() => setSwitch(!switchComponent)}>Login</button></p>
        </div>}
    </div>
  )
}

export default Login