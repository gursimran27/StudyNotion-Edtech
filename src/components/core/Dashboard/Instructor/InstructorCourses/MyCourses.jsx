import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../../../services/operations/courseDetailsAPI"
import IconBtn from "../../../../common/IconBtn"
import CoursesTable from "./CoursesTable"
import { setProgress } from "../../../../../slices/loadingBar"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(setProgress(60))
      const result = await fetchInstructorCourses(token) //token contains the user._id that is used by server
      if (result) {
        setCourses(result)
      }
      dispatch(setProgress(100))
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}
