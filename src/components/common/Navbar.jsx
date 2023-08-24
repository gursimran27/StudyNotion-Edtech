import React from 'react'
import { NavLink, matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'


const Navbar = () => {

    // destructuring
    const {token} = useSelector( (state)=>state.auth)
    const {user} = useSelector( (state)=>state.profile)
    const totalItems = useSelector( (state)=>state.cart.totalItems)




    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath( {path:route} , location.pathname)
    }

  return (

    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>

        <div className=' flex w-11/12 max-w-maxContent items-center justify-between'>

            {/* image-logo */}
            <NavLink to={"/"}>
                <img 
                    src={logo}
                    width={160}
                    height={42}
                    loading='lazy'
                    />
            </NavLink>


            {/* Nav-link */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map( (ele,index)=>{
                            return(
                                <li key={index}>
                                    {
                                        ele.title === "Catalog" ? 
                                            <div></div>
                                        :
                                            <NavLink to={ele.path}>
                                                <p
                                                className={`${matchRoute(ele.path) ? ` text-yellow-25` : ` text-richblack-25`}`}>
                                                    {ele.title}
                                                </p>
                                            </NavLink>
                                        
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>


            {/* Login/SignUp/Dashboard*/}

            <div className='flex gap-x-4 items-center'>

                {
                    user && user?.acountType!="Instructor" &&
                       <NavLink to={"/dashboard/cart"} className='relative'>
                           <AiOutlineShoppingCart/>
                           {
                            totalItems>0 && 
                                <span className=''>
                                   {totalItems}
                                </span>
                            
                           }
                       </NavLink>
                }

                {
                    token ==null && 
                        <NavLink to={"/login"}>

                            <button className=' rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-yellow-5 hover:scale-95 transition-all duration-200 hover:border-none'>
                                Log in
                            </button>

                        </NavLink>                  
                }

                {
                    token ==null && 
                        <NavLink to={"/signup"}>

                            <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-yellow-5 hover:scale-95 transition-all duration-20 hover:border-none'>
                                Sign Up
                            </button>

                        </NavLink>
                }

                {
                    token!=null && 
                        <ProfileDropDown/>    
                }

            </div>

        </div>
    
    </div>
  )
}

export default Navbar