import { useContext, useEffect } from "react";
import { useViewMode } from "../../context/viweModeContext";
import getCartInitialData from "../Utils/GetCartInitialData";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import FoodCategoryToogle from "./FoodCategoryToogle";
import FoodSorting from "./FoodSorting";
import { FoodSortContext } from "../../context/FoodSortContext";
import { useFoodCategory } from "../../context/FoodCategoryContext";
import BottomBarNavigation from "./BottomBarNavigation";

const RecipeCart = () => {
  const { sortedFoods } = useContext(FoodSortContext);
  console.log(sortedFoods);
  const { isVeg, isNonVeg } = useFoodCategory();
  const { viewMode } = useViewMode();

  return (
    <section className="relative h-auto flex items-center justify-center">
      <div className="cartWrap m-auto md:max-w-[75vw] w-[97vw]">
        <div className="headerTitleWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"Bookmarked Recipes"} />
          <ViweMode />
        </div>
        <div className="mainContant w-full">
          <div className="subMenu flex items-center justify-between">
            <FoodCategoryToogle />
            <FoodSorting />
          </div>
          <div className="mainData text-2xl dark:text-white break-words">
            {JSON.stringify(sortedFoods)}
            {JSON.stringify(sortedFoods)}
            {JSON.stringify(sortedFoods)}
          </div>
        </div>
        <BottomBarNavigation itemLength={sortedFoods.length} />
      </div>
    </section>
  );
};

export default RecipeCart;
