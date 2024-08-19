const MovieCards=({poster_path})=>{
    return(
        <div className="bg-blue-400 w-48 h-auto shrink-0 my-2">
            <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
        </div>
    )

}

export default MovieCards;