import MovieCards from "./MovieCards";

const HeadMovieContainer=({title,movies})=>{
    return(
        <div className="w-full px-5 bg-black py-5">
            <h1  className="text-semibold text-xl py-2">{title}</h1>
            <div className="flex gap-5 overflow-x-auto  flex-no-wrap">
                {
                    movies&&movies.map((movie)=><MovieCards key={movie.id} poster_path={movie.poster_path} />)
                }
            </div>

        </div>
    )
}

export default HeadMovieContainer;