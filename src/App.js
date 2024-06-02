import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Error from "./pages/Error"
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from "./components/core/Dashboard/Cart";
import BookmarkedCourses from "./components/core/Dashboard/Wishlist/index"
import MyCourses from "./components/core/Dashboard/Instructor/InstructorCourses/MyCourses";
import LoadingBar from 'react-top-loading-bar'
import { setProgress } from "./slices/loadingBar";
import AddCourse from "./components/core/Dashboard/Instructor/AddCourse/index";




// open_route mean only nonLoggedIn(token=null) user can access its childern

// private-route mean if user is not logged in(token=null) then user has no right to access that route

function App() {


  const { user }= useSelector((state)=>state.profile)
  const { progress } = useSelector((state)=>state.loadingBar)
  const dispatch = useDispatch()


  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>

      <Navbar/>

      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() =>(dispatch(setProgress(0)))}
        // height={3}
        // waitingTime={600}
      />

      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/signup" element={ 
            <OpenRoute>
              <Signup/>
            </OpenRoute>}/>

        <Route path="/login" element={ 
            <OpenRoute>
              <Login/>
            </OpenRoute>}/>

        <Route path="/forgot-password" element={ 
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>}/>

        <Route path="/update-password/:token" element={ 
            <OpenRoute>
              <UpdatePassword/>
            </OpenRoute>}/>
          
        <Route path="/verify-email" element={ 
            <OpenRoute>
              <VerifyEmail/>
            </OpenRoute>}/>

 
        <Route 
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        >
                      {/* Route for all users */}
            <Route  path="dashboard/my-profile" element={<MyProfile/>} />  
            <Route  path="dashboard/settings" element={<Settings/>} />
            
                    {/* .....Route only for Students .....*/}
           {/* this is done as these routes are of Student only...if we donot do this then when instructor loggedIn then he/she can access these routes...so thats Why */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />

              <Route path="/dashboard/cart" element={<Cart />} />

              <Route path="dashboard/bookmarked-courses" element={<BookmarkedCourses/>}/>
            </>
          )}


                            {/* Route only for Instructors */}
            {
              user?.accountType ===ACCOUNT_TYPE.INSTRUCTOR &&(
                <>
                  <Route path="dashboard/my-courses" element={<MyCourses />} />

                  <Route path="dashboard/add-course" element={<AddCourse />} />
                </>
              )
            }

        </Route>









          {/* .....404 Page..... */}
        <Route path="*" element={<Error/>} />


      </Routes>

    
    </div>
  );
}

export default App;
