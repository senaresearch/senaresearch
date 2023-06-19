import React, { useContext, useState, useEffect } from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import DahsboardContext from './DashboardContext'


const SideMenu = () => {
  const {isOpen, setIsOpen} = useContext(DahsboardContext)
  useEffect(() => {
    function handleResize() {
      console.log("rrrr")
      if(window.innerWidth >= 1024){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <div className='flex h-[93.5%]'>
      <Outlet/>
      <div className={` ${isOpen ? 'right-0' : '-right-96'}
                    text-primary text-right font-normal text-base leading-4 font-[Montserrat-Arabic] px-4 bg-[#F1F2F7] pt-8 shadow-xl h-full z-50
                    fixed lg:static
                    peer-focus:right-0 peer:transition ease-linear delay-150 duration- duration-500`}>
        <div className='flex gap-3 flex-col'>
          <h1 className='text-xl font-extrabold leading-6 mb-4'>لوحة التحكم</h1>
          <NavLink to='info'
          className={({ isActive, isPending }) =>`flex justify-end gap-2 px-2 pl-4 py-3 rounded-xl ${isActive ? "text-white bg-primary" : "text-primary hover:bg-gray-200"}`
        }
          >
            <p className=''>المعلومات الشخصيـــة</p>
            <svg className={"w-4 h-4 text-white"}  viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.97047 4.46829C9.97047 6.67106 8.2043 8.43733 5.99998 8.43733C3.7964 8.43733 2.02949 6.67106 2.02949 4.46829C2.02949 2.26552 3.7964 0.5 5.99998 0.5C8.2043 0.5 9.97047 2.26552 9.97047 4.46829ZM6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8904 2.76404 10.3804 6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5Z" fill="white"/>
            </svg>
            {/* {({ isActive, isPending }) => (
            )} */}
            {({isActive})=>{
            return (<>
            <p
              className={ isActive ? "h-5 stroke-2 stroke-blue-700" : "stroke-gray-400"}
            />
              <span
                className={`font-semibold text-gray-700 group-hover:text-gray-900 ${isActive ? "text-red-800" : "text-green-700"}`}
              >{'item.name'}</span>
            </>)
          }}
          </NavLink>
          <NavLink to='services' className={({ isActive, isPending }) =>`flex justify-end gap-2 px-2 pl-4 py-3 rounded-xl ${isActive ? "text-white bg-primary" : "text-primary hover:bg-gray-200"}`
        }>
            <p className=''>الخدمات المقدمة</p>
            {({ isActive, isPending }) => (
              <svg className={isActive ? "w-4 h-4 text-white" : "w-4 h-4"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3018 9.185C14.57 9.3275 14.777 9.5525 14.9226 9.7775C15.2062 10.2425 15.1832 10.8125 14.9073 11.315L14.3707 12.215C14.0871 12.695 13.5583 12.995 13.0141 12.995C12.7458 12.995 12.4469 12.92 12.2016 12.77C12.0024 12.6425 11.7724 12.5975 11.5271 12.5975C10.7683 12.5975 10.1322 13.22 10.1092 13.9625C10.1092 14.825 9.40403 15.5 8.52259 15.5H7.48019C6.59109 15.5 5.88594 14.825 5.88594 13.9625C5.87061 13.22 5.23444 12.5975 4.47564 12.5975C4.2227 12.5975 3.99276 12.6425 3.80115 12.77C3.55588 12.92 3.24929 12.995 2.98869 12.995C2.43683 12.995 1.90797 12.695 1.62438 12.215L1.09551 11.315C0.811922 10.8275 0.796592 10.2425 1.08019 9.7775C1.20282 9.5525 1.43276 9.3275 1.69336 9.185C1.90797 9.08 2.04594 8.9075 2.17623 8.705C2.55947 8.06 2.32953 7.2125 1.67803 6.83C0.919227 6.4025 0.673957 5.45 1.11084 4.7075L1.62438 3.8225C2.06893 3.08 3.01935 2.8175 3.78582 3.2525C4.45264 3.6125 5.31875 3.3725 5.70965 2.735C5.83229 2.525 5.90127 2.3 5.88594 2.075C5.87061 1.7825 5.95492 1.505 6.10055 1.28C6.38414 0.815 6.89768 0.515 7.4572 0.5H8.53792C9.10511 0.5 9.61864 0.815 9.90223 1.28C10.0402 1.505 10.1322 1.7825 10.1092 2.075C10.0938 2.3 10.1628 2.525 10.2855 2.735C10.6764 3.3725 11.5425 3.6125 12.217 3.2525C12.9758 2.8175 13.9339 3.08 14.3707 3.8225L14.8843 4.7075C15.3288 5.45 15.0836 6.4025 14.3171 6.83C13.6656 7.2125 13.4356 8.06 13.8265 8.705C13.9492 8.9075 14.0871 9.08 14.3018 9.185ZM5.83221 8.0075C5.83221 9.185 6.80562 10.1225 8.00898 10.1225C9.21233 10.1225 10.1628 9.185 10.1628 8.0075C10.1628 6.83 9.21233 5.885 8.00898 5.885C6.80562 5.885 5.83221 6.83 5.83221 8.0075Z" fill="#5A0057" fill-opacity="0.5"/>
              </svg>
            )}
          </NavLink>
          <NavLink to='help' className={({ isActive, isPending }) =>`flex justify-end gap-2 px-2 pl-4 py-3 rounded-xl ${isActive ? "text-white bg-primary" : "text-primary hover:bg-gray-200"}`}>
            <p className=''>تقديـم مساعدة</p>
            {({ isActive, isPending }) => (
              <svg className={isActive ? "w-4 h-4 text-white" : "w-4 h-4"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7525 0.499023H11.255C13.7975 0.499023 15.5 2.28402 15.5 4.93902V11.0673C15.5 13.7148 13.7975 15.499 11.255 15.499H4.7525C2.21 15.499 0.5 13.7148 0.5 11.0673V4.93902C0.5 2.28402 2.21 0.499023 4.7525 0.499023ZM7.99256 5.79479C7.64006 5.79479 7.34756 5.50154 7.34756 5.14229C7.34756 4.77479 7.64006 4.48229 8.00756 4.48229C8.36756 4.48229 8.66006 4.77479 8.66006 5.14229C8.66006 5.50154 8.36756 5.79479 7.99256 5.79479ZM8.65244 10.8348C8.65244 11.1948 8.35994 11.4873 7.99244 11.4873C7.63244 11.4873 7.33994 11.1948 7.33994 10.8348V7.51976C7.33994 7.15901 7.63244 6.85976 7.99244 6.85976C8.35994 6.85976 8.65244 7.15901 8.65244 7.51976V10.8348Z" fill="#5A0057" fill-opacity="0.5"/>
              </svg>
            )}

          </NavLink>
        </div> 
      </div>
      {/* background opacity */}
      <section onClick={()=>{setIsOpen(false)}} className={`${isOpen ? 'flex' : 'hidden'} lg:hidden bg-[#00000066] w-screen h-screen float-left z-40 fixed`}></section>
      
    </div>
  )
}
export default SideMenu