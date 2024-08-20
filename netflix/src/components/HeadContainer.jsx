
import HeadMovieContainer from "./HeadMovieList";
import MovieInfo from "./MovieInfo";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const HeadContainer = () => {
  const nowMovies=useSelector((store)=>store?.movies?.nowPlayingMovies)
  const popular=useSelector((store)=>store?.movies?.popular)
  const top_rated=useSelector((store)=>store?.movies?.topRated)
  const upcoming=useSelector((store)=>store?.movies?.upcoming)
  return  (
    <div className="relative w-full h-screen bg-black ">
      <VideoContainer />
      <MovieInfo />
      <div className="relative md:mt-[33%] mt-[83%] text-white  bg-black w-full h-screen"> 
      <HeadMovieContainer title={"Now Playing"} movies={nowMovies}/>
      <HeadMovieContainer title={"Popular"} movies={popular}/>
      <HeadMovieContainer title={"Top Rated"} movies={top_rated}/>
      <HeadMovieContainer title={"Upcoming"} movies={upcoming}/>
      </div>
    </div>
  );
};

export default HeadContainer;