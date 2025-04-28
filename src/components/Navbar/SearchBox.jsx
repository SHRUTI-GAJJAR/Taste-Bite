import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const SearchBox = () => {
  const [serachText, setSearchText] = useState("");

  const handelSearchText = () => {
    setSearchText("");
  };

  return (
    <div className="searchWrap gap-1.5 mt-1.5 w-[97%] md:w-[75%] h-[2rem] md:h-[2.5rem] pl-2 rounded-md border-theme-light text-black border-1 flex items-center my-1 bg-transperent-dark">
      <div className="serachIconWrap">
        <IoIosSearch size={"1.5em"} className="text-theme-light" />
      </div>
      <div className="searchInputWrap w-full">
        <input
          type="text"
          value={serachText}
          onChange={(event) => setSearchText(event.target.value)}
          className="w-full text-[1rem] sm:text-xl text-theme-light outline-0"
          placeholder="Search Recipe"
        />
      </div>
      {serachText && (
        <div
          onClick={handelSearchText}
          className="close justify-self-end w-[2.4rem] "
        >
          <IoCloseOutline size={"1.6em"} className="text-theme-light" />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
