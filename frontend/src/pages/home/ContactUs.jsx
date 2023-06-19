import React, { useEffect, useState } from 'react'
import { axiosAPI } from '../../axios'
import { toast } from 'react-toastify';

const ContactUs = () => {
  const notifyError = (message) => toast.error(message, {
    position: "top-left",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const notifySuccess = (message) => toast.success(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  const notifyWarning = (message) => toast.warn(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  const [responses, setResponses] = useState({})
  
  const send_email = async (event)=>{
    event.preventDefault()
    if(event.target.fullname.value === '') notifyWarning('الاسم الكامل: قد لا يكون هذا الحقل فارغا');
    if(event.target.email.value === '') notifyWarning('البريد الإلكنروني: قد لا يكون هذا الحقل فارغا');
    if(event.target.phone.value === '') notifyWarning('رقم الهاتف: قد لا يكون هذا الحقل فارغا');
    if(event.target.message.value === '') notifyWarning('رسالتك: قد لا يكون هذا الحقل فارغا');
    try{
        const {data} = await axiosAPI({
            url: `/contact-us`,
            method: 'post',
            header: {
                "Content-Type": "application/json",
            },
            data: {
              fullname: event.target.fullname.value,
              email: event.target.email.value,
              phone: event.target.phone.value,
              message: event.target.message.value,
            }
        })
        typeof(data)=== 'string' && notifySuccess('تم إرسال بريدك الإلكتروني بنجاح.')
      }catch(error){
        console.log('error.data.fullname')
      }
    }



  return (
    <div id='contactUs' className=''>
      <div className='text-center sm:mb-24'>
        <h1 className='text-primary font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] '>تواصل معنــا</h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* CONTACT FORM */}
      <form onSubmit={send_email} className=' flex flex-col gap-8  font-[Montserrat-Arabic] font-normal text-[15px] leading-[18.29px]  sm:text-[20px] sm:leading-[26.57px] w-[80%] sm:w-[70%] my-16 mx-auto bg--300'>
        <input type="text" id='fullname' name='fullname'  placeholder='الإسم الكـامل' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' />
        <input id='email' name='email' type="email" placeholder='البريد الإلكتروني' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6'   />
        {/* FIXME : change the type of the phone input from text to number */}
        <input id='phone' name='phone' type="number" placeholder='رقم الهــــاتف' className=' appearance-none rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6'   />
        <textarea className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6'   name="message" id="message" placeholder='رسالتـــكـــــ'  cols="30" rows="10"></textarea>
        <button type="submit" className='text-primary text-[18px] sm:text-[30px] mt-8 px-14 py-2 border-2 border-primary w-fit mx-auto rounded-2xl leading-[21.94px] sm:leading-[38.76px] font-normal'>إرســــال</button>
      </form>
    </div>
  )
}

export default ContactUs;