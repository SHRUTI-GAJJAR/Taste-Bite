import { useContext } from "react";
import clearFilter from "../../assets/svg/clearFilter.svg";
import { FoodSortContext } from "../../context/FoodSortContext";

const NoFoodFound = () => {
      const { resetFilter } = useContext(FoodSortContext);
    
  return (
    <div className="clearAllFilter gap-1 md:h-[59vh] sm:h-[65vh] h-[67vh] w-full flex flex-col justify-center items-center">
      <div className="img h-fit">
        <img src={clearFilter} alt="clearAllFilter" className="h-28 lg:h-50" />
      </div>
      <div className="text text-xl dark:text-white font-semibold">
        <p>No recipes found!</p>
      </div>
      <div className="clearFilterSubText text-gray-400"><p>Try clearing your filters to view all recipes.</p></div>
      <button onClick={resetFilter} className="clearFilter cursor-pointer px-3 py-1.5 rounded-full font-semibold dark:bg-[#1e1e1e] bg-gray-100 text-theme-light/90">
        Clear All Filter
      </button>
    </div>
  );
};

export default NoFoodFound;
