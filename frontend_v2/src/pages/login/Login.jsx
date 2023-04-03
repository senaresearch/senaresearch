import React, {useContext, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'



const Login = () => {
  let {loginUser, authToken} = useContext(AuthContext)
//   if (!authToken){
//     return <Navigate to="/dashboard/info" replace/>
//   }
  return (
    <div className='bg-primary w-full py-12 px-6'>
      <div className='bg-white w-11/12 md:w-3/6 m-auto flex flex-col gap-16 py-8 rounded-lg text-primary'>

        <form onSubmit={loginUser} className='w-full flex flex-col gap-10 items-center font-semibold text-base leading-[24.38px] text-right font-[Montserrat-Arabic]'>
            <h1 className='text-center font-[Montserrat-Arabic] font-semibold text-2xl leading-[32.66px]' >تسجيل الدخول</h1>
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='اسم المستخدم' type="text" name="username" id="username" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='كلمة السر' type="password" name="password" id="password" />
              <button type='submit'  className={` bg-primary px-10 flex rounded-md  mt-8 py-2 box-border text-lg text-white w-fit font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
                <p className='flex justify-evenly w-full'>تسجيل الدخول</p>   
              </button>
        </form>
    </div>
    </div>
  )
}

export default Login