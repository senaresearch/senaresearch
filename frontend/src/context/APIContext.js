import {createContext, useState} from 'react'
import {axiosAPI} from '../axios'
import {useNavigate} from 'react-router-dom'


const APIContext = createContext();
export default APIContext;

export const APIProvider = ({children})=>{
    const navigate = useNavigate()
    const [categories, setCategories] = useState(null)
    const get_categories = async ()=>{
        try{
            const { data } = await axiosAPI({
                url: `/categories`,
                method: 'GET',
                header: {
                    "Content-Type": "application/json",
                }
            })
            setCategories(data)
        }catch(error){
            console.log(error)
        }
    }
    let contextData = {
        get_categories: get_categories,
        setCategories : setCategories,
        categories    : categories
	}
    return (
        <APIContext.Provider value={contextData}>
            {children}
        </APIContext.Provider>
    )
}