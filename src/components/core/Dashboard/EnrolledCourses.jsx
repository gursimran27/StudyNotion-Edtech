import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import Spinner from "../../common/Spinner";

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const res = await getUserEnrolledCourses(token);

      setEnrolledCourses(res);
    } catch (error) {
      console.log("Could not fetch enrolled courses.");
      console.log(error.message);
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, []); //firstReander

  return (
    <>
      <div className="text-3xl text-richblack-50 select-none font-bold bg-gradient-to-tr from-[#ff1f41] via-[#bcfa12] to-[#A6FFCB]  bg-clip-text text-transparent animate-pulse">
        Enrolled Courses:
      </div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <Spinner />
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] text-lg w-full place-content-center text-richblack-5 select-none font-bold bg-gradient-to-r from-[#35ff1f] via-[#fa6b12] to-[#b8a6ff]  bg-clip-text text-transparent">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-[45%] px-5 py-3">Course Name</p>
            <p className="w-1/4 px-2 py-3">Duration</p>
            <p className="flex-1 px-2 py-3">Progress</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3 md:flex-row flex-col"
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  );
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="md:h-14 md:w-14 rounded-lg object-cover h-[100px] w-[300px]"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}{" "}
                    //!.....add a show more state variable logic
                  </p>
                </div>
              </div>
              <div className="w-1/4 px-2 py-3">{course?.totalDuration}</div>
              <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                <p>Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
