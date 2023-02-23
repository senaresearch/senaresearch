import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-white sticky top-[10vh] z-50 shadow-xl py-5 flex items-center justify-center mb-24 overflow-hidden'>
        <form className='  flex justify-evenly items-center h-full w-[65%] mx-auto text-primary font-[Montserrat-Arabic] font-semibold text-[18px] leading-[21.94px] ' action="" method="post">
            <button className='bg-primary text-white px-14 py-4 rounded-2xl' type="submit">ابحــــث</button>
            <select placeholder='اختـــر الـخدمة' className='p-4 outline-none border-2 appearance-none relative border-primary rounded-xl pl-36 bg-white font-semibold text-base leading-5 text-right ' name="اختـــر الـخدمة" id="">
                    <div className='absolute'>
                        <svg className='text-primary' width="13" height="8" viewBox="0 0 13 8" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.73223 1.60864L6.20506 6.0688L10.6779 1.60864" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <option className='text-right ' value="" selected>
                    <p>اختـــر الـخدمة</p>
                    </option>
                <option className=' p-4 pl-36 font-semibold text-base leading-5 text-right' value="مساعدة إفتراضية">مساعدة إفتراضية</option>
                <option className='text-right' value="دورات تعليمية">دورات تعليمية</option>
                <option className='text-right' value="تدقيق لغوي">تدقيق لغوي</option>
                <option className='text-right' value="دروس دعم">دروس دعم</option>
            </select>

            <select placeholder='اختـــر الـخدمة' className='p-4 outline-none border-2 appearance-none relative border-primary rounded-xl pl-36 bg-white font-semibold text-base leading-5 text-right ' name="اختـــر الـخدمة" id="">
                    <div className='absolute'>
                        <svg className='text-primary' width="13" height="8" viewBox="0 0 13 8" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.73223 1.60864L6.20506 6.0688L10.6779 1.60864" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <option className='text-right ' value="" selected>
                    <p> اختـــر الـتـخــصـص</p>
                    </option>
                <option className=' p-4 pl-36 font-semibold text-base leading-5 text-right' value=" رياضيات"> رياضيات</option>
                <option className='text-right' value="علم النفس ">علم النفس </option>
                <option className='text-right' value=" علوم">علوم </option>
                <option className='text-right' value="إعلان الي ">إعلان الي </option>
            </select>
        </form>
    </div>
  )
}

export default SearchBar