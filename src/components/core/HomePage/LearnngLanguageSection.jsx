import React from 'react'
import { useEffect } from 'react'
import Highlighttext from './Highlighttext'
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Compare_with_others from "../../../assets/Images/Compare_with_others.png"
import Plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAbutton from "../../../components/core/HomePage/Button"
import Aos from 'aos'
import "aos/dist/aos.css"

const LearnngLanguageSection = () => {


    useEffect(()=>
    {
        Aos.init({
            duration: 2000,
            offset: 120,
            // delay:50
        })
    },[])



  return (
    <div data-aos="flip-right" className=' mt-[130px] overflow-y-hidden'>

        <div className=' flex flex-col gap-3'>

            <div className=' text-4xl font-semibold text-center my-10'>
                Your swiss knife for
                <Highlighttext text={`learning any language`}/>
            </div>

            <div className='text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
                    <img src={Know_your_progress}
                    alt='knowyourprogressImage '
                    className=' object-contain  lg:-mr-32 '
                    />
                    <img src={Compare_with_others}
                    alt='comparewithothersImage '
                    className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'
                    />
                    <img src={Plan_your_lesson}
                    alt='planyourlessonImage '
                    className=' object-contain  lg:-ml-36 lg:-mt-5 -mt-16'
                    />
            </div>

            <div className=' w-fit mx-auto lg:mb-2 mb-8 mt-4'>
                <CTAbutton active={true} linkto={"/signup"}>
                    Learn More
                </CTAbutton>
            </div>



            <div className=' h-20'></div>

        </div>

    </div>
  )
}

export default LearnngLanguageSection