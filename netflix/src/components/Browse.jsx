import useNowPlaying from "../utils/useNowPlaying";
import HeadContainer from "./HeadContainer";
import Header from "./Header";

const Browse=()=>{
    useNowPlaying();
    return(
        <div>
            <Header/>
            <HeadContainer/>

        </div>
    )
}

export default Browse;