import React, { useEffect, useState } from 'react'
import { NavLink, matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis'
import {BsChevronDown} from "react-icons/bs"


// //Mock data for testing
// const subLinks = [
//     {
//         title:"python",
//         link:"/catalog/python"
//     },
//     {
//         title:"web-devdelopment",
//         link:"/catalog/web-development"
//     },
// ]


const Navbar = () => {

    // destructuring
    const {token} = useSelector( (state)=>state.auth)
    const {user} = useSelector( (state)=>state.profile)
    const totalItems = useSelector( (state)=>state.cart.totalItems)

    const [loading, setLoading] = useState(false);

    const [subLinks , setSubLinks]= useState([]);
    

    const fetchSublinks = async()=>{
        setLoading(true)
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log(`Printing Sublinksresults:` , result);
            setSubLinks(result.data.data)
            
        } catch (error) {
            console.log(`Could not fetch the category list`);
        }
        setLoading(false)
    }


    // API cal
    useEffect(()=>{
       fetchSublinks();
    },[]); //first-Render




    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath( {path:route} , location.pathname)
    }

    // console.log("token",token);

  return (

    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  w-screen z-[1000]
    ${ location.pathname !== "/" ? "bg-richblack-800" : "" }
    ${ location.pathname === "/" ?
       "fixed w-screen z-[1000]  bg-richblack-900" : "" }
     ${ location.pathname === "/about" ?
     "fixed w-screen z-[1000]  bg-richblack-700" : "" }  
     ${location.pathname === "/contact" || matchRoute("/catalog/:catalogName") ||  matchRoute("/courses/:couseId") ? "fixed w-screen z-[1000]  bg-richblack-800" : "" } 
     transition-all duration-200`}>

        <div className= {`flex fixed ${
        location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-900"
        } z-40 lg:relative  w-[100%] h-[8%] border-b-[1px] lg:border-none border-b-richblack-500  lg:w-11/12 
        max-w-maxContent items-center justify-between`}>

            {/* image-logo */}
            <NavLink to={"/"}>
                <img 
                    src={logo}
                    width={160}
                    height={42}
                    loading='lazy'
                    alt="Study-Notin"
                    />
            </NavLink>


            {/* Nav-link */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map( (ele,index)=>{
                            return(
                                <li key={index} className={`group hover:scale-[1.1] transition-all duration-200 ${ele.path && matchRoute(ele?.path)? (`animate-pulse hover:animate-none`): (null)}`}>
                                    {
                                        ele.title === "Catalog" ? 
                                            <div className='group relative flex cursor-pointer items-center gap-1 text-richblack-25'>
                                                
                                                <p className=' group-hover:text-yellow-5 group-hover:opacity-70 transition-all duration-200'>{ele.title}</p>
                                                <BsChevronDown className=' group-hover:text-yellow-5 group-hover:opacity-70 transition-all duration-200'/>

                                                <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>

                                                    {/* Diamond-div */}
                                                    <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5 :'></div>

                                                    {
                                                        loading ? (
                                                            <p className="text-center ">Loading...</p>)
                                                            :
                                                            subLinks.length ? 
                                                             subLinks.map( (ele,index)=>{
                                                                return(
                                                                    <NavLink to={`/catalog/${ele.name.split(" ").join("-").toLowerCase()}`} 
                                                                    key={index} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">
                                                                        {ele.name}
                                                                    </NavLink>
                                                                )
                                                             })
                                                        :
                                                        <p className="text-center">No Course Found</p>
                                                    }

                                                </div>


                                            </div>
                                        :
                                            <NavLink to={ele.path}>
                                                <p
                                                className={`
                                                group-hover:text-yellow-5 group-hover:opacity-70 transition-all duration-200
                                                ${matchRoute(ele.path) ? ` text-yellow-25` : ` text-richblack-25`}`}>
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
                    user && user?.accountType!="Instructor" &&
                       <NavLink to={"/dashboard/cart"} className='relative group'>
                           <AiOutlineShoppingCart className={`text-2xl text-richblack-100 group-hover:text-yellow-5 group-hover:opacity-70 group-hover:scale-[1.1] transition-all duration-200 
                           ${matchRoute("/dashboard/cart") ? ` text-yellow-25` : ` text-richblack-25`}
                           `} />
                           {
                            totalItems >0 && 
                                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100 animate-bounce">
                                   {totalItems}
                                </span>
                            
                           }
                       </NavLink>
                }

                {
                    token ==null && 
                        <NavLink to={"/login"}>

                            <button className= {`rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-yellow-5 hover:scale-95 transition-all duration-200 hover:border-none
                            ${matchRoute("/login") ? ` text-yellow-25` : ` text-richblack-25`}
                            `}>
                                Log in
                            </button>

                        </NavLink>                  
                }

                {
                    token ==null && 
                        <NavLink to={"/signup"}>

                            <button className={`rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-yellow-5 hover:scale-95 transition-all duration-20 hover:border-none
                            ${matchRoute("/signup") ? ` text-yellow-25` : ` text-richblack-25`}
                            `}>
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