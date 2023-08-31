import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import apiConnector from "../../services/apiconnector"
import contactusEndpoint from "../../services/apis"
import CountryCode from "../../data/countrycode.json"
import Spinner from "../common/Spinner"

const ContactUsForm = () => {

    const [loading , setLoading] = useState(false);
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors , isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data)=>{
        console.log("logging Data...", data);

        try {
            setLoading(true)
            // const response = apiConnector("POST" , contactusEndpoint.CONTACT_US_API, data);
            const response = { status:"ok"}
            console.log("logging response...", response);
        } catch (error) {
            console.log("ERROR..", error.message);
        }
        setLoading(false);  

    };


    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            firstname: "",
            lastname: "",
            message: "",
            phoneNo: "",
          })
        }
      }, [reset, isSubmitSuccessful])
  



  return (
    <div>
    <form onSubmit={handleSubmit(submitContactForm)}  className="flex flex-col gap-7">

        {/* first and last Name */}
        <div className="flex flex-col gap-5 lg:flex-row">
            {/* firstName->required */}
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor='firstname'  className="lable-style">
                    First Name
                </label>
                    <input
                    type='text'
                    name='firstname'
                    id='firstname'
                    placeholder="Enter first name"
                    className="form-style"
                    {...register("firstname",{required:true})}
                    />
                    {/* error handling of above input */}
                    {
                        errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your name 
                            </span>
                        )
                    }
            </div>


            {/* lastName->optional  */}
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor='lastname'  className="lable-style">
                    Last Name
                </label>
                    <input
                    type='text'
                    name='lastname'
                    id='lastname'
                    className="form-style"
                    placeholder='Enter last name'
                    {...register("lastname")}
                    />
            </div>

        </div>


        {/* email */}
        <div className="flex flex-col gap-2">
            <label  className="lable-style" htmlFor='email'>Email Address</label>
            <input
                type="email"
                name="email"
                id="email"
                className="form-style"
                placeholder="Enter email address"
                // register the field with validation rules
                {...register("email",{required:true})}
                />
                {/* error handling for above input */}
                {
                errors.email && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your email address
                    </span>
                    )
                }

        </div>  


        {/* phone-number */}
        <div className="flex flex-col gap-2">
            
            <label  className="lable-style" htmlFor='phonenumber'>Phone Number</label>

            <div className="flex gap-5">
            <div className="flex w-[80px] flex-col gap-2">
                {/* dropDown */}

                    <select
                    type='text'
                    name='dropdown'
                    id='dropdown'
                    className="form-style"
                    {...register("countrycode",{required:true})}
                    >
                    {
                        CountryCode.map((ele,index)=>{
                            return(
                                <option key={index} value={ele.code}
                                className='' 
                                >
                                    {ele.code} -{ele.country}
                                </option>
                            )
                        })
                    }

                    </select>
                </div>



                {/* number */}
                <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                    <input
                    type='number'
                    name='phonenumber'
                    id='phonenumber'
                    placeholder='12345-67890'
                    className="form-style"
                    {...register("phoneNo",
                    {
                    required:{value:true , message:"Please enter Phone Number"}, 
                    maxLength:{value:12 , message:"Invalid Phone Number"},
                    minLength:{value:10, message:"Invalid Phone Number"}
                    })}
                    />
                </div>
            </div>
            {
                errors.phonenumber && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                         {errors.phoneNo.message}
                    </span>
                )
            }
            
        </div>

        
        {/* message */}
        <div  className="flex flex-col gap-2">
             <label htmlFor='message' className="lable-style">Message</label>
            <textarea
                name='message'
                id='message'
                cols="30"
                rows="7"
                className="form-style"
                placeholder='Enter Your Message Here'
                {...register("message",{required:true})}
                />
                {/* error handling for above textarea */}
                {
                errors.message && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                         Please enter your message
                     </span>
                    )
                }
        </div>


        <button
         disabled={loading}
        type='submit'
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] animate-pulse
         ${
           !loading &&
           "transition-all duration-200 hover:animate-none hover:scale-95 hover:shadow-none"
         } 
          disabled:bg-richblack-500 sm:text-[16px] `}
        >
            Send Message
        </button>

    </form>

    {
        loading && (
            <div className=' mx-auto'>
                <Spinner/>
            </div>
        )
    }

    
  </div>
  )
}

export default ContactUsForm