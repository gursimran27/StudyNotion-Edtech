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
// open_route mean only nonLoggedIn user can access its childern

function App() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>

      <Navbar/>

      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

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







        <Route path="*" element={<Error/>} />


      </Routes>
      
    </div>
  );
}

export default App;
