import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import { axiosAccount, axiosAuth } from '../../axios'

// TODO: add notifications for successful & failed changes
const UserInfo = () => {
  console.log(JSON.parse(localStorage.getItem("userData")))
  let {getUserData, setUserData, userData} = useContext(AuthContext)
  // WHEN PAGE RELOAD  
  // const [firstName, setFirstName] = useState(JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')).first_name : null)
  const [firstName, setFirstName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userData");
    const initialValue = JSON.parse(saved);
    return initialValue?.first_name || "";
  });

  const [lastName, setLastName] = useState('user.last_name')
  const [email, setEmail] = useState('user.email')
  const [bio, setBio] = useState(4)
  // useEffect(()=>{
  //   getUserData()
    
  //   const storedData = localStorage.getItem('userData');
  //     if (storedData) {
  //       setFirstName(JSON.parse(storedData).first_name);
  //     }
  // }, [])

  useEffect(() => {
    getUserData()
    const fetchData = async () => {
      const storedData = await localStorage.getItem('userData');
      if (storedData) {
        setFirstName(JSON.parse(storedData).first_name);
      }
    };

    fetchData();
  }, []);

  // // WHEN USER UPDATING HIS INFO
  // useEffect(()=>{
  //   window.localStorage.setItem('userData', JSON.stringify(userData))
  // }, [userData])
//   let user = JSON.parse(window.localStorage.getItem('userData'))
  // console.log(JSON.parse(localStorage.getItem('userData')))
  
  
  const profileEdit = async (e) => {
    e.preventDefault()
    let authToken = localStorage.getItem('authToken')
    try{
        let response = await axiosAccount({                                                                                                                                                                                                                                                                                                    
        url: '/profile-edit',
        method: 'post',
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
    let data = response.data
    setUserData(data)
    setFirstName(data['first_name'])
    setLastName(data['last_name'])
    setEmail(data['email'])
    setBio(data['bio'])
    console.log('Success')
    window.localStorage.setItem('userData', data)
    }catch(error){
        if (error.response.status===401){
            console.log('Unautherized! You can not ')
        }
        console.log('error')
        console.log(error)
    }
}

  return (
    <div className='font-[Montserrat-Arabic] text-primary mt-16 lg:border-2 lg:rounded-xl lg:p-4 mx-auto lg:w-9/12 h-fit
                    w-full
                    bg-red-20'>
        <h1 className=' font-semibold text-lg leading-5 w-full text-center mb-12'>المعلومات الشخصيـــة</h1>
        <form onSubmit={'profileEdit'} className='bg-gray-30 
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