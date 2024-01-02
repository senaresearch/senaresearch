import {createContext, useState, useEffect} from 'react'
import {axiosAuth} from '../axios'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    const notifyError = (message) => toast.error(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifySuccess = (message) => toast.success(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyWarning = (message) => toast.warning(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
	const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null)

	const loginUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/token/login',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "username": e.target.username.value,
                "password": e.target.password.value
            }
        }
        ).then((response)=>{
            console.log(response.data)
            localStorage.setItem('authToken', response.data['auth_token'])
            setAuthToken(response.data['auth_token'])
            navigate('/dashboard/info')
            notifySuccess('تم تسجيل الدخول بنجـاح')
        }).catch((error)=>{
            console.log(error.response.data)
            notifyError(error.response.data['non_field_errors'][0])
        })
    }
    const [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)
    const getUserData = ()=>{
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/users/me/',
            method: 'get',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            },
        }
        ).then((response)=>{
            console.log(response)
            localStorage.setItem('userData', JSON.stringify(response.data))
            setUserData(response.data)
        }).catch((error)=>{
            console.log(error.reponse.data)
        })
    }

    const RegisterNewUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/users/',
            method: 'post',
            headers:{
                'Content-Type': 'multipart/form-data',
            },
            data:{
                "email": e.target.email.value,
                "username": e.target.username.value,
                "password": e.target.password.value,
                "re_password": e.target.re_password.value,
                "first_name": e.target.first_name.value,
                "last_name": e.target.last_name.value,
                "image": e.target.image.files[0],
                "phone": e.target.phone.value,
            }
        }
        ).then((response)=>{
            navigate('/login')
            notifySuccess('تم انشاء حساب جديد - قم بتسجيل الدخول بعد تفعيل حسابك من طرفنا')
            console.log(response.data)
        }).catch((error)=>{
            let data = error.response.data
            console.log(data)
            // notifyError(error.response.data['non_field_errors'][0])
            // notifyError(error.response.data['image'][0])
            
        })
    }

    const passwordReset = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/password/reset/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": e.target.email.value,
            }
        }
        ).then((response)=>{
            let successMessage = response.data.detail
            navigate('/')
            console.log(successMessage)
        }).catch((error)=>{
            let data = error.response.data
            console.log(data)
        })
    }

    const logoutUser = ()=>{
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/token/logout',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            },
        }
        ).then((response)=>{
            window.localStorage.removeItem('authToken')
            window.localStorage.removeItem('userData')
            setUserData(null)
            setAuthToken(null)
            // It's recommended to use redirect in loaders and actions rather than useNavigate in your components, 
            // When the redirect is in response to data
            navigate('/login')
            notifySuccess('تم تسجيل الخروج بنجـاح')
            console.log(response)
        }).catch((error)=>{
            console.log(error)
            console.log("this is error")
            console.log('Something went wrong when you logged out')
            console.log(error.response.data)
            notifyError(error.response.data['non_field_errors'][0])
        })
    }
    
    const passwordChange = async (e, old_password, new_password1, new_password2) => {
        e.preventDefault()
        let access_token = localStorage.getItem('accessToken')
        try{
            let response = await axiosAuth({                                                                                                                                                                                                                                                                                                    
                url: '/password/change/',
                method: 'post',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
                data:{
                    "old_password" : old_password,
                    "new_password1": new_password1,
                    "new_password2": new_password2
                }
            })
            
        }catch(error){
            if (error.response.status===401){
                console.log('Unautherized! You can not ')
            }else{
                Object.values(error.response.data).map((err) => {
                    console.log(err)
            })
            }
            
        }
    }

	let contextData = {
        passwordChange :passwordChange,
        passwordReset  :passwordReset,
        setAuthToken   :setAuthToken,
        RegisterNewUser:RegisterNewUser,
        setUserData    :setUserData,
        getUserData    :getUserData,
		logoutUser     :logoutUser,
		authToken      :authToken,
		loginUser      :loginUser,
        userData       :userData,
	}
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
		)
}