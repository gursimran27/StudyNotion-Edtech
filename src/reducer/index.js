import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"
import wishlistReducer from "../slices/wishlistSlice"



const rootReducer = combineReducers({

    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,

});


export default rootReducer;