import React from 'react'
import { Link } from 'react-router-dom'
const TeacherCard = ({promoter}) => {
  return (
    <>
        <div className="bg-gray-40 relative text-center shadow-xl my-8 rounded-xl flex flex-col ">
            {/* PROMOTER PICTURE */}
            <div className="h-36 w-36 mx-auto -mt-16">
                <img src={`${process.env.REACT_APP_DOMAIN}${promoter?.image}`} alt='promoter' className=" w-full h-full shadow-xl rounded-full align-middle border-[3px] border-primary"/>
            </div>
           
            {/* PROMOTER DETAILS */}
            <div className=" h-full bg-green-0 text-center mx-6">
                <h3 className="text-2xl text-slate-700 font-bold leading-normal truncate ">{promoter?.first_name + ' ' + promoter.last_name}</h3>
            </div>
            {/* BIO SECTION */}
            <div className="mt-4 py-6 border-t border-slate-200">
                <div className="w-full px-4 flex flex-col justify-between h-32">
                    <p className="font-light leading-relaxed truncate whitespace-normal overflow-hidden text-slate-600 mb-4 h-full">{promoter?.bio}</p>
                    <Link to={`/promoters/${promoter?.id}`} className=" text-slate-700 hover:text-slate-400">See Profile</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default TeacherCard