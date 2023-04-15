import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import { axiosAuth } from '../../axios'

// TODO: add notifications for successful & failed changes
const UserInfo = () => {
  let {getUserData, setUserData, userData} = useContext(AuthContext)
  useEffect(() => {
    getUserData()
  }, []);

  const [firstName, setFirstName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userData");
    const initialValue = JSON.parse(saved);
    return initialValue?.first_name || "";
  });
  
  const [lastName, setLastName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userData");
    const initialValue = JSON.parse(saved);
    return initialValue?.last_name || "";
  })
  const [email, setEmail] = useState(() =>localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).email : '')
  const [bio, setBio] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userData");
    const initialValue = JSON.parse(saved);
    return initialValue?.bio || "";
  })
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // To update the localStorage data when the user changes their form info
    localStorage.setItem("userData", JSON.stringify(userData))
    if(storedData) {
      setFirstName(JSON.parse(localStorage.getItem('userData'))?.first_name)
      setLastName(JSON.parse(localStorage.getItem('userData'))?.last_name)
      setEmail(JSON.parse(localStorage.getItem('userData'))?.email)
      setBio(JSON.parse(localStorage.getItem('userData'))?.bio)
    }
  }, [userData])
  
  const profileEdit = async (e) => {
    e.preventDefault()
    let authToken = localStorage.getItem('authToken')
    try{
        let { data } = await axiosAuth({                                                                                                                                                                                                                                                                                                    
        url: '/users/me/',
        method: 'put',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`
        },
        data:{
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "bio": bio,
        }
    })
    setUserData(data)

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
        <h1 className=' font-semibold text-lg leading-5 w-full text-center mb-12'>المعلومات الشخصيـــة</h1>
        <form onSubmit={profileEdit} className='bg-gray-30 
                        flex flex-col gap-6 px-8 sm:px-16 mx-auto items-center
                        md:flex-row md:flex-wrap md:justify-center
                        lg:grid grid-cols-12' action="">
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="text" placeholder='الاسم' />
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="text" placeholder='اللقب' />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' type="text" placeholder='البريد الالكتروني ' />
            <input className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' type="text" placeholder='رقم الهاتف' />
            <textarea value={bio} onChange={(e)=>setBio(e.target.value)} className='w-full lg:col-span-full placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' placeholder='نــبذة عنك' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-primary lg:col-span1 lg:col-start-6 lg:col-end-7 font-bold text-sm leading-4 text-white py-3 px-12 mt-6 w-fit rounded-lg' type="submit">تحـــديث</button>
        </form>
    </div>
  )
}

export default UserInfo