import React from 'react'
import TeacherCard from '../../components/TeacherCard'
import SearchBar from './SearchBar'


const TeachersList = () => {
  return (
    <div className='mb-24'>
        <SearchBar />
        {/* TEACHERS LIST */}
        <div className='grid grid-cols-4 w-5/6 mx-auto gap-y-24 gap-x-16 mt-40'>
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