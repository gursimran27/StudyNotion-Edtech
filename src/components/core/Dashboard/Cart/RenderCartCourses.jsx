import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component";
import { removeFromCart } from '../../../../slices/cartSlice';




const RenderCartCourses = () => {

    const {cart}= useSelector((state)=>state?.cart)
    const dispatch= useDispatch()

  return (
    <div>

        {
            cart.map((course,index)=>{
                return(
                    <div
                    key={index}
                    >
                        {/* left-part */}
                        <div>
                            <img
                            src={course?.thumbnail}
                            />
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>
                            <div>
                               <span>4.5</span>   //!.........HW fetch average rating..........
                               <ReactStars
                                count={5}
                                value={course?.ratingAndReviews?.length}
                                size={20}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                               />

                                <span>{course?.ratingAndReviews?.length} Ratings</span>

                            </div>
                        </div>


                        {/* right-part */}
                        <div>
                            <button
                            onClick={()=>dispatch(removeFromCart(course?._id))}
                            >
                                <RiDeleteBin6Line/>
                                <span>Remove</span>
                            </button>
                            
                            <p>Rs {course?.price}</p>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default RenderCartCourses