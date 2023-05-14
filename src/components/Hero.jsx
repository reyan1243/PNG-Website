import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import {BiSearch} from "react-icons/bi"

function Hero() {
  return (
    <div className="text-black bg-slate-100 ">
      <div className="max-w-[800px] sm:py-40 py-4 6 mx-auto w-full text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          PNGs.PK
        </h1>

        <p className="md:text-2xl max-w-[480px] mx-auto text-center sm:text-xl text-lg  py-2">
          Download Unlimited PNGs. Free for Commercial and Personal Use.
        </p>
        <Typed
          className="text-gray-400 font-semibold text-center md:text-4xl sm:text-2xl text-lg pl-2 md:pl-4 "
          strings={["png", "jpeg", "jpg"]}
          startDelay={30}
          typeSpeed={130}
          backSpeed={110}
          showCursor={true}
          loop
        />
        <div className="border-2 flex flex-row justify-between border-gray-600 mt-8 md:rounded-xl rounded-md  w-[285px] sm:w-[320px] md:w-[520px] mx-auto">
          <input
            className=" w-[280px] md:w-[485px] py-2 px-6 md:rounded-xl rounded-md"
            type="text"
          />
          <BiSearch className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
