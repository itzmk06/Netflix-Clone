import { createSlice } from "@reduxjs/toolkit";

const TrailerSlice=createSlice({
    name:"trailerInfo",
    initialState:{
        trailer_data:null
    },
    reducers:{
        addTrailerData(state,action){
            state.trailer_data=action.payload;
        }
    }
});

export default TrailerSlice.reducer;
export  const {addTrailerData} =TrailerSlice.actions;