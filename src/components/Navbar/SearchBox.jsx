import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "../../App.css"


const SearchBox = () => {
  const [serachText, setSearchText] = useState("");

  const handelSearchText = () => {
    setSearchText("");
  };

  return (
    <div className="searchWrap h-fit mt-3 mb-1 sm:mt-6 w-full flex justify-center items-center">
      <div className="gap-1.5 mt-1.5 w-[98%] md:w-[75.5%] h-[2rem] rounded-md md:h-[2.5rem] pl-1 md:rounded-xl border-theme-light text-black border-1 flex items-center my-1 bg-transperent-dark">
        <div className="serachIconWrap">
          <IoIosSearch size={"1.5em"} className="text-theme-light" />
        </div>
        <div className="searchInputWrap w-full">
          <input
            type="text"
            value={serachText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full text-[1rem] sm:text-xl dark:placeholder-white/50 placeholder-gray-500/50 text-theme-light outline-0"
            placeholder="Search Recipe"
          />
        </div>
        {serachText && (
          <div
            onClick={handelSearchText}
            className="close justify-self-end w-[2.4rem] cursor-pointer"
          >
            <IoCloseOutline size={"1.6em"} className="text-theme-light" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
