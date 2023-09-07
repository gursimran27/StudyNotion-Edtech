import React from 'react'
// import all icon of vsc category
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {

    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route)=>{
      return matchPath({path:route}, location.pathname)
    }; //return match obj else null

  return (
        <NavLink 
        to={link?.path}
        //!HW onClick={}
        className={` ${matchRoute(link?.path) ?
        ("bg-yellow-800 text-yellow-50 "):
        ("bg-opacity-0 text-richblack-300 hover:scale-[1.1] hover:text-yellow-5")}
        relative px-8 py-2 text-sm font-medium  transition-all duration-200
        `}
        >
            {/* left-boder */}
          <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-5 ${
          matchRoute(link.path) ? "bg-opacity-100" : "bg-opacity-0"
          }`}>
          </span>

          <div className="flex items-center gap-x-2">
            <Icon className="text-lg"/>
            <span>{link?.name}</span>
          </div>

        </NavLink>

  )
}

export default SidebarLink