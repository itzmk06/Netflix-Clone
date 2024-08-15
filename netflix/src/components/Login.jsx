import Header from "./header";
import { useRef, useState } from "react";
import {validateData} from "../utils/validateData";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const handleSignUp = () => {
    setSignIn(!signIn);
  };
  const email=useRef(null);
  const password=useRef(null);
  const handleButton=()=>{
        const validate_result=validateData(email.current.value,password.current.value);
        if(validate_result===null){
            toast.success("Validation Successful!");
        }else{
            	toast.error(validate_result);
        }
  }
  

  return (
    <div className="login relative w-full h-screen">
      <Header />
      <Toaster/>

      <img
        className="w-full h-full absolute z-[99] object-center object-cover left-0 top-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg"
        alt="Background"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-[100]"></div>

      <div className="absolute inset-0 flex justify-center items-center z-[101] mt-5 md:mt-10 lg:mt-24">
        <div className="w-11/12 bg-black bg-opacity-70 p-8 rounded-lg max-w-md md:w-10/12 md:p-6 md:rounded-md md:max-w-sm">
          <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-center gap-6 font-semibold md:gap-5 md:font-normal">
            <h2 className="text-3xl text-white font-semibold md:text-2xl md:font-bold">
              {signIn ? "Sign In" : "Sign Up"}
            </h2>
            {!signIn && (
              <div className="flex gap-4">
                <input 
                  className="bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
                  type="text"
                  placeholder="First name"
                />
                <input
                  className="bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            )}
            <input
                ref={email}
              className="bg-black text-white outline-none outline-zinc-400 focus:outline-red-500 bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
              type="text"
              placeholder="Email or Mobile number"
            />
            <input
            ref={password}
              className="bg-black outline-none outline-zinc-400 focus:outline-red-500 text-white bg-opacity-70 w-full px-4 py-3 rounded-lg text-xl md:px-3 md:py-2 md:rounded-md md:text-base md:font-medium"
              type="password"
              placeholder="Password"
            />
            <button onClick={()=>handleButton()}  className="hover:bg-red-700 w-full px-4 py-3 bg-red-600 rounded-lg text-white text-xl font-semibold md:px-3 md:py-2 md:text-base md:font-medium">
              {signIn ? "Sign In" : "Sign Up"}
            </button>
            {signIn && (
              <button className="w-full px-4 py-2 bg-transparent text-zinc-300 font-bold text-base md:px-3 md:py-2 md:text-base md:font-medium">
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
