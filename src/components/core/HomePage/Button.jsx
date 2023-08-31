import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({children ,active,linkto}) => {
  return (
    <NavLink to={linkto}>

        <div className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
        ${active ? `bg-yellow-50 text-black` : `bg-richblue-800`}
        hover:scale-95 hover:shadow-none animate-pulse hover:animate-none transition-all duration-200
        `}>
            {children}
        </div>

    </NavLink>
  )
}

export default Button