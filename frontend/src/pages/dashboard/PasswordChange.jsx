import React, {useContext, useState} from 'react'
import { axiosAuth } from '../../axios'
import AuthContext from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'


const PasswordChange = () => {
  let {setUserData, userData, setAuthToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword1, setNewPassword1] = useState('')
  const [NewPassword2, setNewPassword2] = useState('')
  const password_chnage = async (e) => {
    e.preventDefault()
    let authToken = localStorage.getItem('authToken')
    console.log(authToken)
    try{
        let { data } = await axiosAuth({                                                                                                                                                                                                                                                                                                    
        url: '/users/set_password/',
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`
        },
        data:{
            "current_password": oldPassword,
            "new_password": newPassword1,
            "re_new_password": NewPassword2,
        }
    })
    console.log(data)
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('userData')
    setUserData(null)
    setAuthToken(null)
    navigate('/login')
    // Redirect to the user information page

    // // Retrieve the current value of the key from the local storage
    // const currentFormData = localStorage.getItem("userData");

    // // Update the value variable with the new value
    // const updatedFormData = { ...JSON.parse(currentFormData), ...response.data };

    // // Store the updated value variable in the local storage under the corresponding key
    // localStorage.setItem("userData", JSON.stringify(updatedFormData));
    }catch(error){
        console.log(error)
    }
}
  return (
    <div className='font-[Montserrat-Arabic] text-primary mt-16 lg:border-2 lg:rounded-xl lg:p-4 mx-auto lg:w-9/12 h-fit w-full bg-red-20'>
        <h1 className=' font-semibold text-lg leading-5 w-full text-center mb-12'>تغييـر كلمة المرور</h1>
        <form onSubmit={password_chnage} className='bg-gray-30 
                        flex flex-col gap-6 px-8 sm:px-16 mx-auto items-center
                        md:flex-row md:flex-wrap md:justify-center
                        lg:grid grid-cols-12' action="">
            <input value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} className='col-span-full placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="password" placeholder='كلمة المرور القديمة' />
            <input value={NewPassword2} onChange={(e)=>setNewPassword2(e.target.value)} className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' type="password" placeholder='تأكيـد كلمة المرور الجديدة ' />
            <input value={newPassword1} onChange={(e)=>setNewPassword1(e.target.value)} className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="password" placeholder='كلمة المرور الجديدة' />
            <button className='bg-primary lg:col-span1 lg:col-start-6 lg:col-end-7 font-bold text-sm leading-4 text-white py-3 px-12 mt-6 w-fit rounded-lg' type="submit">تغييــر</button>
        </form>
    </div>
  )
}

export default PasswordChange