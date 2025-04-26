import React from 'react'
import menuIcon from "../assets/svg/scrollText.svg";
import { MdArrowOutward } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

const MobileMenu = () => {

    const [toggle, setToggle] = useState(false);

  const handelMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
        <div className="mobileMegaMenu sm:hidden flex">
        <div
          onClick={handelMenu}
          className={`menuIco ${
            toggle ? "bg-transparent" : "bg-transperent-border-dark"
          } transition ease-in-out h-8 w-8 rounded-sm border-1 border-theme-light flex items-center justify-center`}
        >
          <img
            src={menuIcon}
            className="text-theme-light h-5 w-5"
            alt="menuIco"
          />
        </div>
        <div
          className={`menuItemsWrap transition-all duration-300 ease-in-out overflow-hidden ${
            toggle ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top absolute h-fit w-full bg-theme-light rounded-md top-[3rem]`}
        >
          <ul className="w-full flex flex-col gap-2 p-1.5 text-[1rem] text-white">
            <li className="flex w-full cursor-pointer items-center justify-between">
              <span>Home</span>
              <MdArrowOutward size={"1.3em"} />
            </li>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li className="flex w-full cursor-pointer items-center justify-between">
              <span>Navigation</span>
              <FaChevronDown size={"1em"} className="mr-1" />
            </li>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li className="flex w-full cursor-pointer items-center justify-between">
              <span>Recipe</span>
              <MdArrowOutward size={"1.3em"} />
            </li>
            <i className="line h-fit w-full border-0.1 border-b border-dashed border-white"></i>
            <li className="flex w-full cursor-pointer items-center justify-between">
              <span>Categories</span>
              <MdArrowOutward size={"1.3em"} />
            </li>
          </ul>
        </div>
      </div>
    </>
)
}

export default MobileMenu