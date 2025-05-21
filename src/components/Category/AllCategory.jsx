import React, { useEffect } from "react";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import { useApi } from "../../context/apiContext";
import { AnimatePresence } from "framer-motion";
import { useViewMode } from "../../context/viweModeContext";
import CategoryCardList from "./CategoryCardList";
import CategoryCardGrid from "./CategoryCardGrid";

const AllCategory = () => {
  const {
    category,
    fetchCategories,
    fetchCategoryCount,
    Loading,
    categoryCount,
  } = useApi();
  useEffect(() => {
    fetchCategoryCount(), fetchCategories();
  }, []);

  const { viewMode } = useViewMode();
  return (
    <section>
      <div className="categoryWrap pb-10 h-fit m-auto md:max-w-[75vw] w-[97vw]">
        <div className="titleAndModeWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"All Category"} />
          <ViweMode />
        </div>
        <div className="mainData">
          {viewMode === "list" ? (
            <ul className="flex flex-wrap w-full flex-col lg:flex-row gap-2">
              <AnimatePresence>
                {category.map((item, index) => {
                  let totalRecipe;
                  item.Category === "Dessert"
                    ? (totalRecipe = categoryCount["Dessart"])
                    : (totalRecipe = categoryCount[item.Category]);
                  return (
                    <CategoryCardList
                      key={index}
                      categoryName={item.Category}
                      categoryImg={item.Thumbnail_img}
                      CategoryDescription={item.CategoryDescription}
                      availbleRecipe={totalRecipe}
                    />
                  );
                })}
              </AnimatePresence>
            </ul>
          ) : (
            <ul className="flex flex-wrap w-full gap-2">
              <AnimatePresence>
                {category.map((item, index) => {
                  let totalRecipe;
                  item.Category === "Dessert"
                    ? (totalRecipe = categoryCount["Dessart"])
                    : (totalRecipe = categoryCount[item.Category]);
                  return (
                    <CategoryCardGrid
                      key={index}
                      categoryName={item.Category}
                      categoryImg={item.Thumbnail_img}
                      CategoryDescription={item.CategoryDescription}
                      availbleRecipe={totalRecipe}
                    />
                  );
                })}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
