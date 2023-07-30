import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import DahsboardContext from './DashboardContext'
import AuthContext from '../../context/AuthContext'


const DashbordNavbar = () => {
  const bgColor = {
    background: "linear-gradient(270deg, rgba(90, 0, 87, 0.87) 0%, rgba(90, 0, 87, 0.75) 101.92%)"
  }
  const {isOpen, setIsOpen} = useContext(DahsboardContext)
  const {userData, logoutUser} = useContext(AuthContext)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  console.log(userData?.image)

  return (
    <div style={bgColor} className='
          px-4 h-[6.5%]
          flex justify-between items-center'>
      {/* SETTINGS */}
      <div className='flex gap-2 items-center ml-1'>
        <div>
          <Link className='flex gap-2 items-center' to={'info'}>
            <div>
              <img className='h-7 w-7 rounded-full' alt='user' src={userData?.image}/>
            </div>
            <p className='font-[Montserrat-Arabic] font-normal cursor-pointer text-sm leading-4 text-white'>{userData?.first_name}</p>
          </Link>
        </div>
        <div className='flex items-center'>
          
          <button className=' cursor-pointer' onClick={()=>{setIsProfileOpen(prev=>!prev)}} type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="white" class="w-5 h-5 text-[#9DACBE]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
      {/* NAVBAR MENU */}
      <div >
        <button id='menuToggle' type='button' onClick={()=>{setIsOpen(!isOpen)}} className='lg:hidden hover:bg-gray-00 p-2 rounded-full'>
          {
            isOpen ?
            
            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            :
            <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          }
        </button>
        <Link className='hidden lg:flex' to={'/'}>
          <svg width="111" height="24" viewBox="0 0 111 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path d="M12.476 16.077C11.9113 16.077 11.4053 15.9853 10.958 15.802C10.5107 15.6187 10.1513 15.3473 9.88 14.988C9.616 14.6287 9.47667 14.196 9.462 13.69H11.464C11.4933 13.976 11.5923 14.196 11.761 14.35C11.9297 14.4967 12.1497 14.57 12.421 14.57C12.6997 14.57 12.9197 14.5077 13.081 14.383C13.2423 14.251 13.323 14.0713 13.323 13.844C13.323 13.6533 13.257 13.4957 13.125 13.371C13.0003 13.2463 12.8427 13.1437 12.652 13.063C12.4687 12.9823 12.2047 12.8907 11.86 12.788C11.3613 12.634 10.9543 12.48 10.639 12.326C10.3237 12.172 10.0523 11.9447 9.825 11.644C9.59767 11.3433 9.484 10.951 9.484 10.467C9.484 9.74833 9.74433 9.18733 10.265 8.784C10.7857 8.37333 11.464 8.168 12.3 8.168C13.1507 8.168 13.8363 8.37333 14.357 8.784C14.8777 9.18733 15.1563 9.752 15.193 10.478H13.158C13.1433 10.2287 13.0517 10.0343 12.883 9.895C12.7143 9.74833 12.498 9.675 12.234 9.675C12.0067 9.675 11.8233 9.73733 11.684 9.862C11.5447 9.97933 11.475 10.1517 11.475 10.379C11.475 10.6283 11.5923 10.8227 11.827 10.962C12.0617 11.1013 12.4283 11.2517 12.927 11.413C13.4257 11.5817 13.829 11.743 14.137 11.897C14.4523 12.051 14.7237 12.2747 14.951 12.568C15.1783 12.8613 15.292 13.239 15.292 13.701C15.292 14.141 15.1783 14.5407 14.951 14.9C14.731 15.2593 14.4083 15.5453 13.983 15.758C13.5577 15.9707 13.0553 16.077 12.476 16.077Z" fill="#5A0057"/>
            <path d="M35.476 15.577C34.9113 15.577 34.4053 15.4853 33.958 15.302C33.5107 15.1187 33.1513 14.8473 32.88 14.488C32.616 14.1287 32.4767 13.696 32.462 13.19H34.464C34.4933 13.476 34.5923 13.696 34.761 13.85C34.9297 13.9967 35.1497 14.07 35.421 14.07C35.6997 14.07 35.9197 14.0077 36.081 13.883C36.2423 13.751 36.323 13.5713 36.323 13.344C36.323 13.1533 36.257 12.9957 36.125 12.871C36.0003 12.7463 35.8427 12.6437 35.652 12.563C35.4687 12.4823 35.2047 12.3907 34.86 12.288C34.3613 12.134 33.9543 11.98 33.639 11.826C33.3237 11.672 33.0523 11.4447 32.825 11.144C32.5977 10.8433 32.484 10.451 32.484 9.967C32.484 9.24833 32.7443 8.68733 33.265 8.284C33.7857 7.87333 34.464 7.668 35.3 7.668C36.1507 7.668 36.8363 7.87333 37.357 8.284C37.8777 8.68733 38.1563 9.252 38.193 9.978H36.158C36.1433 9.72867 36.0517 9.53433 35.883 9.395C35.7143 9.24833 35.498 9.175 35.234 9.175C35.0067 9.175 34.8233 9.23733 34.684 9.362C34.5447 9.47933 34.475 9.65167 34.475 9.879C34.475 10.1283 34.5923 10.3227 34.827 10.462C35.0617 10.6013 35.4283 10.7517 35.927 10.913C36.4257 11.0817 36.829 11.243 37.137 11.397C37.4523 11.551 37.7237 11.7747 37.951 12.068C38.1783 12.3613 38.292 12.739 38.292 13.201C38.292 13.641 38.1783 14.0407 37.951 14.4C37.731 14.7593 37.4083 15.0453 36.983 15.258C36.5577 15.4707 36.0553 15.577 35.476 15.577ZM41.8306 9.285V10.847H44.3496V12.299H41.8306V13.993H44.6796V15.5H39.9496V7.778H44.6796V9.285H41.8306ZM53.3088 15.5H51.4278L48.2818 10.737V15.5H46.4008V7.778H48.2818L51.4278 12.563V7.778H53.3088V15.5ZM59.9792 14.136H57.0972L56.6352 15.5H54.6662L57.4602 7.778H59.6382L62.4322 15.5H60.4412L59.9792 14.136ZM59.4952 12.684L58.5382 9.857L57.5922 12.684H59.4952ZM66.5766 15.577C66.0119 15.577 65.5059 15.4853 65.0586 15.302C64.6113 15.1187 64.2519 14.8473 63.9806 14.488C63.7166 14.1287 63.5773 13.696 63.5626 13.19H65.5646C65.5939 13.476 65.6929 13.696 65.8616 13.85C66.0303 13.9967 66.2503 14.07 66.5216 14.07C66.8003 14.07 67.0203 14.0077 67.1816 13.883C67.3429 13.751 67.4236 13.5713 67.4236 13.344C67.4236 13.1533 67.3576 12.9957 67.2256 12.871C67.1009 12.7463 66.9433 12.6437 66.7526 12.563C66.5693 12.4823 66.3053 12.3907 65.9606 12.288C65.4619 12.134 65.0549 11.98 64.7396 11.826C64.4243 11.672 64.1529 11.4447 63.9256 11.144C63.6983 10.8433 63.5846 10.451 63.5846 9.967C63.5846 9.24833 63.8449 8.68733 64.3656 8.284C64.8863 7.87333 65.5646 7.668 66.4006 7.668C67.2513 7.668 67.9369 7.87333 68.4576 8.284C68.9783 8.68733 69.2569 9.252 69.2936 9.978H67.2586C67.2439 9.72867 67.1523 9.53433 66.9836 9.395C66.8149 9.24833 66.5986 9.175 66.3346 9.175C66.1073 9.175 65.9239 9.23733 65.7846 9.362C65.6453 9.47933 65.5756 9.65167 65.5756 9.879C65.5756 10.1283 65.6929 10.3227 65.9276 10.462C66.1623 10.6013 66.5289 10.7517 67.0276 10.913C67.5263 11.0817 67.9296 11.243 68.2376 11.397C68.5529 11.551 68.8243 11.7747 69.0516 12.068C69.2789 12.3613 69.3926 12.739 69.3926 13.201C69.3926 13.641 69.2789 14.0407 69.0516 14.4C68.8316 14.7593 68.5089 15.0453 68.0836 15.258C67.6583 15.4707 67.1559 15.577 66.5766 15.577ZM72.9312 9.285V10.847H75.4502V12.299H72.9312V13.993H75.7802V15.5H71.0502V7.778H75.7802V9.285H72.9312ZM82.3083 14.136H79.4263L78.9643 15.5H76.9953L79.7893 7.778H81.9673L84.7613 15.5H82.7703L82.3083 14.136ZM81.8243 12.684L80.8673 9.857L79.9213 12.684H81.8243ZM90.0497 15.5L88.4437 12.585H87.9927V15.5H86.1117V7.778H89.2687C89.8774 7.778 90.3944 7.88433 90.8197 8.097C91.2524 8.30967 91.575 8.603 91.7877 8.977C92.0004 9.34367 92.1067 9.75433 92.1067 10.209C92.1067 10.7223 91.96 11.1807 91.6667 11.584C91.3807 11.9873 90.9554 12.2733 90.3907 12.442L92.1727 15.5H90.0497ZM87.9927 11.254H89.1587C89.5034 11.254 89.76 11.1697 89.9287 11.001C90.1047 10.8323 90.1927 10.594 90.1927 10.286C90.1927 9.99267 90.1047 9.76167 89.9287 9.593C89.76 9.42433 89.5034 9.34 89.1587 9.34H87.9927V11.254ZM93.4685 11.628C93.4685 10.8653 93.6335 10.187 93.9635 9.593C94.2935 8.99167 94.7518 8.526 95.3385 8.196C95.9325 7.85867 96.6035 7.69 97.3515 7.69C98.2681 7.69 99.0528 7.932 99.7055 8.416C100.358 8.9 100.794 9.56 101.014 10.396H98.9465C98.7925 10.0733 98.5725 9.82767 98.2865 9.659C98.0078 9.49033 97.6888 9.406 97.3295 9.406C96.7501 9.406 96.2808 9.60767 95.9215 10.011C95.5621 10.4143 95.3825 10.9533 95.3825 11.628C95.3825 12.3027 95.5621 12.8417 95.9215 13.245C96.2808 13.6483 96.7501 13.85 97.3295 13.85C97.6888 13.85 98.0078 13.7657 98.2865 13.597C98.5725 13.4283 98.7925 13.1827 98.9465 12.86H101.014C100.794 13.696 100.358 14.356 99.7055 14.84C99.0528 15.3167 98.2681 15.555 97.3515 15.555C96.6035 15.555 95.9325 15.39 95.3385 15.06C94.7518 14.7227 94.2935 14.257 93.9635 13.663C93.6335 13.069 93.4685 12.3907 93.4685 11.628ZM109.354 7.778V15.5H107.473V12.321H104.547V15.5H102.666V7.778H104.547V10.803H107.473V7.778H109.354Z" fill="white"/>
          </svg>
        </Link>
      </div>
        {/* pROFILE BOX */}
      <div className={`absolute top-0 left-0 z-50 w-60 `} >
        <div className={`${isProfileOpen ? 'flex' : 'hidden'}`}>
          <div className='absolute bg-white top-[3.9rem] right-[1.7rem] w-5 h-5 z-40 origin-center rotate-45 border-t shadow-t shadow-l rounded-l-sm border-l'></div>
          <div className='w-fit h-18 rounded-md absolute flex flex-col bg-white top-[4.589rem] right-[1.275rem] z-50 border-x border-b shadow'>
              <Link to={'password-change'} className="py-4 px-2 flex gap-2 p- border-b  hover:bg-[#e5e7eb] font-medium">
                <span className='font-semibold mr-2'>تغييـر كلمة المرور</span>
                <svg fill='#111827' className="h-5 w-5" viewBox="0 0 384 512"><path fill="currentColor" d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96.82 360.1a15.883 15.883 0 0 0-4.342 8.113l-12.16 60.79c-2.217 11.11 7.574 20.91 18.69 18.68l60.79-12.15a15.867 15.867 0 0 0 8.109-4.344l122.2-122.2c7.559-7.555 12.82-17.37 13.76-28.02 1.158-13.14-3.432-25.7-12.62-34.88l-8.172-8.176c-7.559-7.559-17.37-12.83-28.01-13.78-13.14-1.172-25.7 3.414-34.89 12.59L96.82 360.1zm51.98 45.2-32.72 6.539 6.543-32.71 86.22-86.23 26.18 26.18L148.8 405.3zm93.8-146.1c4.652-4.645 12.19-4.652 16.84.004l9.338 9.336c4.641 4.64 4.668 12.18-.004 16.84l-11.22 11.22-26.18-26.18L242.6 259.2z"></path></svg>
              </Link>
            <button onClick={logoutUser}  class="py-4 px-6 flex gap-2 justify-end items-center hover:bg-[#e5e7eb]">
              <span className='text-[#ef4444] font-semibold mr-2'>تسجـيل الخروج</span>
              <svg fill='#ef4444' class="w-5 h-5" viewBox="0 0 512 512"><path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path></svg>
            </button>     
          </div>  
        </div>
      </div>
    </div>



  )
}

export default DashbordNavbar