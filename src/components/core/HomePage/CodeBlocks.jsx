import React from 'react'
import Highlighttext from './Highlighttext'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'
import { Tilt } from 'react-tilt'




const CodeBlocks = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroudGradient,codeColor}) => {


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
    <div className={`flex ${position} my-20 lg:gap-10 gap-10 justify-between mx-auto items-center flex-col w-11/12 `}>

        {/* section-1 */}
        <div className="lw-[100%] lg:w-[50%] flex flex-col gap-8">
            {heading}
            <div className=' text-richblack-300 text-base font-bold w-[85%] -mt-3'>
                {subheading}
            </div>


            <div className='flex gap-7 mt-7'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className=' flex gap-2 items-center'>
                        {ctabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                </CTAButton>
            </div>

        </div>
    


        {/* section-2 */}
        
        <div className='h-fit  flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]'>
                {/* HW graident->done */}
                {backgroudGradient}
            

            <Tilt options={defaultOptions} className='h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]'>
                <div className=' text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold '>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}>
                    <TypeAnimation
                        sequence={[codeblock,2000,""]}
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                        speed={50}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"block",
                            }
                        }
                        />

                </div>
            </Tilt>


        </div>
        


    </div>
  );
}

export default CodeBlocks