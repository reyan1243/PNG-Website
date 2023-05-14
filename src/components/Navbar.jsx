import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';


function Navbar() {
     const [nav, setNav] = useState(true);
     // const [slider,setSlider]=useState(false)
     const hanandleNav = () => {
       setNav(!nav);
     };
  return (
    <div className="h-16 flex justify-between items-center  mx-auto px-2 md:px-16 text-black border-b-2 border-gray-300">
      <h1 className="w-full text-3xl font-bold text-[#3b3b3b]">PNG.pk</h1>

      <ul className="md:flex hidden">
        <Link to="/">
          <li className="p-4 cursor-pointer">Home</li>
        </Link>

        <Link to="/explore">
          <li className="p-4 cursor-pointer">Explore</li>
        </Link>

        <Link to="/blog">
          <li className="p-4 cursor-pointer">Blog</li>
        </Link>

        <Link to="/about">
          <li className="p-4 cursor-pointer">About </li>
        </Link>
      </ul>
      <div onClick={hanandleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r md:fixed md:left-[-100%]  border-r-gray-300 bg-white  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#3b3b3b] m-4">PNG.pk</h1>
        <ul className="p-4 uppercase">
          <Link to="/">
            <li className="p-4 border-b border-b-gray-400 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/explore">
            <li className="p-4 border-b border-b-gray-400 cursor-pointer">
              Explore
            </li>
          </Link>

          <Link to="/blog">
            <li className="p-4 border-b border-b-gray-3 00 cursor-pointer">
              Blog
            </li>
          </Link>

          <Link to="/about">
            <li className="p-4 border-b border-b-gray-300 cursor-pointer">
              About
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar