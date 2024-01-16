import React, { useState } from 'react'
import SignUp from './components/Login/SignUp'
import SignIn from './components/Login/SignIn'

const Login = () => {
    const [switchComponent , setSwitch] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[#fafafa]'>
        <h1>DevLinks</h1>
        {!switchComponent ?<SignIn switchComponent={switchComponent} setSwitch={setSwitch} />
         : <SignUp switchComponent={switchComponent} setSwitch={setSwitch} />
        }
    </div>
  )
}

export default Login