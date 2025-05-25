import React, { useEffect } from "react";
import { useApi } from "../../context/apiContext";
import "../../App.css";
import { IoIosArrowForward } from "react-icons/io";
import NotFound from "../../assets/image/NOTFOUND!.png";
import SimmerLoading from "./SimmerLoading";
import { motion, AnimatePresence } from "framer-motion";
import "../../App.css";
import { Link } from "react-router";

const GridCategory = () => {
  const { category, fetchCategories, sliderDataLoading } =
    useApi();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul className={`w-full flex flex-wrap gap-3 justify-between`}>
      {sliderDataLoading ? (
        <div className="text-center text-lg w-full py-1">
          <ul className="flex h-fit w-full flex-wrap flex-row gap-3.5">
            <SimmerLoading />
          </ul>
        </div>
      ) : (
        category.map((Item, index) => {
          return (
            <AnimatePresence key={index}>
              <motion.li
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                layout
                className="h-fit p-2 border border-theme-light xl:w-[24%] lg:w-[32.2%] md:w-[31.8%] w-[48%] rounded-md items-center justify-center flex flex-col bg-[#f0f3f5] dark:bg-[#1e1e1e] md:rounded-xl dark:border-[#2d2d2d] dark:border-2"
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
                <Link
                  to={`/Recipe/${
                    Item.Category === "Dessert"
                      ? "Dessart"
                      : Item.Category.replace(/\s+/g, "-")
                  }`}
                  className="w-full"
                >
                  <button className="shadow-md redirectButton h-8 w-[100%] cursor-pointer rounded-md flex items-center justify-center bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
                    <p className="text-white font-semibold">Explore More</p>
                    <IoIosArrowForward className="text-xl text-white" />
                  </button>
                </Link>
              </motion.li>
            </AnimatePresence>
          );
        })
      )}
    </ul>
  );
};

export default GridCategory;
