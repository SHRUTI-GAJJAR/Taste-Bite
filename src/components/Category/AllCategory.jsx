import React, { useEffect } from "react";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import { useApi } from "../../context/apiContext";
import CategoryCard from "./CategoryCard";
import { AnimatePresence } from "framer-motion";

const AllCategory = () => {
  const { category, fetchCategories, Loading } = useApi();
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section>
      <div className="categoryWrap pb-10 h-fit m-auto md:max-w-[75vw] w-[97vw]">
        <div className="titleAndModeWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"All Category"} />
          <ViweMode />
        </div>
        <div className="mainData">
          <ul className="flex flex-wrap w-full flex-col lg:flex-row gap-2">
            <AnimatePresence>

            {category.map((item, index) => {
                return (
                    <CategoryCard
                    key={index}
                    categoryName={item.Category}
                    categoryImg={item.Thumbnail_img}
                    CategoryDescription={item.CategoryDescription}
                    />
                );
            })}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
