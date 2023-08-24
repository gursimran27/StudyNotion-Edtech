import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


const timeline = [
    {
        logo:Logo1,
        Heading:"Leadership",
        Description:`Fully commited to the success company`
    },
    {
        logo:Logo2,
        Heading:"Responsibility",
        Description:`Students will always be our top priority`
    },
    {
        logo:Logo3,
        Heading:"Flexibility",
        Description:`The ability to switch is an important skills`
    },
    {
        logo:Logo4,
        Heading:"Solve the problem",
        Description:`Code your way to a solution`
    },
]

const TimelineSection = () => {


    useEffect(()=>
    {
        Aos.init({
            duration: 2000,
            offset: 100,
            // delay:50
        })
    },[])



  return (
    <div data-aos="zoom-out" className=' max-w-maxContent mx-auto '>

        <div className=' flex flex-col lg:flex-row gap-14 items-center'>

            {/* section-1 */}
            <div className=' flex flex-col lg:w-[45%] w-full gap-5 mx-auto'>

                {
                    timeline.map((element , index)=>{
                        return(
                            <div key={index} className='flex flex-col lg:gap-3 gap-20'>
                                <div className='flex flex-row gap-6 ' >

                                    <div className='w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]'>
                                        <img src={element?.logo}/>
                                    </div>

                                    <div className='flex flex-col items-start'>
                                        <h2 className=' font-semibold text-[18px]'>{element?.Heading}</h2>
                                        <p className=' text-base'>{element.Description}</p>
                                    </div>

                                </div>

                                {
                                    index!==3?<div class="hidden lg:block  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]"></div>:
                                    null
                                }

                            </div>
                        )
                    })
                }

            </div>


            {/* section-2 */}
            <div className='relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]'> 

                <div className='absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10'>

                    <div className=' flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14'>
                        <p className=' text-3xl font-bold w-[75px]'>10</p>
                        <p className=' text-caribbeangreen-300 text-sm w-[75px]'>YEARS EXPERIENCES</p>
                    </div>

                    <div className='flex gap-5 items-center lg:px-14 px-7'>
                        <p className=' text-3xl font-bold w-[75px]'>250</p>
                        <p className=' text-caribbeangreen-300 text-sm w-[75px]'>TYPES OF COURSES</p>
                    </div>

                </div>

                {/* HW-blog->done */}
                <img src={timelineImage}
                alt='timelineImage'
                className=' shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit'
                />


            </div>

        </div>

    </div>
  )
}

export default TimelineSection