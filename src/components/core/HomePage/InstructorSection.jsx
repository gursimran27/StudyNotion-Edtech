import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import Highlighttext from './Highlighttext'
import CTAbutton from "../../../components/core/HomePage/Button"
import { FaArrowRight } from "react-icons/fa"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'



const InstructorSection = () => {

    useEffect(()=>
    {
        Aos.init({
            duration: 2700,
            offset: 100,
            // delay:50
        })
    },[])




  return (
    <>
        <div className=' mt-32 flex flex-col lg:flex-row gap-20 items-center'>
        
            {/* section-1 */}
            <div data-aos="fade-right" className=' lg:w-[50%] w-full'>
                <img src={Instructor}              
                alt='instructorImage'
                loading="lazy"
                className='shadow-white shadow-[-20px_-20px_0_0]'
                />
            </div>

            {/* section-2 */}
            <div data-aos="fade-left" className='lg:w-[50%] flex gap-10 flex-col'>


                <div className=' lg:w-[50%] text-4xl font-semibold '>
                    Become an
                    <Highlighttext text={"Instructor"}/>
                </div>

                <p className=' font-medium text-[16px] text-justify w-[90%] text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>

                <div className=' w-fit'>
                    <CTAbutton active={true} linkto={"/signup"}>
                        <div className=' flex items-center gap-2 t'>
                            <span>Start Teaching toady</span>
                            <FaArrowRight/>
                        </div>
                    </CTAbutton>
                </div>

            </div>

        </div>
    </>
  )
}

export default InstructorSection