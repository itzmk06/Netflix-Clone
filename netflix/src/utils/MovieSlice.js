import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    "name":"movies",
    initialState:{
        nowPlayingMovies:null,
        popular:null,
        topRated:null,
        upcoming:null,
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies=action.payload;
        },
        addPopular(state,action){
            state.popular=action.payload;
        },
        addTopRated(state,action){
            state.topRated=action.payload;
        },
        addUpcoming(state,action){
            state.upcoming=action.payload;
        }
    }
});

export const {addNowPlayingMovies,addPopular,addTopRated,addUpcoming}=MovieSlice.actions;
export default MovieSlice.reducer;