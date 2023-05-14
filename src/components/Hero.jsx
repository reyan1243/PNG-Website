import React from "react";
// import Typed from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-100px] h-screen mx-auto w-full text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          PNGs.PK
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl max-w-[480px] sm:text-xl text-lg  py-2">
            Download Unlimited PNGs. Free for Commercial and Personal Use.
          </p>
          {/* <Typed
            className="text-gray-400 font-bold md:text-5xl sm:text-4xl text-xl pl-2 md:pl-4 "
            strings={[]}
            startDelay={30}
            typeSpeed={120}
            backSpeed={140}
            showCursor={true}
            loop
          /> */}
        </div>

        <Link to="/search">
          <button className="bg-[#ff6b21] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
