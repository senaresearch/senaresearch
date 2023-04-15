import TeacherCard from '../../components/TeacherCard'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { axiosAccount } from '../../axios';



const BestTeachers = () => {  
  const [settingsState, setSettingsState] = useState()
  function handleResize() {
    if (window.innerWidth <= 640){
      setSettingsState({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      })
        
    }else if(window.innerWidth <= 768){
      setSettingsState({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
      })
        
    }else{
      setSettingsState({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
      })
    }
  }
  window.addEventListener('resize', handleResize)
  useEffect(()=>{
    window.addEventListener('load', handleResize)
  }, [])
  const customSlider = useRef();


  //TODO: Disable next/prev buttons when reach the start/end of the slides number
  // const slick_track = document.querySelector('.slick-track').childElementCount 
  const [promoters, setPromoters] = useState(null)
  const get_promoters_data = async ()=>{
      try{
          const { data } = await axiosAccount({
              url: `/promoters`,
              method: 'GET',
              header: {
                  "Content-Type": "application/json",
              }
          })
          setPromoters(data)
        }catch(error){
          console.log(error)
        }
      }
      useEffect(()=>{
        get_promoters_data()
      }, [])

  return (
    <div className='text-primary flex flex-col gap-4 sm:gap-14 my-20 overflow-hidden'>
      <div className='text-center'>
        <h1 className=' font-semibold text-[25px]  sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] '>! أهم الأســـاتذة </h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* TEACHERS CARDS */}
        <div className='w-4/6 mx-auto '>
          <Slider ref={slider => (customSlider.current = slider)} {...settingsState} className=''>
            {
              promoters && promoters.map(promoter=>(
                <TeacherCard key={promoter?.id} promoter={promoter} />

              ))
            }
          </Slider>
        </div>
      {/* CARDS SWIP BTNs */}
        <div className='flex justify-evenly items-center w-4/6 mx-auto'>
          <button type='button' onClick={() => customSlider.current.slickPrev()}  className='btn cursor-pointer flex justify-center items-center w-[35px] h-[35px] sm:w-[55px] sm:h-[55px] bg-primary rounded-full'>
            <svg className='w-4 h-4 sm:w-[13px] sm:h-[13px]' viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4651 21.7074L1.78509 11.9999L11.4651 2.29236" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button onClick={() => customSlider.current.slickNext()} type='button'  className=' cursor-pointer flex justify-center items-center w-[35px] h-[35px] sm:w-[55px] sm:h-[55px] bg-primary rounded-full'>
            <svg className='w-4 h-4 sm:w-[13px] sm:h-[13px]' viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53491 21.7074L11.2149 11.9999L1.53491 2.29236" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      {/* MORE TEACHERS BRN */}
        <Link to={'promoters-list'} className={`flex flex-row-reverse gap-4 justify-center items-center sm:text-[18px] text-[15px] border-[2px] w-fit mx-auto rounded-[14px] px-5 sm:px-10 mt-4 py-2 sm:py-4 box-border border-primary bg-transparent cursor-pointer text-primary font-normal leading-[18.29px] sm:leading-[21.94pxpx] font-[Montserrat-Arabic] text-right `}>
          <p className={``}>
              المزيد من الأساتذة  
          </p>
          <div className='border-2 rounded-full flex justify-center items-center w-[25px] h-[25px] border-primary'>
            <svg className=' w-[9px] h-[12px] '  viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.45301 11.2012L1.55457 6.28882L6.45301 1.37646" stroke="#5A0057" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </Link>
    </div>
  )
}

export default BestTeachers