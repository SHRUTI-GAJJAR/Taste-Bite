import { useViewMode } from "../../context/viweModeContext";
import HeaderTitle from "../Utils/HeaderTitle";
import ViweMode from "../Utils/ViweMode";
import FoodCategoryToogle from "./FoodCategoryToogle";

const RecipeCart = ({ items }) => {

    const { viewMode } = useViewMode()
  return (
    <section className="w-full">
      <div className="emptyCartWrap m-auto md:max-w-[75vw] w-[97vw]">
        <div className="headerTitleWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={"Bookmarked Recipes"} />
          <ViweMode />
        </div>
        <div className="mainContant w-full">
            <div className="subMenu flex items-center justify-between">
                <FoodCategoryToogle />
            </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeCart;
