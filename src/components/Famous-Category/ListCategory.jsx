import React, { useEffect } from "react";
import { useApi } from "../../context/apiContext";
import "../../App.css";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import NotFound from "../../assets/image/NOTFOUND!.png";
import SimmerLoading from "./SimmerLoading";

const ListCategory = () => {
  const { category, fetchCategories, sliderDataLoading } = useApi();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul className={`w-full flex flex-wrap justify-between`}>
      {sliderDataLoading ? (
        <ul className="flex h-fit w-full lg:flex-row lg:flex-wrap flex-col gap-3.5">
          <SimmerLoading />
        </ul>
      ) : (
        category.map((Item, index) => {
          return (
            <AnimatePresence key={index}>
              <motion.li
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                layout
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
              </motion.li>
            </AnimatePresence>
          );
        })
      )
      }
    </ul>
  );
};

export default ListCategory;
