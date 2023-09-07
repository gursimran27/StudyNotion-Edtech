import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  // console.log("user...",user);

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile:
      </h1>

      {/* section-1 */}
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 lg:flex-row flex-col-reverse gap-y-8 lg:gap-y-0">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center  gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover animate-pulse hover:scale-[1.1] transition-all duration-200 hover:animate-none" 
          />
          <div className="space-y-1 ">
            <p className="text-2xl  text-richblack-5 text-center lg:text-start capitalize font-bold bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  bg-clip-text text-transparent">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* section-2 */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl font-semibold text-richblack-5">About:</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <p
          className={`${
            user?.additonalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium text-justify`}
        >
          {user?.additonalDetails?.about ?? "Write Something About Yourself"}
        </p>

        <p className=" text-lg font-medium text-justify text-richblack-5 mt-[-4px] ">
          Account-Type:{" "}
          <span className=" underline capitalize">{user?.accountType}</span>
        </p>

      </div>

      {/* section-3 */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

          {/* personal detail and btn */}
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl  font-semibold text-richblack-5">
            Personal Details:
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        {/* firstname,lastname,email,phone,gender,DOB */}
        <div className="flex max-w-[500px] justify-between sm:flex-row flex-col">

            {/* left */}
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additonalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

            {/* right */}
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additonalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additonalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}