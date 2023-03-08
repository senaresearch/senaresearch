import React from 'react'

const SearchBar = () => {
  return (
    <div className='sticky top-[10vh] z-40 shadow-xl overflow-hidden bg-white
                    py-5 mb-24
                    flex items-center justify-center  '>
        <form className=' bg-white h-full text-primary font-[Montserrat-Arabic] font-semibold text-[18px] leading-[21.94px]
                         flex flex-col-reverse justify-evenly items-center gap-4
                         md:flex-row md:w-5/6 lg:gap-10
                         lg:w-4/6
                         w-full' action="" method="post">

            <button className='bg-primary text-white rounded-2xl
                                px-12 md:px-14 py-3 sm:py-4 ' type="submit">ابحــــث</button>
            <select placeholder='اختـــر الـخدمة' className='outline-none border-2 appearance-none relative border-primary rounded-xl bg-white font-semibold text-base leading-4 sm:leading-5 text-right
                                                              sm:p-4 p-3 w-5/6 sm:w-4/6 
                                                              flex flex-col ' name="اختـــر الـخدمة" id="">
                    <div className='absolute'>
                        <svg className='text-primary' width="13" height="8" viewBox="0 0 13 8" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.73223 1.60864L6.20506 6.0688L10.6779 1.60864" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <option className='text-end flex justify-end ' value="" selected>
                    اختـــر الـخدمة
                </option>
                <option className=' p-4 pl-36 font-semibold text-base leading-5 text-right' value="مساعدة إفتراضية">مساعدة إفتراضية</option>
                <option className='text-right' value="دورات تعليمية">دورات تعليمية</option>
                <option className='text-right' value="تدقيق لغوي">تدقيق لغوي</option>
                <option className='text-right' value="دروس دعم">دروس دعم</option>
            </select>

            <select placeholder='اختـــر الـخدمة' className='outline-none border-2 appearance-none relative border-primary rounded-xl bg-white font-semibold text-base leading-4 sm:leading-5 text-right
                                                              sm:p-4 p-3 w-5/6 sm:w-4/6 
                                                              flex flex-col' name="اختـــر الـخدمة" id="">
                    <div className='absolute'>
                        <svg className='text-primary' width="13" height="8" viewBox="0 0 13 8" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.73223 1.60864L6.20506 6.0688L10.6779 1.60864" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <option className='text-right py-5' value="" selected>
                    <p> اختـــر الـتـخــصـص</p>
                    </option>
                <option className='p-4 pl-36 font-semibold text-base leading-3 text-right' value=" رياضيات"> رياضيات</option>
                <option className='text-right' value="علم النفس ">علم النفس </option>
                <option className='text-right' value=" علوم">علوم </option>
                <option className='text-right' value="إعلان الي ">إعلان الي </option>
            </select>
        </form>
    </div>
  )
}

export default SearchBar