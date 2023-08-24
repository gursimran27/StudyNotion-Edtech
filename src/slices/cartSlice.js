import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "react-hot-toast";

const initialState = {

    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        settotalItems(state,action){
            state.totalItems = action.payload
        },
        // !HW
        // add to cart
        // remove from card
        // reset cart
    }
});


export const { settotalItems } = cartSlice.actions;

export default cartSlice.reducer;

