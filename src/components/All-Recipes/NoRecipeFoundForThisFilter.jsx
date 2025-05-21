import { useFilter } from "../../context/FilterContext";
import clearFilter from "../../assets/svg/clearFilter.svg";

const NoFoodFound = () => {
  const { resetAllFilters } = useFilter();

  return (
    <div className="clearAllFilter md:h-[50vh] sm:h-[57vh] h-[59vh] w-full flex flex-col items-center justify-center gap-2">
      <div className="img h-fit">
        <img src={clearFilter} alt="clearAllFilter" className="h-28 lg:h-50" />
      </div>
      <div className="text text-xl dark:text-white font-semibold">
        <p>No recipes found!</p>
      </div>
      <div className="clearFilterSubText text-gray-400">
        <p>Try clearing your filters to view all recipes.</p>
      </div>
      <button
        onClick={resetAllFilters}
        className="clearFilter cursor-pointer px-3 py-1.5 rounded-full font-semibold dark:bg-[#1e1e1e] bg-gray-100 text-theme-light/90"
      >
        Clear All Filter
      </button>
    </div>
  );
};

export default NoFoodFound;
