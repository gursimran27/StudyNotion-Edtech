import React from 'react'
import Highlighttext from '../HomePage/Highlighttext';
import CTAButton from "../HomePage/Button"


const LearningGridArray = [
    // the logic of giving order here is that so based on order i can make some conditions on div.
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];


const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">

        {
            LearningGridArray.map( (ele,index)=>{
                return(
                    <div 
                    key={index}
                    className={`

                    ${index===0 && " xl:col-span-2 xl:h-[294px]"}
                    
                    ${
                    ele.order % 2 === 1
                     ? "bg-richblack-700 h-[294px]"
                     : ele.order % 2 === 0
                     ? "bg-richblack-800 h-[294px]"
                     : "bg-transparent"
            }

                    ${
                        ele.order==3 && 
                        " xl:col-start-2"
                    }
                    `}
                    >
                     {
                        ele.order < 0?
                        <div
                        className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0"
                        >
                             <div className="text-4xl font-semibold ">
                                {ele.heading}
                                <Highlighttext text={ele.highlightText}/>
                            </div>
                            <p className="text-richblack-300 font-medium"> 
                                {ele.description}
                            </p>
                            <div className="w-fit mt-2">
                                <CTAButton
                                 active={true}
                                 linkto={ele.BtnLink}>
                                    {ele.BtnText}
                                 </CTAButton>
                            </div>
                        </div>
                        :
                        <div className="p-8 flex flex-col gap-8">
                            <h1 className="text-richblack-5 text-lg">
                                {ele.heading}
                            </h1>
                            <p className="text-richblack-300 font-medium">
                                {ele.description}
                            </p>
                        </div>

                     }
                            
                    </div>
                )
            })
        }

    </div>
  )
}

export default LearningGrid