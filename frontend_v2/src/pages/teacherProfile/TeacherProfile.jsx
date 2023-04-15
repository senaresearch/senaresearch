import React, { useEffect, useState } from 'react'
import teacherPic from '../../assets/teacherPict.jpg'
import { Link, useParams } from 'react-router-dom'
import servicePict1 from '../../assets/service11.jpg'
import { axiosAccount } from '../../axios'


const TeacherProfile = (props) => {
    const [promoter, setPromoter] = useState(null)
    const [services, setServices] = useState(null)
    const params = useParams()
    const promoterID = parseInt(params['promoter_id'])
    console.log(typeof(promoterID))
    const get_promoter_data = async ()=>{
        try{
            const { data } = await axiosAccount({
                url: `/promoters/${promoterID}`,
                method: 'GET',
                header: {
                    "Content-Type": "multipart/mixed",
                }
            })
            setPromoter(data?.promoterData)
            setServices(data?.promoterServices)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        get_promoter_data()
    }, [])
  return (
    <div className=' bg-primary w-full px-2 py-16 '>
        <div className='text-primary bg-white
                        my-8 p-8 sm:p-11 py-15 mx-auto
                        flex flex-col gap-16 w-5/6'>
            {/* TEACHER DETIALS */}
            <div className='flex flex-col'>
                <h1 className='font-semibold font-[Montserrat-Arabic] text-[22px] leading-[25.94px] text-right border-r-4 border-primary
                               py-2 px-2 mb-8
                               lg:text-[35px] lg:leading-[42.66px]
                               md:text-[25px] md:leading-[30.47px]'>نــبذة عن الأستــاذ</h1>
                <div className='flex flex-col-reverse sm:gap-12 xl:flex-row w-full'>
                    <div className='w-full xl:w-4/6 flex flex-col gap-7'>
                        <h1 className='text-center font-semibold font-[Montserrat-Arabic] text-[22px] leading-[25.94px]
                                       sm:text-[24px] sm:leading-[27.47px]
                                       md:text-[25px] md:leading-[30.47px]
                                       lg:text-[35px] lg:leading-[42.66px]'> {promoter?.first_name + ' ' + promoter?.last_name} </h1>
                        <p className='font-normal text-[15px] leading-[18.29px] text-right font-[Montserrat-Arabic]
                                      sm:text-[20px] sm:leading-[24.38px]
                                      lg:text-[23px] lg:leading-[27.38px]'>
                                        {promoter?.bio}
                        </p>
                    </div>
                    {/* FIXME: replace http://127.0.0.1:8000/ with the value in .env file */}
                    <div className='xl:w-2/6 w-full mb-6 sm:-mb-3 bg-red-50'><img className='w-full h-auto' src={`http://127.0.0.1:8000/${promoter?.image}`} alt="" /></div>
                </div>
            </div>

            {/* TEACHER SERVICES */}
            <div className='flex flex-col gap-10 w-full bg-slate-'>
                <h1 className='font-semibold font-[Montserrat-Arabic] lg:text-[35px] lg:leading-[42.66px] md:text-[25px] md:leading-[30.47px] text-[22px] leading-[25.94px] text-right py-2 pr-2 border-r-4 border-primary '> الخــــدمات المقدمة </h1>
                
                <div className='grid grid-cols-1 gap-8 items-end 
                                sm:grid-cols-2
                                lg:grid-cols-3
                                2xl:grid-cols-4'>
                                    {/* {services && (<h1>hhhh</h1>)} */}
                    {
                        services ?
                        services.map(service =>(
                            <div className='shadow-2xl rounded-[14px] bg-white
                                            flex flex-col w-full'>
                                <div className='w-full h-full flex justify-center items-center'><img className='w-fit h-auto' src={servicePict1} alt="" /></div>
                                <Link to={'promoters-list'} className={`
                                        box-border text-white font-normal  rounded-b-[14px] font-[Montserrat-Arabic] text-center bg-primary
                                        mx-auto px-4 mt-4 py-3
                                        flex justify-center items-center w-full md:text-[22px] md:leading-[28.47px] text-[18px] leading-[21.94px]`}>
                                        <div className=''>
                                            <svg className='' width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.6992 30.6151C24.3848 30.6151 30.6152 24.3847 30.6152 16.6991C30.6152 9.01346 24.3848 2.78304 16.6992 2.78304C9.01358 2.78304 2.78316 9.01346 2.78316 16.6991C2.78316 24.3847 9.01358 30.6151 16.6992 30.6151Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.4529 21.6114L13.5545 16.699L18.4529 11.7867" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className='ml-8 text-center'>طــلب الخدمة</p>
                                </Link>
                            </div>
                        ))
                        :
                        <h1>There are no services here</h1>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherProfile