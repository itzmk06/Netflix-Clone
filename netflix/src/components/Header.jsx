import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import 'remixicon/fonts/remixicon.css';
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user);

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName,photoURL } = user;
          dispatch(addUser({ "uid": uid, "email": email, "displayName": displayName,"photoURL":photoURL}));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/");
        }
        return()=>unsubscribe();
      });
    },[dispatch,navigate])
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="md:mt-[-1.7rem] md:px-1 z-[1000] absolute mt-[-1.5rem]  px-5 bg-gradient-to-b from-black md:h-[8rem]  bg-opacity-65 w-full">
      <div className="flex  justify-between items-center px-5">
        <img
          className="w-28 mt-2"
          src={LOGO}
        />
        {user&&
                    <div className="flex md:gap-5 gap-3 justify-end items-center">
                    <h3 className="hidden md:block text-white text-lg font-semibold">
                          Welcome , {user?.displayName}
                    </h3>
                      <div className="flex items-center justify-center text-white">
                      {!user.photoURL&&<i className="fi fi-sr-portrait text-3xl  mt-2 font-bold"></i>}
                      {user.photoURL&&<img className="w-8 h-8  rounded-full object-top object-cover md:w-10 md:h-10" src={user.photoURL}/>}
                      </div>
                    <button
                      onClick={() => handleSignOut()}
                      className="bg-red-700 flex items-center justify-center rounded-full mr-[-1rem]  mx-auto px-[0.4rem] "
                    >
                      <i className="fi fi-ss-sign-out-alt text-white text-xl  mt-1 ml-1 px-1   md:text-2xl md:mt-1 md:ml-2"></i>
                    </button>
                  </div>
        }
      </div>
    </div>
  );
};

export default Header;
