import React, { useState , useEffect} from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import Highlighttext from './Highlighttext'
import CourseCard from '../../../components/core/HomePage/CourseCard'
import Aos from 'aos'
import "aos/dist/aos.css"


const tabName =[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]


const ExploreMore = () => {

    
    useEffect(()=>
    {
        Aos.init({
            duration: 2500,
            offset: 120,
            delay:20
        })
    },[])



    const [currentTab , setCurrentTab] = useState(tabName[0])
    const [courses , setCourses]= useState(HomePageExplore[0].courses)
    const [currentCard, setCurrentCard]= useState(HomePageExplore[0].courses[0].heading)

    const setMyCard = (value)=>{

            setCurrentTab(value);

            const result = HomePageExplore.filter( (element)=> element?.tag ===value);

            setCourses(result[0].courses);
            
            setCurrentCard(result[0].courses[0].heading)
    }




        return (
            <div data-aos="fade" className=' flex flex-col items-center'>
        
                <div className=' text-4xl font-semibold text-center'>
                    Unlock the<Highlighttext text={"Power of code"}/>
                </div>

                <p className=' text-center text-richblack-300 text-lg font-semibold'>
                    Learn to Build Anything You Can Imagine
                </p>


                <div className='hidden lg:flex gap-5 mt-5  mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]'>
                    {
                        tabName.map((element,index)=>{
                            return(
                                <div 
 
                                key={index} className={` select-none text-[16px] flex flex-row items-center gap-2
                                ${currentTab===element ? "bg-richblack-900 text-richblack-5 font-medium px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer" 
                                :" text-richblack-200 rounded-full transition-all duration-200 cursor-default hover:bg-richblack-900 hover:text-richblack-5 px-7 py-[7px]"
                                }
                                `}
                                onClick={()=> setMyCard(element)}
                                >
                                    {element}
                                </div>
                            )
                        })
                    }
                </div>


                <div className=' lg:h-[250px]'></div>


                {/* course card ka group */}
                <div className='lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3'>
                    {
                        courses.map((element ,index)=>{
                            return(
                                <CourseCard
                                 key={index} 
                                 cardData={element} 
                                 currentCard={currentCard}
                                 setCurrentCard={setCurrentCard}
                                />
                            )
                        })
                    }
                </div>

        
            </div>
          )

    }

export default ExploreMore