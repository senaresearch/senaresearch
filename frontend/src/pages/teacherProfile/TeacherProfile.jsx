import React from 'react'
import teacherPic from '../../assets/teacherPict.jpg'
import { Link } from 'react-router-dom'
import servicePict1 from '../../assets/service11.jpg'

import servicePict2 from '../../assets/service22.png'
import servicePict3 from '../../assets/service33.png'

const TeacherProfile = () => {
  return (
    <div className=' bg-primary w-screen px-6 py-16 '>
        <div className='text-primary my-8 flex flex-col gap-16 mx-auto w-5/6 bg-white p-16 py-20 '>
            {/* TEACHER DETIALS */}
            <div className='flex flex-col gap-14'>
                <h1 className=' font-semibold font-[Montserrat-Arabic] text-[25px] leading-[30.47px] text-right py-2 px-2 border-r-4 border-primary '>نــبذة عن الأستــاذ</h1>
                <div className='flex gap-12 w-full'>
                    <div className='w-4/6 flex flex-col gap-7'>
                        <h1 className='font-[Montserrat-Arabic] font-semibold text-[35px] text-right leading-[42.66px] '>الأستاذ فلان </h1>
                        <p className=' font-normal text-[20px] leading-[24.38px] text-right font-[Montserrat-Arabic]  '>
                            Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.
                            Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per 
                            Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.
                            Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per 
                        </p>
                    </div>
                    <div className='w-2/6 bg-red-50'><img className='w-full h-full' src={teacherPic} alt="" /></div>
                </div>
            </div>

            {/* TEACHER SERVICES */}
            <div className='flex flex-col gap-12'>
                <h1 className=' font-semibold font-[Montserrat-Arabic] text-[25px] leading-[30.47px] text-right py-2 px-2 border-r-4 border-primary '> الخــــدمات المقدمة </h1>
                
                <div className='w-4/5 flex gap-14 mx-auto bg-red-30'>
                    <div className='flex flex-col w-[30%] shadow-2xl rounded-[14px] bg-white'>
                        <div className='w-full h-full flex justify-center items-center'><img className='w-fit h-auto' src={servicePict1} alt="" /></div>
                        <Link to={'teachers-list'} className={` bg-primary px-4 flex w-full rounded-b-[14px] mt-4 py-3 box-border text-[18px] text-white font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
                                <div>
                                    <svg className='' width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6992 30.6151C24.3848 30.6151 30.6152 24.3847 30.6152 16.6991C30.6152 9.01346 24.3848 2.78304 16.6992 2.78304C9.01358 2.78304 2.78316 9.01346 2.78316 16.6991C2.78316 24.3847 9.01358 30.6151 16.6992 30.6151Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.4529 21.6114L13.5545 16.699L18.4529 11.7867" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className='ml-8'>طــلب الخدمة</p>
                        </Link>
                    </div>

                    <div className='flex flex-col w-[30%] shadow-2xl rounded-[14px] bg-white'>
                        <div className='w-full h-full '><img className='w-full h-full' src={servicePict2} alt="" /></div>
                        <Link to={'teachers-list'} className={` bg-primary px-4 flex w-full rounded-b-[14px] mt-4 py-3 box-border text-[18px] text-white font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
                                <div>
                                    <svg className='' width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6992 30.6151C24.3848 30.6151 30.6152 24.3847 30.6152 16.6991C30.6152 9.01346 24.3848 2.78304 16.6992 2.78304C9.01358 2.78304 2.78316 9.01346 2.78316 16.6991C2.78316 24.3847 9.01358 30.6151 16.6992 30.6151Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.4529 21.6114L13.5545 16.699L18.4529 11.7867" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className='ml-8'>طــلب الخدمة</p>
                        </Link>
                    </div>

                    <div className='flex flex-col w-[30%] shadow-2xl rounded-[14px] bg-white'>
                        <div className='w-full h-full flex justify-center items-center'><img className='w-fit h-auto' src={servicePict3} alt="" /></div>
                        <Link to={'teachers-list'} className={` bg-primary px-4 flex w-full rounded-b-[14px] mt-4 py-3 box-border text-[18px] text-white font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
                                <div>
                                    <svg className='' width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6992 30.6151C24.3848 30.6151 30.6152 24.3847 30.6152 16.6991C30.6152 9.01346 24.3848 2.78304 16.6992 2.78304C9.01358 2.78304 2.78316 9.01346 2.78316 16.6991C2.78316 24.3847 9.01358 30.6151 16.6992 30.6151Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.4529 21.6114L13.5545 16.699L18.4529 11.7867" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className='ml-8'>طــلب الخدمة</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherProfile