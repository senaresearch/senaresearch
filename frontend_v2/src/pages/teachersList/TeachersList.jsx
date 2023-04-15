import React, { useEffect, useState } from 'react'
import TeacherCard from '../../components/TeacherCard'
import SearchBar from './SearchBar'
import { axiosAccount } from '../../axios'


const TeachersList = () => {
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
    <div className=' flex flex-col gap-14 '>
        <SearchBar />
        {/* TEACHERS LIST */}
        <div className='grid grid-cols-1 mx-auto w-5/6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-5/6 mx-auto gap-y-24 gap-x-16 '>
            {
              promoters &&
                promoters.map((promoter, index)=>{
                    return <TeacherCard promoter={promoter} key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default TeachersList