import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Button = ({linkText, bgColor, textColor, redirectTo, borderColor, paddingX, paddingY}) => {
  return (
      <HashLink smooth to={redirectTo} className={`
        font-bold text-right
        text-[18px] leading-[36.72px] 
        md:text-[30px] md:leading-[61.2px] `}>
        <p className={`border-[3px] cursor-pointer rounded-[14px] ${paddingX ? paddingX : 'px-4'} ${paddingY ? paddingY : 'py-1'} ${bgColor} ${textColor} ${borderColor}  box-border `}>{linkText}</p>
      </HashLink>
  )
}

export default Button;