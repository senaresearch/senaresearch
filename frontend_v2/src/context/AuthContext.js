import {createContext, useState, useEffect} from 'react'
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
	const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? window.localStorage.getItem('authToken') : null)

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
            window.localStorage.setItem('authToken', response.data['auth_token'])
            setAuthToken(response.data['auth_token'])
            navigate('/dashboard/info')
        }).catch((error)=>{
            console.log('error')
            console.log(error)
        })
    }
    // const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('userData')) ? JSON.parse(window.localStorage.getItem('userData')) : null)
    const [userData, setUserData] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userData");
        const initialValue = JSON.parse(saved);
        return initialValue || {};
      });
    // const getUserData = ()=>{
    //     axiosAuth({                                                                                                                                                                                                                                                                                                    
    //         url: '/users/me/',
    //         method: 'get',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Authorization': `Token ${authToken}`
    //         },
    //     }
    //     ).then((response)=>{
    //         window.localStorage.setItem('userData', JSON.stringify(response.data))
    //         setUserData(response.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    const getUserData = async ()=>{
        try {
            const response = await axiosAuth({                                                                                                                                                                                                                                                                                                    
                url: '/users/me/',
                method: 'get',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authToken}`
                }
            })
            localStorage.setItem('userData', JSON.stringify(response.data))
            setUserData(response.data)
            console.log('first rendering')
        }catch(exeption){
            console.log('error')
        }
    }

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

    const logoutUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/logout/',
            method: 'post',
        }
        ).then((response)=>{
            window.localStorage.removeItem('accessToken')
            window.localStorage.removeItem('user')
            // setUser(null)
            setAuthToken(null)
            // It's recommended to use redirect in loaders and actions rather than useNavigate in your components, 
            // When the redirect is in response to data
            navigate('onboard')
            console.log('You loged out successfully.')
        }).catch((err)=>{
            console.log("this is error")
            console.log('Something went wrong when you logged out')
        })
    }

    const passwordChangeHandl = async (e, old_password, new_password1, new_password2) => {
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
        userData:  userData,
		authToken: authToken,
        getUserData: getUserData,
		loginUser: loginUser,
		logoutUser:logoutUser,
        RegisterUser:  RegisterUser,
        passwordReset: passwordReset,
        passwordChangeHandl:passwordChangeHandl,
	}
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
		)
}