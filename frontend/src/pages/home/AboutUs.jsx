import React from 'react'
import whyAreWee from '../../assets/whyAreWee.png'


const AboutUs = () => {
  const bgImage = {
    backgroundImage: `url(${whyAreWee})`,
    isolation: 'isolate'
  }
  return (
    <div id={'aboutUs'} className='bg-white h-fit font-[Montserrat-Arabic] '>
      {/* WHO ARE WE */}
      <div className='flex flex-col justify-center items-center gap-6 sm:gap-16 w-11/12 mx-auto my-16 h-4/6'>
        <div>
          <h1 className=' font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] text-primary '>من نحنـــــــــ ؟</h1>
          {/* TEXT HEAD ANIMATION */}
          <div className='hidden'></div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 '>
          <div className='sm:w-[324px] w-[109px] h-0 border-[2px] border-primary '></div>
          <p className='sm:font-medium mx-6 font-normal text-[12px] sm:text-[20px] leading-[20.93px] sm:leading-[41.08px] text-primary text-center font-[Montserrat-Arabic]'>
          هي منصة خدمات تعليمية موجهة للطلبة الجامعيين الراغبين في الحصول على خدمة في اسرع وقت و بجودة عالية من طرف أساتذة جامعيين، دكاترة و حاملي الشهادات ذو كفاءة و خبرة مهنية فالمنصة تعتبر وسيط بين الطرفين كما تلعب دور المساعد للجامعة
          </p>
          <div className='sm:w-[324px] w-[109px] h-0 border-[2px] border-primary '></div>
        </div>
        <div className='hidden'></div>
      </div>

      {/* WHY ARE US */}
      <div className='relative  text-white'>
        <div id='whyAreUs' className='whyAreUs bg-cover bg-center bg-no-repeat flex flex-col gap-14  sm:gap-24 py-10 sm:py-20' style={bgImage}>
          <div className='text-center'>
            <h1 className=' font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] text-white'> لماذا نحنـــــــــ ؟</h1>
            {/* TEXT HEAD ANIMATION */}
            <div className='hidden'></div>
          </div>
          {/* THREE FETUARES */}
          <div className='flex items-center justify-evenly'>
            <div className='flex flex-col justify-center items-center gap-4 font-semibold text-[15px] sm:text-[20px] leading-[30.6px] sm:leading-[40.8px]'>
              <div className='  flex justify-center items-center w-[60px] h-[60px] rounded-full ' style={{background: 'radial-gradient(84.62% 84.62% at 50% 50%, #5A0057 0%, #9747FF 100%)'}} >
                <svg className='w-[24.39px] h-[24.39px] sm:w-[33px] sm:h-[33px] '   viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.4999 39.4167C31.3541 39.4167 39.4166 31.3542 39.4166 21.5C39.4166 11.6459 31.3541 3.58337 21.4999 3.58337C11.6458 3.58337 3.58325 11.6459 3.58325 21.5C3.58325 31.3542 11.6458 39.4167 21.4999 39.4167Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.8855 21.5L18.9559 26.5704L29.1147 16.4296" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>أفضل النتائج</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 font-semibold text-[15px] sm:text-[20px] leading-[30.6px] sm:leading-[40.8px]'>
              <div className='  flex justify-center items-center w-[60px] h-[60px] rounded-full ' style={{background: 'radial-gradient(84.62% 84.62% at 50% 50%, #5A0057 0%, #9747FF 100%)'}} >
                <svg className='w-[24.39px] h-[24.39px] sm:w-[33px] sm:h-[33px] ' viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7866 19.4755C21.6074 19.4575 21.3924 19.4575 21.1953 19.4755C16.9312 19.3321 13.5449 15.8384 13.5449 11.5384C13.5449 7.14879 17.0924 3.58337 21.4999 3.58337C25.8895 3.58337 29.4549 7.14879 29.4549 11.5384C29.437 15.8384 26.0508 19.3321 21.7866 19.4755Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.8283 26.0866C8.49246 28.9891 8.49246 33.7191 12.8283 36.6037C17.7554 39.9004 25.8358 39.9004 30.7629 36.6037C35.0987 33.7012 35.0987 28.9712 30.7629 26.0866C25.8537 22.8079 17.7733 22.8079 12.8283 26.0866Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>أحسن الأستاذة</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 font-semibold text-[15px] sm:text-[20px] leading-[30.6px] sm:leading-[40.8px]' >
              <div className='  flex justify-center items-center w-[60px] h-[60px] rounded-full ' style={{background: 'radial-gradient(84.62% 84.62% at 50% 50%, #5A0057 0%, #9747FF 100%)'}} >
                <svg className='w-[24.39px] h-[24.39px] sm:w-[33px] sm:h-[33px] ' viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.305 3.58337H15.695C8.95836 3.58337 8.43878 9.63921 12.0759 12.9359L30.9242 30.0642C34.5613 33.3609 34.0417 39.4167 27.305 39.4167H15.695C8.95836 39.4167 8.43878 33.3609 12.0759 30.0642L30.9242 12.9359C34.5613 9.63921 34.0417 3.58337 27.305 3.58337Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>ربح الوقت</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs