import { useApi } from "../../context/apiContext";
import RecipeSimmerLoading from "./RecipeSimmerLoading";
import RecipeCard from "./RecipeCard";
import "../../App.css";
import { useEffect, useState } from "react";
import HeaderTitle from "../Utils/HeaderTitle";

const NewRecipes = () => {
  const { recipeSliderData, sliderDataLoading } = useApi();

  const uniqueCategoryRecipes = recipeSliderData.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (temp) =>
          temp.categories.toLowerCase() === item.categories.toLowerCase()
      )
  );

  const getLocalStorageBookmarks = () => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarksItem"));
    return storedBookmarks || [];
  };

  const [bookMarkedItem, setBookmarkedItem] = useState(
    getLocalStorageBookmarks
  );

  useEffect(() => {
    localStorage.setItem("bookmarksItem", JSON.stringify(bookMarkedItem));
  }, [bookMarkedItem]);

  const handelLocalStorageBookMark = (itemID) => {
    setBookmarkedItem((prev) => {
      if (prev.includes(itemID)) {
        return prev.filter((id) => id !== itemID);
      } else {
        return [...prev, itemID];
      }
    });
  };

  return (
    <section className="relative newRecipeWrapper m-auto h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
      <HeaderTitle title={"New Recipes"} />
      <div className="recipesSlider h-auto overflow-x-auto pb-[1rem] my-2 scroll-smooth snap-x snap-mandatory">
        <ul className="cardWrapper flex gap-2.5 xl:gap-3 h-auto w-full flex-nowrap whitespace-nowrap">
          {sliderDataLoading ? (
            <RecipeSimmerLoading />
          ) : (
            uniqueCategoryRecipes.map((item, index) => (
              <RecipeCard
                key={index}
                item={item}
                isBookmarked={
                  Array.isArray(bookMarkedItem) &&
                  bookMarkedItem.includes(item._id)
                }
                handelLocalStorageBookMark={handelLocalStorageBookMark}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default NewRecipes;
