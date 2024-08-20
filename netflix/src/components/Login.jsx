import Header from "./Header";
import { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BACK } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(true);
  const handleSignUp = () => {
    setSignIn(!signIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const photo = useRef(null);

  const handleButton = () => {
    const validate_result = validateData(
      email.current.value,
      password.current.value
    );
    if (validate_result === null) {
      ("");
    } else {
      toast.error(validate_result);
    }
    if (validate_result) return;

    if (!signIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          toast.success("SignUp Successful!");

          updateProfile(user, {
            displayName: firstName.current.value,
            photoURL: photo.current.value,
          })
            .then(() => {
              // Profile updated!
              // console.log(auth.currentUser);
              // console.log(user);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              {
                error + " has occurred!";
              }
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          toast.error("Something went wrong! " + " " + errorCode);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          toast.success("Sign In Successful!");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //   console.log(errorCode);
          toast.error(
            "Something went wrong! " + " " + errorCode + " " + errorMessage
          );
        });
    }
  };

  return (
    <div className="login relative w-full h-screen">
      <Header />
      <Toaster />

      <img
        className="w-full h-full absolute z-[99] object-center object-cover left-0 top-0"
        src={LOGIN_BACK}
        alt="Background"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-[100]"></div>

      <div className="absolute inset-0 flex justify-center items-center z-[101] mt-5 md:mt-10">
        <div className="w-11/12 bg-black bg-opacity-70 p-8 rounded-lg max-w-md md:w-10/12 md:p-6 md:rounded-md md:max-w-sm">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-6 font-semibold md:gap-5 md:font-normal"
          >
            <h2 className="text-3xl text-white font-semibold md:text-2xl md:font-bold">
              {signIn ? "Sign In" : "Sign Up"}
            </h2>
            {!signIn && (
              <div className="flex gap-4">
                <input
                  className="bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-normal"
                  type="text"
                  ref={firstName}
                  placeholder="First name"
                />
                <input
                  className="bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-normal"
                  type="text"
                  ref={lastName}
                  placeholder="Last name"
                />
              </div>
            )}
            <input
              ref={email}
              className="font-normal bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
              type="text"
              placeholder="Email or Mobile number"
            />

            <input
              ref={password}
              className="font-normal bg-black outline-none outline-zinc-400 focus:outline-red-500 text-white bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
              type="password"
              placeholder="Password"
            />
            {!signIn && (
              <input
                ref={photo}
                className="font-normal bg-black outline-none outline-zinc-400 focus:outline-red-500 text-white bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
                type="text"
                placeholder="Profile pic link"
              />
            )}

            <button
              onClick={() => handleButton()}
              className="hover:bg-red-700 w-full px-4 py-3 bg-red-600 rounded-lg text-white text-xl font-normal md:px-3 md:py-2 md:text-base md:font-medium"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
            {signIn && (
              <button className="w-full px-4 py-2 bg-transparent text-zinc-300 font-semibold text-base md:px-3 md:py-2 md:text-base md:font-medium">
                Forgot Password?
              </button>
            )}
            <h2 className="text-base text-zinc-400 mx-5 md:text-sm md:mx-3">
              {signIn ? "New to Netflix ?" : "Already have account ?"}
              <span
                onClick={() => handleSignUp()}
                className="hover:underline cursor-pointer font-semibold text-zinc-300 ml-5 md:ml-2"
              >
                {signIn ? "Sign Up now" : "Sign In now"}
              </span>
            </h2>
            <p className="text-sm text-zinc-400 md:text-xs">
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
              <span className="mx-2 text-zinc-200 font-bold cursor-pointer hover:underline">
                Learn more
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
