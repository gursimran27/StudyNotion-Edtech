import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null) // to store the uploaded file-obj
  const [previewSource, setPreviewSource] = useState(null) // to store the dataURL representation of uploaded file obj

  const fileInputRef = useRef(null) //to access the hidden <input> field

  const handleClick = () => {
    fileInputRef.current.click()  //makes a click on hidden input field
  }


//   fetch the file from input tag and set it in imageFile and call the previewFile func to convert file obj into a dataURL string format so that is can be used in img tag
  const handleFileChange = (e) => { 
    const file = e.target.files[0]
    // console.log(file)
    if (file) {
      setImageFile(file)
      previewFile(file)
    }
  }


  //  this function accepets the file obj and convert it into a dataURL string form(which can be used in HTML in img tag) and then store dataURL string in previewSource
  const previewFile = (file) => {
    const reader = new FileReader() // initiate a reader constructor
    reader.readAsDataURL(file)  //convert to dataURl string format
    reader.onloadend = () => { // after converting this is executed
      setPreviewSource(reader.result) //store the dataURL format of file-obj in  previewSource
    }
  }


  const handleFileUpload = () => {
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData() //used to gather form data from HTML forms.
      formData.append("displayPicture", imageFile) // make a key-value pair so to send it in form-data section of request
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])
  return (
    <>
      <div className="flex items-center sm:justify-between justify-center rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex sm:flex-row flex-col items-center gap-x-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover  transition-all duration-200 hover:scale-[1.1]"
          />
          <div className="space-y-2">
            <p className=" text-center sm:text-start">Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <input
                type="file"
                ref={fileInputRef} //!NOTE
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50 animate-pulse hover:animate-none transition-all duration-200 hover:scale-[1.1]"
              >
                Select
              </button>
              <IconBtn
                text={loading ? "Uploading..." : "Upload"}
                onclick={handleFileUpload}
              >
                {!loading && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
