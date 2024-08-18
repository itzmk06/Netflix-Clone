import { useEffect } from "react";
import { options } from "./constants";
import { useDispatch } from "react-redux";
import { addMovieVideos, addTrailerKey } from "./MovieVideoSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const useTrailerInfo=()=>{
    const [movies,setMovies]=useState(null);
    const [trailerKey,setTrailerKey]=useState(null);
    const dispatch=useDispatch();
    const id=useSelector((store)=>store?.trailer?.trailer_data?.movie_id)
    const fetchData=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",options);
        const json_data=await data.json();
        const trailer=json_data?.results?.filter((result)=>result.type==="Trailer")[1]?.key;
        setMovies(json_data?.results);
        setTrailerKey(trailer);
      }
      useEffect(()=>{
        id&&fetchData()
      },[id])
      useEffect(()=>{
        if(movies){
          dispatch(addMovieVideos(movies));
          dispatch(addTrailerKey(trailerKey));
        }
      },[dispatch,movies]);


}

export default useTrailerInfo;