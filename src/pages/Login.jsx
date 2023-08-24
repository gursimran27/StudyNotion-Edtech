import React from 'react'
import Template from '../components/core/Auth/Template'
import logImg from "../assets/Images/login.webp"

const Login = () => {

  return (
    <div>

          <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow ,and beyond."
            desc2="Education to future-proof your carrer."
            image={logImg}
            formtype="login"
          />

    </div>
  )
}

export default Login