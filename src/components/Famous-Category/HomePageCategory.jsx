import React, { useEffect, useState } from "react";
import list from "../../../src/assets/svg/listMode.svg";
import grid from "../../../src/assets/svg/gridMode.svg";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/image/img.jpg";
import { useApi } from "../../context/apiContext";

const HomePageCategory = () => {
  const [viewMode, setViewMode] = useState("list");
  const { category, fetchCategories } = useApi();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleModeStyle = (mode) => {
    setViewMode(mode);
  };

  return (
    <section className="w-[97vw] md:max-w-[75vw] m-auto my-3 sm:my-6">
      <div className="flex gap-2">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl px-3 py-1 sm:px-4 sm:py-1.5 rounded-md sm:rounded-xl text-white bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:font-semibold">
            Explore Categories
          </h2>
        </div>

        <div className="flex bg-[#f0f3f5] dark:bg-[#282931] w-fit rounded-md sm:rounded-xl">
          <span
            onClick={() => handleModeStyle("list")}
            className={`cursor-pointer transition border rounded-md sm:rounded-xl h-9 sm:h-11 w-9 sm:w-11 flex items-center justify-center ${
              viewMode === "list"
                ? "border-theme-light bg-transperent-dark"
                : "border-transparent bg-transparent"
            }`}
          >
            <img src={list} className="h-5 sm:h-7" alt="List View" />
          </span>

          <span
            onClick={() => handleModeStyle("grid")}
            className={`cursor-pointer transition border rounded-md sm:rounded-xl h-9 sm:h-11 w-9 sm:w-11 flex items-center justify-center ${
              viewMode === "grid"
                ? "border-theme-light bg-transperent-dark"
                : "border-transparent bg-transparent"
            }`}
          >
            <img src={grid} className="h-5 sm:h-7" alt="Grid View" />
          </span>
        </div>
      </div>
            {console.log(category)}
      <div className="displayCategory my-2">
        <ul className="w-full flex flex-wrap justify-between">
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                <IoIosArrowForward className="text-white" />
              </span>
            </div>
          </li>
          <li className="flex shadow-md md:rounded-xl rounded-md bg-[#f0f3f5] dark:bg-[#1e1e1e] lg:w-[49.5%]  w-full p-1 items-center justify-between my-1.5 border-theme-light dark:border-[#2d2d2d] border-1 h-fit">
            <div className="imgAndText lg:w-[70%] w-[75%] xl:w-[70%] 2xl:w-[80%] flex items-center gap-2">
              <img
                src={img}
                className="md:rounded-xl rounded-md h-15"
                alt="Categoriesimg"
              />
              <div className="subText md:w-full w-[90%]">
                <p className="md:text-xl text-[1.1rem] dark:text-white">
                  Creamy Tomato Soup
                </p>
                <p className="text-[0.825rem] text-gray-600 dark:text-gray-400 w-[90%] truncate hover:overflow-visible hover:whitespace-normal hover:text-clip ">
                  Cool down with a variety of chilled juices, smoothies, and
                  iced drinks. Perfect for hot days and a refreshing boost!
                </p>
              </div>
            </div>
            <div className="cursor-pointer h-[3rem] min-w-[3.5rem] flex items-center justify-center">
              <span className="redirectIcon hover:scale-110 transition h-8 w-8 rounded-full flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
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
