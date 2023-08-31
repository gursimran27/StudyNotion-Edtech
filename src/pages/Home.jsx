import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import Highlighttext from '../components/core/HomePage/Highlighttext'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearnngLanguageSection from "../components/core/HomePage/LearnngLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import Footer from "../components/common/Footer"
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {

    useEffect(()=>
    {
        Aos.init({
            duration: 1000,
            offset: 120,
            // delay:50,
            // once:true
        })
    },[])

  return (
    <div className=' mt-14'>

        {/* Section-1 */}
        <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between">

            <div data-aos="slide-down" className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between'>
                <NavLink to={"/signup"}>
                        <div  className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                                <p>Become an Instructor</p>
                                <FaArrowRight/>
                            </div>
                        </div>
                    </NavLink>

                    <div className='text-center text-4xl font-semibold mt-7'>
                        Empower Your Future with
                        <Highlighttext text={"Coding Skills"}/>
                    </div>

                    <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
                    </div>

                    <div className='flex flex-row gap-7 mt-8 mb-8'>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>

                        <CTAButton active={false} linkto={"/login"}>
                            Book a Demo
                        </CTAButton>
                    </div>
            </div>

            

            <div data-aos="slide-up" className=' mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video
                className='shadow-[20px_20px_rgba(255,255,255)]'
                muted
                loop
                autoPlay
                >
                    <source src={Banner} type='video/mp4'></source>
                </video>
            </div>

            {/* code section-1 */}
            <div data-aos="slide-right" className='group'>
                <CodeBlocks 
                    position={" lg:flex-row"}
                    heading={
                        <div className=' text-4xl font-semibold'>
                            Unlock your
                            <Highlighttext text={"Coding potential"}/>
                            with our online courses.
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText:'Try it Yourself',
                            linkto:'/signup',
                            active:true
                        }
                    }
                    ctabtn2={
                        {
                            btnText:'Learn More',
                            linkto:'/login',
                            active:false
                        }
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a></nav>\n</body>`
                    }
                    codeColor={"text-yellow-25"}
                    backgroudGradient={<div className="codeblock1 absolute"></div>}
                />
            </div>

            {/* code section-2 */}
            <div data-aos="slide-left"> 
                <CodeBlocks 
                    position={" lg:flex-row-reverse"}
                    heading={
                        <div className=' text-4xl font-semibold'>
                            Start
                            <Highlighttext text={`coding in seconds`}/>
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={
                        {
                            btnText:'Continue Lesson',
                            linkto:'/signup',
                            active:true
                        }
                    }
                    ctabtn2={
                        {
                            btnText:'Learn More',
                            linkto:'/login',
                            active:false
                        }
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a></nav>\n</body>`
                    }
                    codeColor={"text-blue-25"}
                    backgroudGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>

            <div>
                <ExploreMore/>
            </div>


        </div>


        {/* Section-2 */}
        <div className=' bg-pure-greys-5 text-richblack-700'>

            <div className='homepage-bg h-[310px]'>

                        <div className=' w-11/12 max-w-maxContent flex items-center justify-between mx-auto gap-5  flex-col'>
                            <div className=' lg:h-[40px]'></div>

                            <div className=' flex flex-row gap-7 text-white mx-auto lg:mt-36'>

                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full Course
                                    <FaArrowRight/>
                                </div>
                            </CTAButton>

                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>

                            </div>

                        </div>

            </div>


            <div className=' w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div data-aos="zoom-out" className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>

                    <div className="text-4xl font-semibold lg:w-[45%]">
                        Get the skills you need for about
                        <Highlighttext text={`job that is in demand.`}/>
                    </div>

                    <div className=' flex flex-col items-start gap-10 lg:w-[40%]'>

                        <div className=' text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>

                        <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                        </CTAButton>

                    </div>

                </div>

                <TimelineSection/>

                <LearnngLanguageSection/>
                
            </div>


            

        </div>



        {/* Section-3 */ }
        <div className='flex flex-col justify-between items-center mx-auto w-11/12 max-w-maxContent gap-8 first-letter: bg-richblack-900 text-white'>

          <InstructorSection/>

          <h2 className=' text-center text-4xl font-semibold mt-10 '>Reviews from other learners</h2>

            {/* slider */}


        </div>


        {/* footer */}
        <div className=' mt-7'>
            <Footer/>
        </div>



    </div>
  )
}

export default Home