import React, { useState } from 'react'
import { axiosAPI } from '../../axios'

const ContactUs = () => {
  const [emailDetails, setEmailDetails] = useState(()=>({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  }))
  const send_email = async (event)=>{
    event.preventDefault()
    try{
        const { data } = await axiosAPI({
            url: `/contact-us`,
            method: 'post',
            header: {
                "Content-Type": "application/json",
            },
            data: {
              fullname: emailDetails?.fullname,
              email: emailDetails?.email,
              phone: emailDetails?.phone,
              message: emailDetails?.message,
            }
        })
        setEmailDetails(data)
      }catch(error){
        console.log(error)
      }
    }
    console.log(emailDetails)
  return (
    <div id='contactUs' className=''>
      <div className='text-center sm:mb-24'>
        <h1 className='text-primary font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] '>تواصل معنــا</h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* CONTACT FORM */}
      <form onSubmit={send_email} className=' flex flex-col gap-8  font-[Montserrat-Arabic] font-normal text-[15px] leading-[18.29px]  sm:text-[20px] sm:leading-[26.57px] w-[80%] sm:w-[70%] my-16 mx-auto bg--300'>
        <input value={emailDetails?.name} onChange={(e)=>setEmailDetails(prev=>({...prev, fullname: e.target.value}))} type="text" required placeholder='الإسم الكـامل' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' />
        <input value={emailDetails?.email} onChange={(e)=>setEmailDetails(prev=>({...prev, email: e.target.value}))} type="email" required placeholder='البريد الإلكتروني' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6'   />
        {/* FIXME : change the type of the phone input from text to number */}
        <input value={emailDetails?.phone} onChange={(e)=>setEmailDetails(prev=>({...prev, phone: e.target.value}))} type="text" required placeholder='رقم الهــــاتف' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6'   />
        <textarea value={emailDetails?.message} onChange={(e)=>setEmailDetails(prev=>({...prev, message: e.target.value}))} className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' required  name="" id="" placeholder='رسالتـــكـــــ'  cols="30" rows="10"></textarea>
        <button type="submit" className='text-primary text-[18px] sm:text-[30px] mt-8 px-14 py-2 border-2 border-primary w-fit mx-auto rounded-2xl leading-[21.94px] sm:leading-[38.76px] font-normal'>إرســــال</button>
      </form>
    </div>
  )
}

export default ContactUs;