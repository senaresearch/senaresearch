import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { axiosAccount, axiosAPI } from '../../axios'
import Modal from '../../components/Modal'
import { toast } from 'react-toastify';


const TeacherProfile = (props) => {
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
    const notifyWarning = (message) => toast.warning(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const [promoter, setPromoter] = useState(null)
    const [services, setServices] = useState(null)
    const params = useParams()
    const promoterID = parseInt(params['promoter_id'])
    const get_promoter_data = async ()=>{
        try{
            const { data } = await axiosAccount({
                url: `/promoters/${promoterID}`,
                method: 'GET',
                header: {
                    "Content-Type": "application/json",
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
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    const toggleExpansion = () => {
        setIsTextExpanded(prev=>!prev);
    };
    // 
    const [isOpen, setIsOpen] = useState(false)
    const [orderDetails, setOrderDetails] = useState({
        fullname : '',
        email    : '',
        phone    : '',
        service  : null,

    })
    const service_order = async (event) => {
        event.preventDefault()
        console.log(orderDetails)
        console.log(orderDetails?.service?.id)
        try{
            const response = await axiosAPI({
                url:'place-order',
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                data: {
                    fullname : event.target.fullname.value,
                    email : event.target.email.value,
                    phone : event.target.phone.value,
                    promoter: orderDetails?.service?.promoter?.id,
                    service: orderDetails?.service?.id
                }
            })
            console.log(response)
            setIsOpen(false)
            if(response.status === 200){
                notifySuccess('تم تسجيل طلبكم بنجاح, سيتم التواصل معكم في حالة توفر هذه الخدمـة')
            }
        }catch(error){
            console.log(error)
        }
    }
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
                    <div className='xl:w-2/6 w-full mb-6 sm:-mb-3 bg-red-50'><img className='w-full h-auto' src={`https://sena-reserach.vercel.app/${promoter?.image}`} alt="" /></div>
                </div>
            </div>

            {/* TEACHER SERVICES */}
            <div className='flex flex-col gap-10 w-full bg-slate-'>
                <h1 className='font-semibold font-[Montserrat-Arabic] lg:text-[35px] lg:leading-[42.66px] md:text-[25px] md:leading-[30.47px] text-[22px] leading-[25.94px] text-right py-2 pr-2 border-r-4 border-primary '> الخــــدمات المقدمة </h1>
                
                <div className='grid grid-cols- gap-8 items-end 
                                sm:grid-cols-2
                                lg:grid-cols-3
                                '>
                    {
                        services ?
                        services.map(service =>(
                            <div className='shadow-xl rounded-[14px] bg-white hover:shadow-2xl transition-shadow ease-in-out duration-300
                                            flex flex-col w-full'>
                                <div >
                                    <div class="bg-gray-40 relative text-center shadow-xl my- rounded-xl">
                                        {/* PROMOTER PICTURE */}
                                        <div class="h-full w-full  ">
                                            <img src={`https://sena-reserach.vercel.app/${service?.image}`} alt='service' class="rounded-t-2xl w-full h-full shadow-xl border-[2px] border-primary"/>
                                        </div>
                                        {/* PROMOTER DETAILS */}
                                        <div class=" m-4">
                                            <h3 class="text-xl text-slate-700 font-bold leading-normal ">{service?.name}</h3>
                                            <div class=" flex justify-center gap-2 items-center mt-2 text-slate-400 font-bold uppercase">
                                                <div className='flex items-center gap-2 cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                    </svg>
                                                    <p className='text-sm'> {service?.category?.name} </p>
                                                </div>
                                                {/* <div c></div> */}
                                                <div className='flex border-l-2 pl-2 items-center gap-2 cursor-pointer pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                    </svg>
                                                    <p className='text-sm'> {service?.price} DA </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* BIO SECTION */}
                                        <div class="mt-4 border-t border-slate-200">
                                            <div class="w-full px-4 flex flex-col justify-evenly h-fit">
                                                <p class="font-light leading-relaxed text-right text-slate-600 my-4">{isTextExpanded ? service?.description : service?.description.slice(0, 150)}
                                                    {service?.description.length > 170 && (
                                                        <button onClick={toggleExpansion} className='text-slate-700 font-bold mt-2 underline text-center w-full'>
                                                            {isTextExpanded ? 'إقرا أقل' : 'إقرا أكثـر'}
                                                        </button>
                                                        )}
                                                </p>
                                                <button onClick={()=>{setOrderDetails({fullname:'', email:'', phone:null, service:service}); setIsOpen(true)}} type='button' class=" text-white bg-primary rounded-2xl py-2 px-4 w-fit m-auto mt-3 mb-4"> طــلب الخدمة </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <h1>There are no services here</h1>
                    }
                </div>
            </div>
        </div>
        <Modal trigger={isOpen} setTrigger={setIsOpen} header={'طلب الخدمـة'} modalWidth={'1000px'}>
            <form onSubmit={service_order} className='flex-col gap-6 px-4 mx-auto items-center md:flex-row md:flex-wrap md:justify-center lg:grid grid-cols-12'>
                <input id='fullname' name='fullname' required value={orderDetails?.fullname} onChange={(e)=>setOrderDetails(prevState=>({...prevState, fullname:e.target.value}))} className='w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="text" placeholder='الإسـم الكامل' />
                <input id='email' name='email' required value={orderDetails?.email} onChange={(e)=>setOrderDetails(prevState=>({...prevState, email:e.target.value}))} className='w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="email" placeholder='البريد الإلكتروني' />
                <input id='phone' name='phone' required value={orderDetails?.phone} onChange={(e)=>setOrderDetails(prevState=>({...prevState, phone:e.target.value}))} className='w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="number" placeholder='رقم الهاتف' />
                <div className='flex gap-3 flex-col w-full lg:col-span-12 text-sm leading-4 text-right p-2 '>
                    <span className='text-md'>:اسـم الخدمة</span>
                    <span className='rounded-lg text-primary bg-[#F1F3F8] p-2'>{orderDetails?.service?.name}</span>
                </div>
                <div className='flex gap- flex-row-reverse items-center w-full lg:col-span-12 text-sm leading-4 text-right p-2 '>
                    <span className='text-md'>:مقدم الخدمة</span>
                    <Link to={'/promoters/' + orderDetails?.service?.promoter?.id} className='rounded-lg text-primary p-2'>{orderDetails?.service?.promoter?.first_name + ' ' + orderDetails?.service?.promoter?.last_name}</Link>
                </div>
                <div className='flex gap- flex-row-reverse items-center w-full lg:col-span-12 text-sm leading-4 text-right p-2 '>
                    <span className='text-md'>:سعر الخدمة</span>
                    <span className='rounded-lg text-primary p-2'> {orderDetails?.service?.price} DA </span>
                </div>
                <div class="flex col-span-full gap-3 flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 pt-4 mt-4 mr-1 dark:border-opacity-50">
                    <button onClick={()=>{setIsOpen(false)}} type="button" class="inline-block hover:bg-gray-200 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700  duration-150 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 transition-colors ease-linear duration-400">رجوع</button>
                    <button type='submit' class="ml-1  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">طلب الخدمـة </button>
                </div>
            </form>
        </Modal>
    </div>
  )
}
export default TeacherProfile