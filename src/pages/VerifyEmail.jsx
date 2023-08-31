import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/common/Spinner'
import OTPInput from 'react-otp-input'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import {signUp , sendOtp} from "../services/operations/authAPI.js"
import {RxCountdownTimer} from "react-icons/rx"


const VerifyEmail = () => {

    const {loading} = useSelector( (state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {signupData}= useSelector((state)=>state.auth);

    const [otp , setOtp] = useState("");


    useEffect( ()=>{
        if(!signupData){
            // Only allow access of this route when user has filled the signup form
            console.log("signupData not found");
            navigate("/signup");
        }
    },[]); // first Render


   const handleOnSubmit = (e)=>{

    e.preventDefault();

    // destructuring
    const {accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword} = signupData
        
    dispatch(signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
    ));

   }


  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">

        {
          loading ?
          (
            <Spinner/>
          )
          :
          (
            <div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
                    Verify Email
                </h1>
                <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
                    A verification code has been sent to you. Enter the code below
                </p>

                <form onSubmit={handleOnSubmit}>

                <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => 
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
                }
                containerStyle={{
                    justifyContent: "space-between",
                    gap: "0 6px",
                }}
                />

                  <button
                   type='submit'
                   className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900 animate-pulse transition-all duration-200 hover:animate-none"
                   >
                     Verify Email
                   </button>

                    
                </form>

                <div>

                    <div className="mt-6 flex items-center justify-between">
                        <NavLink to={"/login"}>
                            <p className="flex items-center gap-x-2 text-richblack-5"><BiArrowBack/>Back To Login</p>
                        </NavLink>
                        <button 
                        onClick={()=>dispatch(sendOtp(signupData?.email,navigate))}
                        className="flex items-center text-blue-100 gap-x-2"
                        >
                            <RxCountdownTimer />
                            Resent it
                        </button>
                        
                    </div>


                </div>

            </div>
          )
        }

    </div>
  )
}

export default VerifyEmail