import React, { useState } from 'react'
import SignUp from './components/Login/SignUp'
import SignIn from './components/Login/SignIn'

const Login = () => {
    const [switchComponent , setSwitch] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[#fafafa]'>
        <img className="block w-[108px] my-5" src="icons/logo-devlinks-large.svg" alt='log' />
        {!switchComponent ?<SignIn switchComponent={switchComponent} setSwitch={setSwitch} />
         : <SignUp switchComponent={switchComponent} setSwitch={setSwitch} />
        }
    </div>
  )
}

export default Login