import React from 'react'
import Highlighttext from "../components/core/HomePage/Highlighttext"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"
import Scroll from "../components/common/Scroll"
import LoadingBar from 'react-top-loading-bar'
import { useEffect } from 'react'
import { useState } from 'react'
import { Tilt } from 'react-tilt'


 

const About = () => {


    const defaultOptions = {
        reverse:false,  // reverse the tilt direction
        max:35,     // max tilt rotation (degrees)
        perspective:1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset:  true,    // If the tilt effect has to be reset on exit.
        easing:"cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        setProgress(100)
    },[])

  return (

    // here i have not set the root div width as w-11/12 insted of this i had mentioned in each section
    <>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() =>(setProgress(0))}
          // height={3}
          loaderSpeed={700}
          waitingTime={1000}
        />

        <Scroll/>

        <div className=' mt-14'>

            {/* Section-1 */}
            <section className="bg-richblack-700 select-none">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                
                    <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"> 

                        Driving Innovation in Online Education for a <Highlighttext text={"Brighter Future"} />

                        <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                            Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                        </p>
                    </header>

                    <div className="sm:h-[70px] lg:h-[150px]"></div>

                    <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                        <Tilt options={defaultOptions}>
                        <img 
                        src={BannerImage1}
                        alt='bannerImage1'
                        loading='lazy'
                        />
                        </Tilt>
                        <Tilt options={defaultOptions}>
                        <img 
                        src={BannerImage2}
                        alt='bannerImage2'
                        loading='lazy'
                        />
                        </Tilt>
                        <Tilt options={defaultOptions}>
                        <img 
                        src={BannerImage3}
                        alt='bannerImage3'
                        loading='lazy'
                        />
                        </Tilt>
                    </div>
                    

                </div>
            </section>


            {/* Section-2 */}
            <section className="border-b border-richblack-700 select-none">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                <div className="h-[100px] "></div>
                    <Quote/>
                </div>
            </section>


            {/* Section-3 */}
            <section >
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500 select-none">

                    {/* Founding Story walla div*/}
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">

                        {/* left-one */}
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                            Our Founding Story
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                            </p>

                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                            </p>
                        </div>

                        {/* right-one */}
                        <div>
                           <Tilt options={defaultOptions}>
                            <img
                            src={FoundingStory}
                            alt='FoundingStory'
                            loading='lazy'
                            className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                            />
                           </Tilt>
                        </div>

                    </div>

                    {/* Vision and Mission  walla div */}
                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">

                        {/* left-one */}
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our VisionOur Vision
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                            </p>
                        </div>

                        {/* right-one */}
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                                <Highlighttext text={'Our Mission'}/>
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                            Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.  
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Section-4 */}
            <div className=' select-none'>
                <StatsComponent/>
            </div>


            {/* Section-5 */}
            <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white ">
                <LearningGrid/>
                <ContactFormSection/>
            </section>


            <section>
                <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                {/* Reviws from Other Learner */}
                    <h1 className="text-center text-4xl font-semibold mt-8">
                        Reviews from other learners
                    </h1>

                    {/* <ReviewSlider /> */}
                </div>
            </section>


            <Footer/>


        </div>
    </>
  )
}

export default About