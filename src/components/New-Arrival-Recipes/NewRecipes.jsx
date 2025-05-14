import { useApi } from "../../context/apiContext";
import RecipeSimmerLoading from "./RecipeSimmerLoading";
import RecipeCard from "./RecipeCard";
import "../../App.css";
import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import HeaderTitle from "../Utils/HeaderTitle";
import { BookmarkContext } from "../../context/BookmarkContext";

const NewRecipes = () => {
  const { recipeSliderData, sliderDataLoading } = useApi();
  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  const uniqueCategoryRecipes = recipeSliderData.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (temp) =>
          temp.categories.toLowerCase() === item.categories.toLowerCase()
      )
  );

  return (
    <section className="relative newRecipeWrapper m-auto h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <HeaderTitle title={"New Recipes"} />
      <div className="recipesSlider h-auto overflow-x-auto pb-[1rem] my-2 scroll-smooth snap-x snap-mandatory">
        <AnimatePresence>
          <ul className="cardWrapper flex gap-2.5 xl:gap-3 h-auto w-full flex-nowrap whitespace-nowrap">
            {sliderDataLoading ? (
              <RecipeSimmerLoading />
            ) : (
              uniqueCategoryRecipes.map((item, index) => (
                <RecipeCard
                  key={index}
                  item={item}
                  handelLocalStorageBookMark={toggleBookmark}
                  isBookmarked={
                    Array.isArray(bookMarked) && bookMarked.includes(item._id)
                  }
                />
              ))
            )}
          </ul>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewRecipes;
