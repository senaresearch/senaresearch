import Button from "./Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    window.addEventListener('resize', ()=>window.innerWidth < 769 && setIsOpen(false));
    return (
        <div className="shadow-lg flex flex-col justify-center bg-primary h-fit z-50 w-full sticky top-0 min-w-[300px]">
          <div className="flex justify-between items-center px-6 py-2 shadow-b-xl ">
            {/* login btn */}
                <Link to={'/login'} className={`text-base cursor-pointer font-medium leading-[21.94pxpx] font-[Montserrat-Arabic] text-right  text-white `}>
                    <p className={`border-[3px] cursor-pointer w-fit rounded-[14px] px-5 py-1 box-border border-white bg-primary `}>
                        تسجيل الدخول
                    </p>
                </Link>
            {/* BURGER BAR */}
            <button className="text-3xl absolute right-6 cursor-pointer md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                {
                    isOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="nobe" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                }    
            </button>
            {/* NAVBAR */}

            <div className={
                ` 
              bg-primary px-8 pb-4 text-right text-white
                flex md:flex-row md:justify-between md:items-center md:w-8/12 md:pb-0
                flex-col gap-2
                absolute right-0 md:static 
                md:z-auto z-[-1] w-full md:pl-0 pl-9 
                transition-all duration-500 ease-in-out
                ${isOpen ? 'top-16 ':'top-[-250%]'}`
                }>
                {/* <Link to=''>تواصل معنا</Link> */}
                {/* <Link to=''>نبذة عنا</Link> */}
                <HashLink smooth to={`/#contactUs`}>تواصل معنا</HashLink>
                <HashLink smooth to={`/#aboutUs`}>نبذة عنا</HashLink>
                {/* <Link to=''>خدماتنا</Link> */}
                <HashLink smooth to={`/#ourServices`}>خدماتنا</HashLink>
                <HashLink smooth to='/#home'>الصفحة الرئيسية</HashLink>
                {/* LOGO */}
                <Link className="md:block flex justify-end" to=''>
                    <svg className="" width="90" height="60" viewBox="0 0 232 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="153" cy="43" rx="79" ry="43" fill="white"/>
                    <path d="M13.0015 45.0439C13.0015 46.6553 12.4196 47.9248 11.2559 48.8525C10.1003 49.7803 8.48893 50.2441 6.42188 50.2441C4.51758 50.2441 2.83301 49.8861 1.36816 49.1699V45.6543C2.57259 46.1914 3.58984 46.5698 4.41992 46.7896C5.25814 47.0093 6.02311 47.1191 6.71484 47.1191C7.54492 47.1191 8.17969 46.9604 8.61914 46.6431C9.06673 46.3257 9.29053 45.8537 9.29053 45.2271C9.29053 44.8771 9.19287 44.5679 8.99756 44.2993C8.80225 44.0226 8.51335 43.7581 8.13086 43.5059C7.75651 43.2536 6.98747 42.8507 5.82373 42.2974C4.73324 41.7847 3.91536 41.2923 3.37012 40.8203C2.82487 40.3483 2.38949 39.799 2.06396 39.1724C1.73844 38.5457 1.57568 37.8133 1.57568 36.9751C1.57568 35.3963 2.10872 34.1553 3.1748 33.252C4.24902 32.3486 5.73014 31.897 7.61816 31.897C8.5459 31.897 9.42887 32.0068 10.2671 32.2266C11.1134 32.4463 11.9964 32.7555 12.916 33.1543L11.6953 36.0962C10.7432 35.7056 9.95378 35.4329 9.32715 35.2783C8.70866 35.1237 8.09831 35.0464 7.49609 35.0464C6.77995 35.0464 6.23063 35.2132 5.84814 35.5469C5.46566 35.8805 5.27441 36.3159 5.27441 36.853C5.27441 37.1867 5.35173 37.4797 5.50635 37.7319C5.66097 37.9761 5.90511 38.2161 6.23877 38.4521C6.58057 38.68 7.38216 39.0951 8.64355 39.6973C10.3118 40.4948 11.4552 41.2964 12.0737 42.1021C12.6922 42.8996 13.0015 43.8802 13.0015 45.0439ZM29.2646 50H18.9863V32.1533H29.2646V35.2539H22.7705V39.1724H28.813V42.2729H22.7705V46.875H29.2646V50ZM51.5825 50H46.7729L39.0093 36.499H38.8994C39.054 38.8835 39.1313 40.5843 39.1313 41.6016V50H35.75V32.1533H40.5229L48.2744 45.52H48.3599C48.2378 43.2007 48.1768 41.5609 48.1768 40.6006V32.1533H51.5825V50ZM69.7622 50L68.4683 45.752H61.9619L60.668 50H56.5908L62.8896 32.0801H67.5161L73.8394 50H69.7622ZM67.5649 42.5781C66.3687 38.7288 65.6932 36.5519 65.5386 36.0474C65.3921 35.5428 65.2863 35.144 65.2212 34.8511C64.9526 35.8927 64.1836 38.4684 62.9141 42.5781H67.5649Z" fill="white"/>
                    <path d="M82.6318 40.0757H83.8525C85.0488 40.0757 85.9318 39.8763 86.5015 39.4775C87.0711 39.0788 87.356 38.4521 87.356 37.5977C87.356 36.7513 87.063 36.1491 86.4771 35.791C85.8993 35.4329 85 35.2539 83.7793 35.2539H82.6318V40.0757ZM82.6318 43.1519V50H78.8477V32.1533H84.0479C86.473 32.1533 88.2674 32.5968 89.4312 33.4839C90.5949 34.3628 91.1768 35.7015 91.1768 37.5C91.1768 38.5498 90.8879 39.4857 90.3101 40.3076C89.7323 41.1214 88.9144 41.7603 87.8564 42.2241L93.1055 50H88.9062L84.646 43.1519H82.6318ZM108.38 50H98.1016V32.1533H108.38V35.2539H101.886V39.1724H107.928V42.2729H101.886V46.875H108.38V50ZM125.4 45.0439C125.4 46.6553 124.818 47.9248 123.654 48.8525C122.499 49.7803 120.887 50.2441 118.82 50.2441C116.916 50.2441 115.231 49.8861 113.767 49.1699V45.6543C114.971 46.1914 115.988 46.5698 116.818 46.7896C117.657 47.0093 118.422 47.1191 119.113 47.1191C119.943 47.1191 120.578 46.9604 121.018 46.6431C121.465 46.3257 121.689 45.8537 121.689 45.2271C121.689 44.8771 121.591 44.5679 121.396 44.2993C121.201 44.0226 120.912 43.7581 120.529 43.5059C120.155 43.2536 119.386 42.8507 118.222 42.2974C117.132 41.7847 116.314 41.2923 115.769 40.8203C115.223 40.3483 114.788 39.799 114.462 39.1724C114.137 38.5457 113.974 37.8133 113.974 36.9751C113.974 35.3963 114.507 34.1553 115.573 33.252C116.647 32.3486 118.129 31.897 120.017 31.897C120.944 31.897 121.827 32.0068 122.666 32.2266C123.512 32.4463 124.395 32.7555 125.314 33.1543L124.094 36.0962C123.142 35.7056 122.352 35.4329 121.726 35.2783C121.107 35.1237 120.497 35.0464 119.895 35.0464C119.178 35.0464 118.629 35.2132 118.247 35.5469C117.864 35.8805 117.673 36.3159 117.673 36.853C117.673 37.1867 117.75 37.4797 117.905 37.7319C118.059 37.9761 118.304 38.2161 118.637 38.4521C118.979 38.68 119.781 39.0951 121.042 39.6973C122.71 40.4948 123.854 41.2964 124.472 42.1021C125.091 42.8996 125.4 43.8802 125.4 45.0439ZM141.663 50H131.385V32.1533H141.663V35.2539H135.169V39.1724H141.211V42.2729H135.169V46.875H141.663V50ZM159.074 50L157.78 45.752H151.273L149.979 50H145.902L152.201 32.0801H156.828L163.151 50H159.074ZM156.876 42.5781C155.68 38.7288 155.005 36.5519 154.85 36.0474C154.704 35.5428 154.598 35.144 154.533 34.8511C154.264 35.8927 153.495 38.4684 152.226 42.5781H156.876ZM171.943 40.0757H173.164C174.36 40.0757 175.243 39.8763 175.813 39.4775C176.383 39.0788 176.667 38.4521 176.667 37.5977C176.667 36.7513 176.375 36.1491 175.789 35.791C175.211 35.4329 174.312 35.2539 173.091 35.2539H171.943V40.0757ZM171.943 43.1519V50H168.159V32.1533H173.359C175.785 32.1533 177.579 32.5968 178.743 33.4839C179.906 34.3628 180.488 35.7015 180.488 37.5C180.488 38.5498 180.199 39.4857 179.622 40.3076C179.044 41.1214 178.226 41.7603 177.168 42.2241L182.417 50H178.218L173.958 43.1519H171.943ZM194.994 35.0464C193.569 35.0464 192.467 35.5835 191.686 36.6577C190.904 37.7238 190.514 39.2131 190.514 41.1255C190.514 45.105 192.007 47.0947 194.994 47.0947C196.247 47.0947 197.765 46.7814 199.547 46.1548V49.3286C198.082 49.939 196.446 50.2441 194.64 50.2441C192.044 50.2441 190.058 49.4588 188.683 47.8882C187.307 46.3094 186.62 44.047 186.62 41.1011C186.62 39.2456 186.957 37.6221 187.633 36.2305C188.308 34.8307 189.277 33.7606 190.538 33.02C191.808 32.2713 193.293 31.897 194.994 31.897C196.727 31.897 198.469 32.3161 200.218 33.1543L198.998 36.2305C198.33 35.9131 197.659 35.6364 196.983 35.4004C196.308 35.1644 195.645 35.0464 194.994 35.0464ZM220.729 50H216.958V42.2974H209.89V50H206.105V32.1533H209.89V39.1479H216.958V32.1533H220.729V50Z" fill="#5A0057"/>
                    </svg>

                </Link>
            </div>
          </div>
            </div>
    )
  }
  
  export default Navbar