import { createSlice } from "@reduxjs/toolkit";


const initialState={
    progress:0,
}

const loadingBarSlice= createSlice({
    name:"loadingBar",
    initialState,
    reducers:{
        setProgress(state,action) {
            state.progress= action.payload
            // console.log("progress...", state.progress);
        }
    }
});


export const { setProgress }= loadingBarSlice.actions;

export default loadingBarSlice.reducer;