import { useDispatch } from "react-redux";
import { options, url } from "./constants";
import {addTopRated } from "./MovieSlice";
import { useEffect } from "react";

const useTopRated=()=>{
    const dispatch=useDispatch();

    const fetchData=async()=>{
        const data=await fetch(url+"top_rated",options);
        const json_data=await data?.json();
        dispatch(addTopRated(json_data?.results));
    }

    useEffect(()=>{
        fetchData()
    },[])
    

}
export default useTopRated;