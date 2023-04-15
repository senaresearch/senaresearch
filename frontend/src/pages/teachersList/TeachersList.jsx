import React, {useState} from 'react'
import TeacherCard from '../../components/TeacherCard'
import SearchBar from './SearchBar'


const TeachersList = () => {
  
  return (
    <div className=' flex flex-col gap-14 '>
        <SearchBar />
        {/* TEACHERS LIST */}
        <div className='grid grid-cols-1 mx-auto w-5/6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-5/6 mx-auto gap-y-24 gap-x-16 '>
            {
                [2,3,4,5,6,7,8,9,10,11].map((card, index)=>{
                    return <TeacherCard key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default TeachersList