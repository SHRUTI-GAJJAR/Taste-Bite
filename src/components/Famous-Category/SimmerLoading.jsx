import React from "react";
import { useViewMode } from "../../context/viweModeContext";

const SimmerLoading = () => {
  const { viewMode } = useViewMode();

  return (
    <>
      {viewMode === "list"
        ? [...Array(8)].map((_, index) => {  
            return ( 
              <li
                key={index}
                className="w-full lg:w-[49%] gap-2 h-16 px-2.5 rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]"
              >
                <div className="imgLoading animate-shimmer dark:bg-[#2a2e32] h-11 rounded-md w-11 bg-[#d8dee2]"></div>
                <div className="w-full textLoadng flex flex-col gap-2">
                  <p className="w-[40%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
                  <p className="w-[100%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
                </div>
              </li>
            );
          })
        : [...Array(8)].map((_, index) => {
            return (
              <li
                key={index}
                className="w-[48%] md:w-[31.8%] xl:w-[23.8%] flex-col p-2 gap-2 h-fit px-2.5 rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]"
              >
                <div className="animate-shimmer h-18 w-18 rounded-md dark:bg-[#2a2e32] bg-[#d8dee2]"></div>
                <div className="animate-shimmer h-4 w-[60%] rounded-full dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
                <div className="animate-shimmer h-3 w-full rounded-full dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
                <div className="animate-shimmer h-8.5 w-full rounded-md dark:bg-[#3a3f44] bg-[#d8dee2]"></div>
              </li>
            );
          })}
    </>
  );
};

export default SimmerLoading;
