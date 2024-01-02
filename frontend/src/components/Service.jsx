import { useState } from 'react';
import { Link } from 'react-router-dom'



const Service = ({category}) => {
    console.log(process.env.REACT_APP_DOMAIN)
  const [isTextExpanded, setIsTextExpanded] = useState(false)
  const toggleExpansion = () => {
        setIsTextExpanded(prev=>!prev);
    };
  const category_bg = {
    backgroundImage: `url("${process.env.REACT_APP_DOMAIN}${category?.image}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    textColor: 'white',
  }
  return (
    // <div className='relative text-center shadow-xl rounded-xl
    //                 flex flex-col justify-between items-center 
    //                 px-6 py-6'>
    //     {/* IMAGE */}
    //     <div className='h-full shadow-2xl w-full'>
    //       {/* FIXME: replace this local path to .env value */}
    //         <img className='w-full h-full rounded-xl shadow-lg' src={`http://127.0.0.1:8000/${category?.image}`} alt="category" />
    //     </div>
    //     {/* category DETAILS */}
    //     <div className='grid grid-cols-1 grid-rows-4  mt-[-3rem]
    //                     '>
    //       <h1 className='text-primary text-center align-middle m-auto font-[Montserrat-Arabic] font-bold text-[18px] leading-[21.94px]
    //                     sm:text-[25px]  sm:leading-[31.57px] '>{category?.name}</h1>
    //       <p className='font-normal  py-2 m-auto font-[Montserrat-Arabic] text-[15px] leading-[18.29px] text-[#AAA8A8]
    //                     sm:leading-[19.38px]
    //                     row-span-2'>{category?.description}</p>
    //       <div className='mt-4'>
    //         <Link to={'redirectTo'} className={`border-non cursor-pointer w-fit mx-auto rounded-full px-10 lg:px-5 py-3 box-border bg-primary text-[15px] sm:text-[18px] text-white border-b-indigo-400 font-bold leading-[18.28px] sm:leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>طلب الخدمة</Link>
    //       </div>
    //     </div>
        
    // </div>

    <div className='shadow-xl rounded-[14px]  hover:shadow-2xl transition-shadow ease-in-out duration-300
                  flex flex-col w-full'>
        {/* <div class="bg-gray-40 relative text-center shadow-xl my- rounded-xl"> */}
            {/* PROMOTER PICTURE */}
            <div style={category_bg} class=" shadow-2xl  relative h-56  after:content[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:opacity-40 after:h-full after:w-full">
              <h3 class="text-xl mx-auto text-white z-40 my-8 absolute  font-bold leading-normal ">{category?.name}</h3>
            </div>
                
            
        {/* </div> */}
  </div>
  )
}

export default Service