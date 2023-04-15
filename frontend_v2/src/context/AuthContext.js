import {createContext, useState} from 'react'
import {axiosAuth} from '../axios'
import {useNavigate} from 'react-router-dom'
// import {toast } from 'react-toastify';



const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    // const notifyError = (message) => toast.error(message, {
    //     position: "top-left",
    //     autoClose: 6000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });
    // const notifySuccess = (message) => toast.success(message, {
    //     position: "top-left",
    //     autoClose: 6000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });
    // const notifyWarning = (message) => toast.warning(message, {
    //     position: "top-left",
    //     autoClose: 6000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });
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
            localStorage.setItem('authToken', response.data['auth_token'])
            setAuthToken(response.data['auth_token'])
            navigate('/dashboard/info')
        }).catch((error)=>{
            console.log(error)
        })
    }
    const [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)
    // const [userData, setUserData] = useState(null);
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
            localStorage.setItem('userData', JSON.stringify(response.data))
            setUserData(response.data)
        }).catch((error)=>{
            console.log(error.reponse.data)
        })
    }

    // const getUserData = async ()=>{
    //     try {
    //         const response = await axiosAuth({                                                                                                                                                                                                                                                                                                    
    //             url: '/users/me/',
    //             method: 'get',
    //             headers:{
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Token ${authToken}`
    //             }
    //         })
    //         setUserData(response.data)
    //         localStorage.setItem('userData', JSON.stringify(response.data))
    //     }catch(ErrorExeption){
    //         console.log(ErrorExeption)
    //     }
    // }

    const RegisterUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/registration/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": e.target.email.value,
                "password1": e.target.password_1.value,
                "password2": e.target.password_2.value,
                "first_name": 'e.target.password.value',
                "last_name": 'e.target.password.value',
            }
        }
        ).then((response)=>{
            navigate('/')
            console.log('A verification Email have sent successfully, take a look.')
        }).catch((error)=>{
            let data = error.response.data
            console.log(data)
            
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
            console.log('You loged out successfully.')
        }).catch((err)=>{
            console.log("this is error")
            console.log('Something went wrong when you logged out')
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
        RegisterUser   :RegisterUser,
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