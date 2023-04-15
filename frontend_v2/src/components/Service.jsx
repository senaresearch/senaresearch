import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../assets/service1.jpg'



const Service = ({serviceName, redirectTo, serviceDescription, servicePicture, category}) => {
  console.log(category)
  return (
    // TODO: MODIFY THE CARDs SHADOW
    <div className='relative text-center shadow-xl rounded-xl
                    flex flex-col justify-between items-center 
                    bg-red-30 px-6 py-6'>
        {/* IMAGE */}
        <div className='relative bottom-16 shadow-2xl'>
          {/* FIXME: replace this local path to .env value */}
            <img className='w-full h-full' src={`http://127.0.0.1:8000//${category?.image}`} alt="category" />
        </div>
        {/* SERVICE DETAILS */}
        <div className='grid grid-cols-1 grid-rows-4  mt-[-3rem]
                        '>
          <h1 className='text-primary text-center align-middle m-auto font-[Montserrat-Arabic] font-bold text-[18px] leading-[21.94px]
                        sm:text-[25px]  sm:leading-[31.57px] '>{category?.name}</h1>
          <p className='font-normal  py-2 m-auto font-[Montserrat-Arabic] text-[15px] leading-[18.29px] text-[#AAA8A8]
                        sm:leading-[19.38px]
                        row-span-2'>{category?.description}</p>
          <div className='mt-4'>
            <Link to={'redirectTo'} className={`border-non cursor-pointer w-fit mx-auto rounded-full px-10 lg:px-5 py-3 box-border bg-primary text-[15px] sm:text-[18px] text-white border-b-indigo-400 font-bold leading-[18.28px] sm:leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>طلب الخدمة</Link>
          </div>
        </div>
        
    </div>
  )
}

export default Service