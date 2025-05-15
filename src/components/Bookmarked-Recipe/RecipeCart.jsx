import { useContext, useEffect } from "react";
import { useViewMode } from "../../context/viweModeContext";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import FoodCategoryToogle from "./FoodCategoryToogle";
import FoodSorting from "./FoodSorting";
import { FoodSortContext } from "../../context/FoodSortContext";
import BottomBarNavigation from "./BottomBarNavigation";
import SortedFoodList from "./SortedFoodList";
import SortedFoodGrid from "./SortedFoodGrid";
import NoFoodFound from "../Bookmarked-Recipe/NoFoodFound";

const RecipeCart = () => {
  const { sortedFoods } = useContext(FoodSortContext);
  const { viewMode } = useViewMode();

  return (
    <section className="relative h-auto flex items-center justify-center">
      <div className="cartWrap m-auto md:max-w-[75vw] w-[97vw]">
        <div className="headerTitleWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"Bookmarked Recipes"} />
          <ViweMode />
        </div>
        <div className="mainContant w-full">
          <div className="subMenu flex items-center mb-2 justify-between">
            <FoodCategoryToogle />
            <FoodSorting />
          </div>
          <div className="mainData mt-1">
            {sortedFoods.length === 0 ? (
              <NoFoodFound />
            ) : viewMode === "list" ? (
              <SortedFoodList />
            ) : (
              <SortedFoodGrid />
            )}
          </div>
        </div>
        <BottomBarNavigation />
      </div>
    </section>
  );
};

export default RecipeCart;
