import React from 'react'

const Highlighttext = ( {text}) => {
  return (
    <span className='font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  bg-clip-text text-transparent'>
        {" "}
        {text}
        {" "}
    </span>
  )
}

export default Highlighttext