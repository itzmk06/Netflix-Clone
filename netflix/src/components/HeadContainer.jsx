import MovieInfo from "./MovieInfo";
import VideoContainer from "./VideoContainer";


const HeadContainer=()=>{
    return(
        <div className="bg-blue-200 w-full h-screen relative ">
            <VideoContainer/>
            <MovieInfo/>
        </div>
    )
}

export default HeadContainer;
