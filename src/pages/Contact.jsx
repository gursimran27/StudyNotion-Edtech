import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import Scroll from "../components/common/Scroll"
import LoadingBar from 'react-top-loading-bar'
import { useEffect,useState } from 'react'



const Contact = () => {

    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        setProgress(1000)
    },[])

  return (
    
    <div className=" mt-14">
      <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() =>(setProgress(0))}
          // height={3}
          loaderSpeed={700}
          waitingTime={1000}
      />
      <Scroll/>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact