import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({setStepNum, stepNum}) => {
  return (
    <div className='bg-primary w-full py-12 px-6'>
      <div className='bg-white w-3/6 m-auto flex flex-col gap-16 py-8 rounded-lg text-primary'>
        <form className='w-full flex flex-col gap-10 items-center font-semibold text-[20px] leading-[24.38px] text-right font-[Montserrat-Arabic] ' action="" method="post">
            <h1 className='text-center font-[Montserrat-Arabic] font-semibold text-[35px] leading-[42.66px]' >تسجيل الدخول</h1>
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='اسم المستخدم' type="text" name="username" id="username" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='كلمة السر' type="password" name="password" id="password" />
            <div className='flex justify-evenly w-full'>
                <Link onClick={()=>setStepNum(stepNum+1)} to={''} className={` bg-primary px-14 flex rounded-md  mt-8 py-3 box-border text-[18px] text-white w-fit font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>تسجيل الدخول</Link>
            </div>   
        </form>
    </div>
    </div>
  )
}

export default Login