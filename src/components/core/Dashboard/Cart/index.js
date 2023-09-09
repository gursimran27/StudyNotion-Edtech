import React from "react"
import { useSelector } from "react-redux"
import RenderCartCourse from "./RenderCartCourses"
import RenderToatalAmount from "./RenderTotalAmount"


export default function Cart(){

  const {total, totalItems} = useSelector((state)=>state.cart)

  return(
    <>
      <h1 className="mb-14 text-3xl  text-richblack-5 select-none font-bold bg-gradient-to-tr from-[#ff1f41] via-[#bcfa12] to-[#A6FFCB]  bg-clip-text text-transparent animate-pulse">Your Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2  text-richblack-400 select-none font-semibold bg-gradient-to-tr from-[#1fff6d]  to-[#b6a6ff]  bg-clip-text text-transparent">{totalItems} Courses in Cart</p>

      {
        total>0 ?
        (
          <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
            <RenderCartCourse/>
            <RenderToatalAmount/>
          </div>
        ):(
          <p className="mt-14 text-center text-3xl text-richblack-100 select-none font-bold bg-gradient-to-tl from-[#ffda1f] via-[#fa1212] to-[#293cec]  bg-clip-text text-transparent" >Your Cart is Empty</p>
        )
      }
    </>
  )
}