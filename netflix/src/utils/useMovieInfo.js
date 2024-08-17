import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerData } from "./TrailerSlice";



const useMovieInfo=()=>{
    const dispatch=useDispatch();
  const movie_data=useSelector((store)=>store.movies.nowPlayingMovies)
  // console.log(movie_data?.[0]);
    const movie=movie_data?.[0];
    const movie_name=movie?.title||movie?.original_title;
    const movie_overview=movie?.overview;
    const movie_id=movie?.id;
    // console.log(movie_id);
    const movie_release_date=movie?.release_date?.split("-")[0];
    const trailer_data={"movie_name":movie_name,"movie_overview":movie_overview,"movie_id":movie_id,"movie_year":movie_release_date};
    useEffect(()=>{
      dispatch(addTrailerData(trailer_data));
    },[dispatch,movie_id])
}
export default useMovieInfo;