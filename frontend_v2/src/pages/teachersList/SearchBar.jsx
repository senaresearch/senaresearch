import React, { useState } from 'react'
import { axiosAPI } from '../../axios'

const SearchBar = ({categories, promoters}) => {
  const [searchDetails, setSearchDetails] = useState({
    categoryID: null,
    promoterMajor: ''
  })
//   const [categories, setCategories] = useState(null)
  const search_promoters = async (event)=>{
    event.preventDefault()
    try{
        const { data } = await axiosAPI({
            url: `/promoters/search`,
            method: 'GET',
            header: {
                "Content-Type": "application/json",
            }, 
            params: {
                categoryID: searchDetails?.categoryID && parseInt(searchDetails?.categoryID),
                promoterMajor: searchDetails?.promoterMajor
            }
        })
        // setCategories(data)
        console.log(data)
    }catch(error){
        console.log(error)
    }
  }
  console.log((searchDetails?.categoryID))
  return (
    <div className='sticky top-[10vh] z-40 shadow-xl overflow-hidden bg-white
                    py-5 mb-24
                    flex items-center justify-center  '>
        <form onSubmit={search_promoters} className=' bg-white h-full text-primary font-[Montserrat-Arabic] font-semibold text-[18px] leading-[21.94px]
                         flex flex-col-reverse justify-evenly items-center gap-4
                         md:flex-row md:w-5/6 lg:gap-10
                         lg:w-4/6
                         w-full' action="" method="post">

            <button className='bg-primary text-white rounded-2xl
                                px-12 md:px-14 py-3 sm:py-4 ' type="submit">ابحــــث</button>
            <select onChange={(e)=>setSearchDetails(prev=>({...prev, categoryID:e.target.value}))} placeholder='اختـــر الـخدمة' className='outline-none border-2 appearance-none relative border-primary rounded-xl bg-white font-semibold text-base leading-4 sm:leading-5 text-right
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
                {
                    categories ?
                    categories.map(category => (
                        <option className=' p-4 pl-36 font-semibold text-base leading-5 text-right' value={category?.id}>{category?.name}</option>

                    ))
                    :
                    ''
                }
                
            </select>

            <select onChange={(e)=>{setSearchDetails(prev=>({...prev, promoterMajor:e.target.value}))}} placeholder='اختـــر الـخدمة' className='outline-none border-2 appearance-none relative border-primary rounded-xl bg-white font-semibold text-base leading-4 sm:leading-5 text-right
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
                {
                    promoters ? promoters.map(promoter=>(
                        <option className='p-4 pl-36 font-semibold text-base leading-3 text-right' value={promoter?.major}>{promoter?.major}</option>

                    )) : ''
                }
            </select>
        </form>
    </div>
  )
}

export default SearchBar