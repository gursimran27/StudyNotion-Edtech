import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from "../components/common/Spinner"
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { getPasswordResetToken } from "../services/operations/authAPI.js"

const ForgotPassword = () => {

    const [emailSent , setEmailSent ] =useState(false) // to decide out of 2 UI which one to show to User
    const [email , setEmail] = useState("");
    // destructure
    const {loading} = useSelector( (state)=>state.auth)
    // console.log("loading in forgotPassword......",loading);
    const dispatch = useDispatch()


    const handleOnSubmit = (e)=>{

        e.preventDefault()
        dispatch(getPasswordResetToken(email,setEmailSent));

    }


  return (
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
        {
            loading ?
                <Spinner/>
            :(
                <div className="max-w-[500px] p-4 lg:p-8">

                    <h1  className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                        {
                            !emailSent ? "Reset Your Password"
                            : "Check Email"
                        }
                    </h1>

                    <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
                        {
                            !emailSent? 
                            "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                            :
                            `We have sent the reset email to ${email}`
                        }
                    </p>

                        <form onSubmit={handleOnSubmit}>
                            {
                                !emailSent && 
                                    <label className="w-full">
                                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address:<sup className="text-pink-200">*</sup>
                                        </p>

                                        <input
                                         required
                                         type='emial'
                                         name='email'
                                         value={email}
                                         onChange={(e)=> setEmail(e.target.value)}
                                         placeholder='Enter Your Email Address'
                                         className="form-style w-full"
                                        />

                                    </label>
                                
                            }-

                            <button 
                            type='submit'
                            className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900 animate-pulse"
                            >
                                {
                                    !emailSent? "Reset Password"
                                    : "Resend Email"
                                }
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

export default ForgotPassword