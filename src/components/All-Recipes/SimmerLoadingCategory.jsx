import React from "react";
import { useApi } from "../../context/apiContext";

const SimmerLoadingCategory = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="h-auto p-2 dark:bg-[#1a1a1a] flex flex-col bg-[#f0f3f5] rounded-md border dark:border-[#2a2e32] border-[#d8dee2]"
        >
          <div className="animate-shimmer bg-[#d8dee2] dark:bg-[#2a2e32] h-58 rounded-md w-full mb-3"></div>
          <div className="h-5 w-2/3 mb-2 animate-shimmer bg-[#d8dee2] dark:bg-[#2a2e32] rounded"></div>
          <div className="h-5 w-1/2 mb-3 animate-shimmer bg-[#d8dee2] dark:bg-[#2a2e32] rounded"></div>
          <div className="h-5 w-full animate-shimmer bg-[#d8dee2] dark:bg-[#2a2e32] rounded mb-3"></div>
          <div className="h-8 w-full animate-shimmer mt-4 bg-[#d8dee2] dark:bg-[#2a2e32] rounded"></div>
        </li>
      ))}
    </>
  );
};

export default SimmerLoadingCategory;
