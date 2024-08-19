import useTrailerInfo from "../utils/useTrailerInfo";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  useTrailerInfo();
  const trailer_key = useSelector((store) => store?.movie_video?.trailer_key);
  console.log(trailer_key)
  return (
    <div className="bg-black rounded-xl ml-3 md:ml-0 md:rounded-none fixed w-[96%] md:w-full h-screen overflow-hidden translate-y-[15%]  mt-[-3rem] md:mt-[-6rem]">
    <iframe
        className=" md:w-screen w-[95%] mr-4  mx-auto md:scale-150  aspect-video bg-gradient-to-r from-black  "
        src={`https://www.youtube.com/embed/${trailer_key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=0&loop=1&playlist=${trailer_key}`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
        allowFullScreen
    ></iframe>
</div>
  );
};

export default VideoContainer;
