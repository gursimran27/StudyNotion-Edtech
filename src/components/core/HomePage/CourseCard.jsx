import React from 'react'
import { Tilt } from 'react-tilt'






const CourseCard = ( { cardData , currentCard , setCurrentCard}) => {

    const changeCard = (heading)=>{
        setCurrentCard(heading)
    }



    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }


  return (
        <Tilt options={defaultOptions} className=' w-[360px] lg:w-[30%]  h-[300px] box-border'>
        <div className={`w-full h-full cursor-pointer hover:bg-white group 
        ${currentCard === cardData?.heading ? `bg-white shadow-[12px_12px_0_0] shadow-yellow-50 ` 
        : `bg-richblack-800  text-richblack-25`}
        transition-all duration-700 
        `}
        onClick={()=>changeCard(cardData?.heading)}
        >

            <div className='border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3'>

                <div className={`font-semibold text-[20px]  group-hover:text-richblack-800 transition-all duration-200
                ${ currentCard === cardData?.heading ? ` text-richblack-800` : null} 
                `}>
                    {cardData?.heading}
                </div>

                <div className='text-richblack-400'>
                    {cardData?.description}
                </div>

            </div>

            <div className=' flex justify-between text-richblack-300 px-6 py-3 font-medium'>
                <div className=' flex flex-row items-center gap-2 text-[16px]'>

                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>

                    <p> { cardData.level }</p>
                </div>

                <div className='flex items-center gap-2 text-[16px]'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 12h-0.25v-3.25c0-0.965-0.785-1.75-1.75-1.75h-4.25v-2h0.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v2h-4.25c-0.965 0-1.75 0.785-1.75 1.75v3.25h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.413 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.337-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75zM3 15h-2v-2h2v2zM9 15h-2v-2h2v2zM7 4v-2h2v2h-2zM15 15h-2v-2h2v2z"></path></svg>

                    <p>{`${cardData.lessionNumber}  lesson`}</p>

                </div>

            </div>


        </div>
        </Tilt>
  )
}

export default CourseCard