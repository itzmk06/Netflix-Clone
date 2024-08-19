import { useDispatch } from "react-redux";
import { options, url } from "./constants";
import {addPopular } from "./MovieSlice";
import { useEffect } from "react";

const usePopular=()=>{
    const dispatch=useDispatch();

    const fetchData=async()=>{
        const data=await fetch(url+"popular",options);
        const json_data=await data?.json();
        dispatch(addPopular(json_data?.results));
        // console.log("from pop",json_data)
    }

    useEffect(()=>{
        fetchData()
    },[])
    

}
export default usePopular;