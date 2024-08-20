import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./MovieSlice"
import trailerInfoReducer from "./TrailerSlice";
import movieVideoReducer from "./MovieVideoSlice";


const appStore=configureStore({
    reducer:{
        "user":userReducer,
        "movies":nowPlayingMoviesReducer,
        "trailer":trailerInfoReducer,
        "movie_video":movieVideoReducer,
    }
});

export default appStore;