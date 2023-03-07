import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../assets/service1.jpg'



const Service = ({serviceName, redirectTo, serviceDescription, servicePicture}) => {
  return (
    // TODO: MODIFY THE CARDs SHADOW
    <div className='bg-white relative text-center shadow-xl rounded-xl
                    flex flex-col justify-between items-center gap-8
                    px-6 mt-16 pb-8'>
        {/* IMAGE */}
        {/* <div className='absolute top-[-30%] '>
            <img src={servicePicture} alt="" />
        </div> */}
        {/* SERVICE DETAILS */}
        <div className='grid grid-cols-1 grid-rows-4 gap-8 
                        mt-[4rem] h-full'>
          <h1 className='text-primary text-center align-middle m-auto font-[Montserrat-Arabic] font-bold text-[18px] leading-[21.94px]
                        sm:text-[25px]  sm:leading-[31.57px] '>{serviceName}</h1>
          <p className='font-normal m-auto font-[Montserrat-Arabic] text-[15px] leading-[18.29px] text-[#AAA8A8]
                        sm:leading-[19.38px]
                        row-span-2'>{serviceDescription}</p>
          <div className=''>
          <Link to={redirectTo} className={`border-non cursor-pointer w-fit mx-auto rounded-full px-10 lg:px-5 py-3 box-border bg-primary text-[15px] sm:text-[18px] text-white border-b-indigo-400 font-bold leading-[18.28px] sm:leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>طلب الخدمة</Link>
          </div>
        </div>
        
    </div>
  )
}

export default Service