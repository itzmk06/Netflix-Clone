import { useDispatch } from "react-redux";
import { options, url } from "./constants";
import { addNowPlayingMovies } from "./MovieSlice";
import { useEffect } from "react";

const useNowPlaying=()=>{
    const dispatch=useDispatch();

    const fetchData=async()=>{
        const data=await fetch(url,options);
        const json_data=await data.json();
        dispatch(addNowPlayingMovies(json_data.results));
    }

    useEffect(()=>{
        fetchData()
    },[])
    

}
export default useNowPlaying;