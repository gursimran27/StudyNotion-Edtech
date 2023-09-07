import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'

const RenderTotalAmount = () => {

    const {total,cart}=useSelector((state)=>state.cart)


    const handleByCourse = ()=>{
        // fetch all courses id that user want to buy from cart
        const course= cart.map( (course)=>course._id)   //return a new array of id
        console.log("Bought these courses..", course);
        // TODO API integrate->payment gateway
    }

  return (
    <div>

        <p>Total:</p>
        <p>Rs {total}</p>


        <IconBtn 
          text={"Buy Now"}
          onclick={handleByCourse}
          customClasses="w-full justify-center"
          />

    </div>
  )
}

export default RenderTotalAmount