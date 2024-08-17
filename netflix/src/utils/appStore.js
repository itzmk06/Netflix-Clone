import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./MovieSlice"
import trailerInfoReducer from "./TrailerSlice";

const appStore=configureStore({
    reducer:{
        "user":userReducer,
        "movies":nowPlayingMoviesReducer,
        "trailer":trailerInfoReducer,
    }
});

export default appStore;