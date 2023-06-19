import React, { useEffect, useState, useContext } from 'react'
import TeacherCard from '../../components/TeacherCard'
import SearchBar from './SearchBar'
import { axiosAPI, axiosAccount } from '../../axios'
import APIContext from '../../context/APIContext'


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
          console.log(promoters)
        }catch(error){
          console.log(error)
        }
      }
  
  const {get_categories, categories} = useContext(APIContext)
  useEffect(()=>{
    get_promoters_data()
    get_categories()
  }, [])

  return (
    <div className=' flex flex-col gap-14 '>
        <SearchBar categories={categories} setPromoters={setPromoters}/>
        {/* TEACHERS LIST */}
        <div className={promoters ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-5/6 mx-auto gap-y-24 gap-x-16 ' : ' flex justify-center items-center text-right mb-14'}>
            {
              promoters ?
                promoters.map((promoter, index)=>{
                    return <TeacherCard promoter={promoter} key={index}/>
                })
                :
                  <h1 className=' text-xl'>...ليست هنالك أي نتيجـة</h1>
                
            }
        </div>
    </div>
  )
}

export default TeachersList