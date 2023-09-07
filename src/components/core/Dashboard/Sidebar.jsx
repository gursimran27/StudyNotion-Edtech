import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from "../../common/Spinner"

import SidebarLink from './SidebarLink'

import { useNavigate } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc"
import ConfirmationModal from '../../common/ConfirmationModal'


const Sidebar = () => {

  const { user , loading: profileLoading}= useSelector((state)=>state.profile);
  const { loading: authLoading} = useSelector((state)=>state.auth);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal]= useState(null);

  if( authLoading || profileLoading){
    return(
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <Spinner />
            </div>
          )
    }


  return (
    <div>

        <div className="hidden sm:flex min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] py-10 bg-richblack-800">

            {/* first 3 links */}
          <div className="flex flex-col">
            {
                sidebarLinks.map((link,index)=>{
                    if(link.type && user?.accountType !== link.type) return null

                    return(
                        <SidebarLink key={link.id} link={link} iconName={link.icon} />
                    )
                })
            }
          </div>

         {/* horizontal-line */}
            <div className="mx-auto my-6 h-[1px] w-10/12 bg-richblack-700"></div>

            {/* settings */}
            <div className=' flex flex-col'>
            <SidebarLink 
                link={ {name:"Settings", path:"/dashboard/settings"}}
                iconName="VscSettingsGear"
            />

            {/* logout */}
            <button 
            onClick={()=>setConfirmationModal({
                text1:"Are you sure?",
                text2:"You will be logged out of your account.",
                btn1Text:"Logout",
                btn2Text:'Cancel',
                btn1Handler: ()=> dispatch(logout(navigate)),
                btn2Handler: ()=>setConfirmationModal(null)
            })}
            className="px-8 py-2 text-sm font-medium text-richblack-300 hover:scale-[1.1] hover:text-yellow-5 transition-all duration-200"
            >
                <div className="flex items-center gap-x-2">
                    <VscSignOut className="text-lg" />
                    <span>logout</span>
                </div>
            </button>
            </div>
            
        </div>     
        
         
        {/* when confirmationModal is null then donot render component <onfirmationModal/> else render*/}
        {
            confirmationModal && <ConfirmationModal modaldata={confirmationModal}/>
        }

    </div>
  )
}

export default Sidebar