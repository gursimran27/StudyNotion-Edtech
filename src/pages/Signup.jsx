import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImg from "../assets/Images/signup.webp"

const Signup = () => {
  return (
    <div>

        <Template
          title="Join the million learning to code with StudyNotion for free"
          desc1="Build Skills for today, tomorrow, and beyond"
          desc2="Education to future-proof your carrer"
          image={signupImg}
          formtype="signup"
        />

    </div>
  )
}

export default Signup