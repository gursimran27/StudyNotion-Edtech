import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    // use https://www.cssportal.com/css-loader-generator/ for loader
    <div className='flex flex-col items-center space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-3xl font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  bg-clip-text text-transparent '>Loading...</p>
    </div>
    
  );
}

export default Spinner