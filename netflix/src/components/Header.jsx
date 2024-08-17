import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import 'remixicon/fonts/remixicon.css';
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const user=useSelector((store)=>store.user);

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName,photoURL } = user;
          dispatch(addUser({ "uid": uid, "email": email, "displayName": displayName,"photoURL":photoURL}));
          navigate("/browse")
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
        return()=>unsubscribe();
      });
    },[dispatch,navigate])
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="md:mt-[-2rem] md:px-1 z-[1000] absolute  px-5 bg-gradient-to-b from-black h-[8rem] bg-opacity-65 w-full">
      <div className="flex  justify-between items-center px-5">
        <img
          className="w-36"
          src={USER_AVATAR}
        />
        {user&&
                    <div className="flex gap-5 justify-end items-center">
                    <h3 className="hidden md:block text-white text-lg font-semibold">
                          Welcome, {user?.displayName}
                    </h3>
                      <div className="flex items-center justify-center">
                      {!user.photoURL&&<i className="fi fi-sr-portrait text-4xl  mt-2 font-bold"></i>}
                      {user.photoURL&&<img className="w-12 h-12 rounded-full object-top object-cover md:w-12 md:h-12" src={user.photoURL}/>}
                      </div>
                    <button className="hidden md:block bg-black text-white text-base font-semibold  px-2 py-2 rounded-lg">
                      GPT Search
                    </button>
                    <button
                      onClick={() => handleSignOut()}
                      className="bg-red-700 flex items-center justify-center rounded-full  mx-auto px-[0.4rem]  md:px-[0.5rem] md:py-[0.1rem]"
                    >
                      <i className="fi fi-ss-sign-out-alt text-white text-2xl py-1 mt-1 px-1 ml-2 md:text-2xl md:mt-1 md:ml-2"></i>
                    </button>
                  </div>
        }
      </div>
    </div>
  );
};

export default Header;
