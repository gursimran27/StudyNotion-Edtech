import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/common/Spinner'
import {resetPassword} from "../services/operations/authAPI"
import { useLocation, useNavigate } from 'react-router-dom'
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const UpdatePassword = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const loading = useSelector( (state)=>state.auth.loading)
    const [showPassword , setShowPassword]=useState(false);
    const [showConfirmPassword , setShowConfirmPassword]=useState(false);
    

    const [formData , setFormData]=useState(
        {
            Password:'',
            confirmPassword:'',
        }
    )

    const {Password,confirmPassword} = formData;

    const onChange = (e)=>{
        
        setFormData( (prev)=>{
            return { //return an object
              ...prev,
                [e.target.name]:e.target.value,
            }
        })

    }

    const handleOnSubmit = (e)=>{

        e.preventDefault()
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(Password,confirmPassword,token,navigate))
    }



  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
    {
        loading ?
        (
            <Spinner/>
        )
        :
        (
            <div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">Choose new Password</h1>
                <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">Almost done. Enter your new password and you are all set.</p>

                <form onSubmit={handleOnSubmit}>

                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        New Password <sup className="text-pink-200">*</sup></p>
                        <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={Password}
                        onChange={onChange}
                        placeholder="Enter Password"
                        className="form-style w-full !pr-10"
                        />

                          <span
                           onClick={(e)=>setShowPassword(!showPassword)}
                          //(prev)=>setShowConfirmPassword(!prev)
                          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                          >
                            {
                                showPassword ?
                                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
                                :
                                <AiFillEye fontSize={24} fill="#AFB2BF" />
                            }
                          </span>
                    </label>

                    <label className="relative mt-3 block">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input
                          type={
                            showConfirmPassword? 'text' : 'password'
                          }
                          required
                          name='confirmPassword'
                          value={formData?.confirmPassword}
                          onChange={onChange}
                          placeholder='Confirm Password'
                          className="form-style w-full !pr-10"
                          />

                          <span
                          onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                          //(prev)=>setShowConfirmPassword(!prev)
                          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                          >
                            {
                                showConfirmPassword ?
                                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
                                :
                                <AiFillEye fontSize={24} fill="#AFB2BF" />
                            }
                          </span>

                    </label>

                    <button 
                    type='submit'
                    className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900 animate-pulse transition-all duration-200 hover:animate-none"
                    >
                        Rest Password
                    </button>

                </form>

                <div className="mt-6 flex items-center justify-between">
                    <NavLink to={"/login"}>
                        <p className="flex items-center gap-x-2 text-richblack-5"><BiArrowBack/>Back To Login</p>
                    </NavLink>
                </div>

            </div>
        )
    }

    </div>
  )
}

export default UpdatePassword