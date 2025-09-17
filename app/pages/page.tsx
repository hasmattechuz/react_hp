import { Link } from "react-router";
// import { useEffect, useRef } from "react";

// interface UnicornStudioType {
//   isInitialized: boolean;
//   init?: () => void;
// }

// declare global {
//   interface Window {
//     UnicornStudio: UnicornStudioType;
//   }
// }

const index = () => {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   // Prevent multiple initializations
  //   if (!window.UnicornStudio) {
  //     window.UnicornStudio = { isInitialized: false };
  //   }

  //   if (!window.UnicornStudio.isInitialized) {
  //     const script = document.createElement("script");
  //     script.src =
  //       "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
  //     script.async = true;
  //     script.onload = () => {
  //       if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
  //         UnicornStudio.init(); // call init from global
  //         window.UnicornStudio.isInitialized = true;
  //       }
  //     };
  //     document.body.appendChild(script);
  //   } else {
  //     // Already loaded, just call init
  //     if (window.UnicornStudio.init) {
  //       UnicornStudio.init();
  //     }
  //   }
  // }, []);

  return (
    <>
        {/* <div
      ref={containerRef}
      data-us-project="D9z6zvSu2fLiTynfnX9C"
      className="w-full h-full fixed top-0 z-1 unicorn-studio overflow-hidden"
    ></div> */}
      <div className="w-full h-[100dvh] flex justify-center items-center overflow-hidden bg-black">
        <div className="flex justify-center  items-center w-[400px] h-[400px] bg-blue-50/15"> 
        {/* absolute top-[50px] right-[50px] z-11 */}
            <div className="w-2xs text-center">
              <Link className="text-white" to="/color-platter/">Color Platter</Link> 
              <hr className="border-white/10 w-full my-6" />
              <Link className="text-white" to="/password">Password Generator</Link> 
              <hr className="border-white/10 w-full my-6" />
              <Link className="text-white" to="/converter">Currency Converter</Link> 
              <hr className="border-white/10 w-full my-6" />
              <Link className="text-white" to="/login">Login</Link> 
              <hr className="border-white/10 w-full my-6" />
              <Link className="text-white" to="/signup">Sign up</Link> 
            </div>
        </div>
      </div>
    </>
  )
}

export default index