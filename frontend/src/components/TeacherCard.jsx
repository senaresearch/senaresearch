import React from 'react'
import { Link } from 'react-router-dom'
const TeacherCard = ({promoter}) => {
  return (
    <>
    <Link to={`/promoters/${promoter?.id}`}>
        <div class="bg-gray-40 relative text-center shadow-xl my-8 rounded-xl">
            {/* PROMOTER PICTURE */}
            <div class="h-36 w-36 absolute left-[50%] top-[-15%] translate-x-[-50%]">
                <img src={`http://127.0.0.1:8000/${promoter?.image}`} alt='promoter' class=" w-full h-full shadow-xl rounded-full align-middle border-[3px] border-primary"/>
            </div>
            {/* PROMOTER DETAILS */}
            <div class="pt-24">
                <h3 class="text-2xl text-slate-700 font-bold leading-normal ">{promoter?.first_name + ' ' + promoter.last_name}</h3>
                <div class="text-xs text-slate-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-slate-40à text-red-60 opacity-75"></i>test
                </div>
            </div>
            {/* BIO SECTION */}
            <div class="mt-4 py-6 border-t border-slate-200">
                <div class="w-full px-4 flex flex-col justify-evenly h-32">
                    <p class="font-light leading-relaxed text-clip overflow-hidden  text-slate-600 mb-4">{promoter?.bio.slice(0, 170)}</p>
                    <a href="javascript:;" class=" text-slate-700 hover:text-slate-400">See Profile</a>
                </div>
            </div>
        </div>
    </Link>



    </>
  )
}

export default TeacherCard