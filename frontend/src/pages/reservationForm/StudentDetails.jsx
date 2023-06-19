import React from 'react'
import { Link } from 'react-router-dom'

const StudentDetails = ({setStepNum, stepNum}) => {
  return (
    <form className='w-full flex flex-col gap-10 items-center font-semibold text-[20px] leading-[24.38px] text-right font-[Montserrat-Arabic] ' action="" method="post">
      <h1>11111</h1>
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='الاسم الكامل' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='البريد الإلكتروني' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='رقم الهــــاتف' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='اليــــوم' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='الــساعة' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='المدة' type="text" name="" id="" />
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='الموضوع' type="text" name="" id="" />
      <textarea className='placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder='الوصف' name="" id="" cols="30" rows="10"></textarea>
      <input className=' placeholder:text-primary placeholder:text-right px-4 w-4/6 mx-auto text-right py-3 rounded-lg border-2 border-primary' placeholder=' إضافة ملف' type="text" name="" id="" />

      <div className='flex justify-evenly w-full'>
        <Link onClick={()=>setStepNum(stepNum+1)} to={''} className={` bg-primary px-14 flex rounded-md  mt-8 py-3 box-border text-[18px] text-white w-fit font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>التــالي</Link>
      </div>   
      </form>
  )
}

export default StudentDetails