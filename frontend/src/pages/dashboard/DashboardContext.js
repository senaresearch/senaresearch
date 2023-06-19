import {createContext, useState } from "react";

const DahsboardContext = createContext()
export default DahsboardContext

export const DahsboardProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <DahsboardContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </DahsboardContext.Provider>
    )
}