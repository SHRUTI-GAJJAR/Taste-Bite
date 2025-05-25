import React from "react";

const UserDataGridLoading = () => {
  return [...Array(10)].map((_, index) => {
    return (
      <li
        key={index}
        className=" flex-col p-2 gap-2 h-fit px-2.5 md:rounded-xl rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]"
      >
        <div className="animate-shimmer h-18 w-18 rounded-md dark:bg-[#2a2e32] bg-[#d8dee2]"></div>
        <div className="animate-shimmer h-6 w-[60%] rounded-full dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
        <div className="animate-shimmer h-4 w-[70%] rounded-full dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
        <div className="animate-shimmer h-6 w-[50%] rounded-full dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
      </li>
    );
  });
};

export default UserDataGridLoading;
