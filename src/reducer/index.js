import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"
import wishlistReducer from "../slices/wishlistSlice"
import loadingBarReducer from "../slices/loadingBar";
import viewCourseReducer from "../slices/viewCoursesSlice";
import courseReducer from "../slices/coursesSlice"

const rootReducer = combineReducers({

    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    loadingBar: loadingBarReducer,
    viewCourse: viewCourseReducer,
    course:courseReducer,

});


export default rootReducer;