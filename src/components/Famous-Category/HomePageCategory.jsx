import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/image/img.jpg";
import { useApi } from "../../context/apiContext";
import { useViewMode } from "../../context/viweModeContext";
import ViweMode from "./ViweMode";

const HomePageCategory = () => {
  const { category, fetchCategories } = useApi();
  const { viewMode } = useViewMode();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="m-auto my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <div className="flex gap-2">
        <div className="w-full">
          <h2 className="rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
            Explore Categories
          </h2>
        </div>
        <ViweMode></ViweMode>
      </div>
      <div className="displayCategory my-2">
        <ul className="flex w-full flex-wrap justify-between">
          <li className="my-1.5 flex w-full items-center justify-between rounded-md border border-theme-light bg-[#f0f3f5] p-1 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] md:rounded-xl lg:w-[49.5%]">
            <div className="imgAndText flex w-[75%] items-center gap-2 xl:w-[70%] 2xl:w-[80%] lg:w-[70%]">
              <img
                src={img}
                className="h-15 rounded-md object-cover md:rounded-xl"
                alt="Categoriesimg"
              />
              <div className="subText w-[90%] md:w-full">
                <p className="mt-1 mb-1.5 text-[1.1rem] font-semibold dark:text-white md:text-xl">
                  Creamy Tomato Soup
                </p>
                <p className="w-[90%] truncate text-[0.825rem] text-gray-600 hover:overflow-visible hover:whitespace-normal hover:text-clip dark:text-gray-400">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="flex h-[3rem] min-w-[3.5rem] cursor-pointer items-center justify-center">
              <span className="redirectIcon flex h-8 w-8 items-center justify-center rounded-md bg-[linear-gradient(to_right,#e53935,#e35d5b)] transition hover:scale-110 md:rounded-xl">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePageCategory;
