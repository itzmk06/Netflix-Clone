import { useSelector } from "react-redux";
import useMovieInfo from "../utils/useMovieInfo";

const MovieInfo = () => {
  const trailer = useSelector((store) => store.trailer.trailer_data);
  useMovieInfo();

  return (
    <div className="relative  translate-y-[114%] md:translate-y-[185%] z-10 mx-3 ml-4   md:bg-black bg-gray-100 md:bg-opacity-45 bg-opacity-10 w-11/12 h-auto px-4 py-5 rounded-xl md:w-4/12 md:py-1 ">
      <div className="text-zinc-200 flex flex-col gap-3">
        <h1 className="text-2xl text-white font-medium">
          {trailer?.movie_name + " (" + trailer?.movie_year + ") "}
        </h1>
        <h1 className="text-lg ">
          {trailer?.movie_overview?.slice(0, 150)}
          <span className="text-blue-300 text-lg">...more</span>
        </h1>
      </div>
      <div className="flex gap-5 my-2">
        <button className="text-base flex gap-2 items-center justify-center bg-white bg-opacity-80 hover:bg-opacity-100  text-black px-3 py-1 rounded-md">
          <i className="fi fi-sc-play text-sm text-red-500 mt-1 "></i>Play
        </button>
        <button className="text-base flex gap-2 items-center justify-center bg-black bg-opacity-100 hover:bg-opacity-30 text-white px-3 py-2 rounded-md">
          <i className="fi fi-sr-square-info text-md text-white mt-1"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;