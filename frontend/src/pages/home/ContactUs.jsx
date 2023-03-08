import React from 'react'

const ContactUs = () => {
  return (
    <div id='contactUs' className=''>
      <div className='text-center sm:mb-24'>
        <h1 className='text-primary font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] '>تواصل معنــا</h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* CONTACT FORM */}
      <form action="" className=' flex flex-col gap-8  font-[Montserrat-Arabic] font-normal text-[15px] leading-[18.29px]  sm:text-[20px] sm:leading-[26.57px] w-[80%] sm:w-[70%] my-16 mx-auto bg--300'>
        <input type="text" placeholder='الإسم الكـامل' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' />
        <input type="text" placeholder='البريد الإلكتروني' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' rounded-lg  />
        <input type="text" placeholder='رقم الهــــاتف' className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' rounded-lg  />
        <textarea className=' rounded-lg bg-[#F8F1F1] text-right w-full placeholder:text-primary py-4 px-6' rounded-lg  name="" id="" placeholder='رسالتـــكـــــ'  cols="30" rows="10"></textarea>
        <button type="submit" className='text-primary text-[18px] sm:text-[30px] mt-8 px-14 py-2 border-2 border-primary w-fit mx-auto rounded-2xl leading-[21.94px] sm:leading-[38.76px] font-normal'>إرســــال</button>
      </form>
    </div>
  )
}

export default ContactUs;