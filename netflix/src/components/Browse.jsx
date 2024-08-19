import useNowPlaying from "../utils/useNowPlaying";
import usePopular from "../utils/usePopular";
import useTopRated from "../utils/useTopRated";
import useUpcoming from "../utils/useUpcoming";
import HeadContainer from "./HeadContainer";
import Header from "./Header";

const Browse=()=>{
    useNowPlaying();
    usePopular();
    useTopRated();
    useUpcoming();
    return(
        <div className="bg-black" >
            <Header/>
            <HeadContainer/>
        </div>
    )
}

export default Browse;