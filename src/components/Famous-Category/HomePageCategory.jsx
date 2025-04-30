import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/image/img.jpg";
import { useApi } from "../../context/apiContext";
import { useViewMode } from "../../context/viweModeContext";
import ViweMode from "./ViweMode";
import NotFound from "../../assets/image/NOTFOUND!.png";
import "../../App.css";

const HomePageCategory = () => {
  const { category, fetchCategories, Loading } = useApi();
  const { viewMode } = useViewMode();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="m-auto relative h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <div className="gap-2 flex bg-white dark:bg-main-dark py-1.5 sm:top-[6rem] z-10">
        <div className="w-full">
          <h2 className="rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
            Explore Categories
          </h2>
        </div>
        <ViweMode></ViweMode>
      </div>
      <div className="displayCategory my-2">
        <ul
          className={`${
            viewMode === "list" ? "flex" : "hidden"
          } w-full flex-wrap justify-between`}
        >
          {Loading ? (
            <ul className="flex h-fit w-full lg:flex-row lg:flex-wrap flex-col gap-3.5">
              {
                [...Array(8)].map((_, index) => {

              return (<li key={index} className="w-full lg:w-[49%] gap-2 h-16 px-2.5 rounded-md items-center dark:bg-[#1a1a1a] flex bg-[#f0f3f5]">
                <div className="imgLoading animate-shimmer dark:bg-[#2a2e32] h-11 rounded-md w-11 bg-[#d8dee2]"></div>
                <div className="w-full textLoadng flex flex-col gap-2">
                  <p className="w-[40%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
                  <p className="w-[100%] rounded-full animate-shimmer dark:bg-[#3a3f44] h-3 bg-[#d8dee2]"></p>
                </div>
              </li>)
                })
              }
            </ul>
          ) : category.length === 0 ? (
            <div className="text-center text-lg py-10 text-gray-400">
              No categories available
            </div>
          ) : (
            category.map((Item, index) => {
              return (
                <li
                  key={index}
                  className="my-1.5 flex w-full items-center justify-between rounded-md border dark:border-2 border-theme-light bg-[#f0f3f5] p-1 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] md:rounded-xl lg:w-[49.5%]"
                >
                  <div className="imgAndText flex w-[75%] items-center gap-2 xl:w-[70%] 2xl:w-[80%] lg:w-[70%]">
                    <img
                      src={`${`https://taste-bite-api.onrender.com/${Item.Thumbnail_img}`}`}
                      onError={(requstedImage) => {
                        requstedImage.target.onerror = null;
                        requstedImage.target.src = NotFound;
                      }}
                      className="h-15 rounded-md object-cover md:rounded-xl"
                      alt="Categoriesimg"
                    />
                    <div className="subText w-[90%] md:w-full">
                      <p className="mt-1 mb-1.5 text-[1.1rem] font-semibold dark:text-white md:text-xl">
                        {Item.Category}
                      </p>
                      <p className="w-[90%] truncate text-[0.825rem] text-gray-600 hover:overflow-visible hover:whitespace-normal hover:text-clip dark:text-gray-400">
                        {Item.CategoryDescription}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-[3rem] min-w-[3.5rem] cursor-pointer items-center justify-center">
                    <span className="redirectIcon flex h-8 w-8 items-center justify-center rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] transition hover:scale-110 md:rounded-xl">
                      <IoIosArrowForward className="text-white" />
                    </span>
                  </div>
                </li>
              );
            })
          )}
        </ul>
        <ul
          className={`${
            viewMode === "grid" ? "flex" : "hidden"
          } w-full flex-wrap gap-3 justify-between`}
        >
          {Loading ? (
            <div className="text-center text-lg py-10">
              Loading categories...
            </div>
          ) : category.length === 0 ? (
            <div className="text-center text-lg py-10 text-gray-400">
              No categories available
            </div>
          ) : (
            category.map((Item, index) => {
              return (
                <li
                  key={index}
                  className="h-fit p-2 border border-theme-light xl:w-[24%] lg:w-[32.2%] md:w-[31.8%] w-[48%] rounded-md items-center justify-center flex flex-col bg-[#f0f3f5] dark:bg-[#1e1e1e] dark:border-[#2d2d2d] dark:border-2"
                >
                  <div className="imgWrap xl:h-22 xl:w-22 h-18 w-18">
                    <img
                      src={`${`https://taste-bite-api.onrender.com/${Item.Thumbnail_img}`}`}
                      onError={(requstedImage) => {
                        requstedImage.target.onerror = null;
                        requstedImage.target.src = NotFound;
                      }}
                      className="object-cover rounded-md"
                      alt="Categoriesimg"
                    />
                  </div>
                  <div className="textContantWrap w-full mb-2 flex flex-col items-center justify-center">
                    <p className="mainText xl:text-xl text-black dark:text-white font-semibold">
                      {Item.Category}
                    </p>
                    <p className="subText w-fit text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {Item.CategoryDescription}
                    </p>
                  </div>
                  <button className="shadow-md redirectButton h-8 w-[100%] cursor-pointer rounded-md flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                    <p className="text-white font-semibold">Explore More</p>
                    <IoIosArrowForward className="text-xl text-white" />
                  </button>
                </li>
              );
            })
          )}{" "}
        </ul>
      </div>
    </section>
  );
};

export default HomePageCategory;
