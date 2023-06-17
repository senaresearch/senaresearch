import React, {useContext, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'



const Signup = () => {
  let {RegisterNewUser, authToken} = useContext(AuthContext)
  if (authToken){
    return <Navigate to="/dashboard/info" replace/>
  }
  return (
    <div className='bg-primary w-full py-12 px-6'>
      <div className='bg-white w-11/12 md:w-3/6 m-auto flex flex-col gap-16 py-8 rounded-lg text-primary'>
        <form  onSubmit={RegisterNewUser} className='w-full flex flex-col gap-10 items-center font-semibold text-base leading-[24.38px] text-right font-[Montserrat-Arabic]'>
            <h1 className='text-center font-[Montserrat-Arabic] font-semibold text-2xl leading-[32.66px]' > إنشاء حسـاب</h1>
            <input required className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder=' الإسـم الأول' type="text" name="first_name" id="first_name" />
            <input  className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='الإسـم الثاني' type="text" name="last_name" id="last_name" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='البريـد الإلكتروني ' type="email" name="email" id="email" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='اسـم المستخدم' type="text" name="username" id="username" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='كلمة السـر' type="password" name="password" id="password" />
            <input className=' placeholder:text-primary placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='تاكيـد كلمة السـر' type="password" name="re_password" id="re_password" />
            <input min="0" max="999999999" className=' placeholder:text-primary appearance-none placeholder:text-right px-4 w-10/12 sm:w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='كلمة السـر' type="number" name="phone" id="phone" />
            <input type="file" accept='image/*' name="image" id="image"  />
            <button type='submit'  className={` bg-primary px-10 flex rounded-md  mt-8 py-2 box-border text-lg text-white w-fit font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
              <p className='flex justify-evenly w-full'>إنشاء حسـاب جديد</p>   
            </button>
              <p>  تمتلك حسـاب معنا ! سجل دخولك  <Link className='text-blue-700 underline' to={'/login'}>هنا</Link> </p>
        </form>
    </div>
    </div>
  )
}

export default Signup