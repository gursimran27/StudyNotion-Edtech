import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"
import { setProgress } from "../../slices/loadingBar"
import { useDispatch } from "react-redux"

const {
  GET_USER_DETAILS_API,
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API,
} = profileEndpoints



export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    dispatch(setProgress(70))

    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      dispatch(setProgress(80))
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    dispatch(setProgress(100))
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}




// TODO: react-top-loader
// !note: in simple func dispatch is not there ..so we need to convert them to redux-thunk or we can pass dispatch while calling a simple function./......the dispatch cann't be defind in this file as getting error...

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...")
  // dispatch(setProgress(70))
  let result = []  //array
  console.log(`Before calling the getUserEnrolledCourses API...`);
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    // dispatch(setProgress(70))
    // console.log(
    //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
    //   response
    // )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
    console.log(`After calling the getUserEnrolledCourses API...`,result);
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }
  // dispatch(setProgress(100))
  toast.dismiss(toastId)
  return result //!NOTE
}




// TODO: react-top-loader
export async function getInstructorData(token) {
  const toastId = toast.loading("Loading...")
  // dispatch(setProgress(70))
  let result = []
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    })
    // dispatch(setProgress(70))
    console.log("GET_INSTRUCTOR_DATA_API API RESPONSE............", response)
    result = response?.data?.courses
  } catch (error) {
    console.log("GET_INSTRUCTOR_DATA_API API ERROR............", error)
    toast.error("Could Not Get Instructor Data")
  }
  // dispatch(setProgress(100))
  toast.dismiss(toastId)
  return result
}
