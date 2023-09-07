import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"
import Spinner from "../../../components/common/Spinner"
import ProgressBar from '@ramonak/react-progress-bar'

const EnrolledCourses = () => {


    const {token}= useSelector((state)=>state.auth);

    const [enrolledCourses , setEnrolledCourese]=useState(null);


    const getEnrolledCourses = async ()=>{

        try {
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourese(response);
        } catch (error) {
            console.log(`Unable to fetch Enrolled Courses`);
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getEnrolledCourses();
    },[]); //first-render


  return (
    <div className=' text-white'>

        <div>Enrolled Courses</div>
        {
            !enrolledCourses ?
            (
                <Spinner />
            )
            :
            (
                !enrolledCourses.length ?
                (
                    <p>You have not enrolled in any course yet</p>
                )
                :
                (
                   <div>
                     <div>
                        <p>Course Name</p>
                        <p>Duration</p>
                        <p>Progress</p>
                     </div>

                     {/* Card start hote hai ab */}
                     {
                        enrolledCourses.map((course,index)=>{
                            return( 
                                <div
                                key={index}
                                >
                                    <div>
                                        <img 
                                         src={course?.thumbnail}
                                         />
                                         <div>
                                            <p>{course?.courseName}</p>
                                            <p>{course?.courseDescription}</p>
                                         </div>
                                    </div>

                                    <div>
                                        {course?.totalDuration}
                                    </div>

                                    <div>
                                        <p>Progress: {course?.progressPercentage || 0}% </p>
                                        <ProgressBar 
                                            completed={course?.progressPercentage || 0}
                                            height='8px'
                                            isLabelVisible={false}  
                                        />
                                    </div>
                                </div>
                            )
                        })
                     }
                   </div>
                )
            )
        }

    </div>
  )
}

export default EnrolledCourses