import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../assets/service1.jpg'



const Service = ({serviceName, redirectTo, serviceDescription, servicePicture}) => {
  return (
    // TODO: MODIFY THE CARDs SHADOW
    <div className='bg-white relative py-8 px-6 text-center shadow-xl flex flex-col gap-8 rounded-xl mt-16'>
        {/* IMAGE */}
        <div className='absolute top-[-6rem] left-0 right-0 p-4'>
            <img src={servicePicture} alt="" />
        </div>
        {/* SERVICE TITLE */}
        <div className='mt-[6rem] flex flex-col gap-4 '>
          <h1 className=' font-[Montserrat-Arabic] font-bold text-[25px] leading-[31.57px] text-primary'>{serviceName}</h1>
          <p className='font-normal font-[Montserrat-Arabic] text-[15px] leading-[19.38px] text-[#AAA8A8] '> {serviceDescription} </p>
          <div className={`border-non font-[Montserrat-Arabic] cursor-pointer w-fit mx-auto rounded-full px-14 mt-4 py-3 box-border bg-primary `}>
              <Link to={redirectTo} className={`text-[18px] text-white font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
              طلب الخدمة
              </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Service