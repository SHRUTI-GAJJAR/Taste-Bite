import React from "react";

const RecipeSimmerLoading = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => {
        return (
          <li
            key={index}
            className="h-auto p-4 rounded-md md:rounded-2xl min-w-[48.5%] overflow-hidden 2xl:min-w-[24.2%] xl:min-w-[32.5%] lg:min-w-[32.4%] md:min-w-[49%] xxs:min-w-[32.2%] dark:bg-[#1a1a1a] flex flex-col bg-[#f0f3f5]"
          >
            <figure className="rounded-md w-full h-[8rem] md:rounded-xl 2xl:h-[14rem] md:h-[12rem] bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></figure>
            <div className="reicpeInfo mt-2 w-full flex flex-col">
              <div className="recipeName flex items-center justify-between">
                <p className="w-[60%] rounded-sm h-5 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></p>
                <p className="w-[15%] rounded-sm h-5 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></p>
              </div>
              <div className="categoryName w-[30%] mt-2 rounded-full h-5 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></div>
              <div className="actionButton flex mt-3 items-center justify-between">
                <p className="w-[25%] rounded-full h-5 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></p>
                <p className="w-[20%] rounded-sm h-5 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></p>
              </div>
              <div className="fullRecipe mt-2 rounded-md w-full h-8 bg-[#d8dee2] dark:bg-[#3a3f44] animate-shimmer"></div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default RecipeSimmerLoading;
