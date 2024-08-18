import { createSlice } from "@reduxjs/toolkit";

const MovieVideoSlice=createSlice({
    name:"movie_video",
    initialState:{
        movie_videos:null,
        trailer_key:null,
    },
    reducers:{
        addMovieVideos:(state,action)=>{
            state.movie_videos=action.payload;
        },
        addTrailerKey:(state,action)=>{
            state.trailer_key=action.payload;
        }
    }
});
export default MovieVideoSlice.reducer;
export const {addMovieVideos,addTrailerKey}=MovieVideoSlice.actions; 