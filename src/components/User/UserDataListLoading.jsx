import React from "react";

const UserDataListLoading = () => {
  return [...Array(10)].map((_, index) => {
    return (
      <li
        key={index}
        className="w-full gap-2 md:rounded-xl h-16 px-2.5 rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]"
      >
        <div className="imgLoading animate-shimmer dark:bg-[#2a2e32] h-11 rounded-md w-14 bg-[#d8dee2]"></div>
        <div className="w-full textLoadng flex flex-col gap-2">
          <p className="w-[40%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
          <p className="w-[75%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
        </div>
      <div className="w-[10%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-6 bg-[#d8dee2]"></div>
      </li>
    );
  });
};

export default UserDataListLoading;
