import React, { useRef } from 'react'
import IconBtn from './IconBtn'
import useOnClickOutside from '../../hooks/useOnClickOutside'



const ConfirmationModal = ({modaldata}) => {


  // so that if user clicked on rest of space then close the modal
  const ref=useRef(null)
  useOnClickOutside(ref,modaldata?.btn2Handler)


  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

        <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6" ref={ref}>

            <p className="text-2xl font-semibold text-richblack-5">
                {modaldata.text1}
            </p>

            <p className="mt-3 mb-5 leading-6 text-richblack-200"> 
                {modaldata.text2}
            </p>

            <div className="flex items-center gap-x-4">
            {/* logout */}
                <IconBtn
                  onclick={modaldata?.btn1Handler}//this is not event(onClick) its a prop
                  text={modaldata?.btn1Text}
                />
                {/* cancel */}
                <button
                onClick={modaldata?.btn2Handler}
                className="rounded-md bg-richblack-200 cursor-pointer py-[8px] px-[20px] font-semibold text-richblack-900 animate-pulse hover:animate-none transition-all duration-200 hover:scale-[1.1] "
                >
                    {modaldata?.btn2Text}
                </button>
            </div>
        </div>

    </div>
  )
}

export default ConfirmationModal