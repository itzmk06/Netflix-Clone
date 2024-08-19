import { useDispatch } from "react-redux";
import { options, url } from "./constants";
import { useEffect } from "react";
import { addUpcoming } from "./MovieSlice";

const useUpcoming=()=>{
    const dispatch=useDispatch();

    const fetchData=async()=>{
        const data=await fetch(url+"upcoming",options);
        const json_data=await data?.json();
        dispatch(addUpcoming(json_data?.results));
    }

    useEffect(()=>{
        fetchData()
    },[])
    

}
export default useUpcoming;