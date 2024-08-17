import { useSelector} from "react-redux";
import useMovieInfo from "../utils/useMovieInfo";

const MovieInfo = () => {
  const trailer=useSelector((store)=>store.trailer.trailer_data)
  useMovieInfo();
    return (
    <div className="translate-y-[155%] md:translate-y-[195%] flex flex-col z-99 mx-3 absolute   bg-black bg-opacity-45 w-11/12 h-auto px-4 py-5  rounded-xl md:w-4/12 md:py-1">
        <div className="text-zinc-200 flex flex-col gap-3">
            <h1 className="text-2xl text-white font-medium">{trailer?.movie_name+" ("+trailer?.movie_year+") "}</h1>
            <h1 className="text-lg  ">{trailer?.movie_overview?.slice(0,150)}<span className="text-blue-300 text-lg">...more</span></h1>
        </div>
         <div className="flex  gap-5 mt-2">
         <button className="text-base flex  gap-2 items-center justify-center bg-black bg-opacity-40 text-white px-3 py-1 rounded-md"><i className="fi fi-sc-play text-sm text-red-500 mt-1 "></i>Play</button>
         <button className="text-base flex  gap-2 items-center justify-center bg-black bg-opacity-40 text-white px-3 py-1 rounded-md"><i className="fi fi-sr-square-info text-md text-black mt-1"></i>More Info</button>
         </div>
        <div>
        </div>
    </div>
  )
}

export default MovieInfo;