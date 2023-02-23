import TeacherCard from '../../components/TeacherCard'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const BestTeachers = () => {
  const customSlider = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };
  //TODO: Disable next/prev buttons when reach the start/end of the slides number
  // const slick_track = document.querySelector('.slick-track').childElementCount 

  return (
    <div className='text-primary flex flex-col gap-14 my-20 overflow-hidden'>
      <div className='text-center'>
        <h1 className=' font-semibold text-[50px] leading-[60.95px] '>أهم الأساتذة </h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* TEACHERS CARDS */}
      {/* className='flex bg-red-200 justify-center items-center overflow-x-hidden w-3/6 mx-auto gap-20 py-16' */}

      {/* <div className=''> */}
        <div className='w-4/6 bg-red- mx-auto'>
          <Slider ref={slider => (customSlider.current = slider)} {...settings} className=''>
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </Slider>

        </div>
      
      {/* </div> */}
      

      
      {/* CARDS SWIP BTNs */}
        <div className='flex justify-evenly items-center w-4/6 mx-auto'>
          <button type='button' onClick={() => customSlider.current.slickPrev()}  className='btn cursor-pointer flex justify-center items-center w-[55px] h-[55px] bg-primary rounded-full'>
            <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4651 21.7074L1.78509 11.9999L11.4651 2.29236" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button onClick={() => customSlider.current.slickNext()} type='button'  className=' cursor-pointer flex justify-center items-center w-[55px] h-[55px] bg-primary rounded-full'>
            <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53491 21.7074L11.2149 11.9999L1.53491 2.29236" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

      {/* MORE TEACHERS BRN */}
      <div className={`border-[2px] cursor-pointer w-fit mx-auto rounded-[14px] px-10 mt-4 py-4 box-border border-primary bg-transparent `}>
        <Link to={'teachers-list'} className={`text-[18px] cursor-pointer text-primary font-normal leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
          المزيد من الأساتذة  
        </Link>
      </div>

    </div>
  )
}

export default BestTeachers