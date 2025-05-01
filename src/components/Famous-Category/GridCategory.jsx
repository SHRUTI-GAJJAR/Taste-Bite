import React, { useEffect } from "react";
import { useApi } from "../../context/apiContext";
import "../../App.css";
import { IoIosArrowForward } from "react-icons/io";
import NotFound from "../../assets/image/NOTFOUND!.png";
import SimmerLoading from "./SimmerLoading";

const GridCategory = () => {
  const { category, fetchCategories, Loading } = useApi();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul className={`w-full flex flex-wrap gap-3 justify-between`}>
      {Loading ? (
        <div className="text-center text-lg w-full py-1">
          <ul className="flex h-fit w-full flex-wrap flex-row gap-3.5">
            <SimmerLoading />
          </ul>
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
      )}
    </ul>
  );
};

export default GridCategory;
