import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import FoodCategoryToggle from "../Bookmarked-Recipe/FoodCategoryToogle";
import TimeRangeSlider from "./TimeRangeSlider";

const FilterSheet = () => {
  const [openFoodCategory, setOpenFoodCategory] = useState(false);

  const toggleFoodCategory = () => {
    setOpenFoodCategory((prev) => !prev);
  };

  return (
    <>
      <div className="FoodCategory bg-white rounded-md">
        <div
          onClick={toggleFoodCategory}
          className="navigation text-xl font-semibold px-3 py-2 flex justify-between items-center rounded-md cursor-pointer"
        >
          <p>Select Food Category</p>
          <FaChevronDown
            className={`${
              openFoodCategory ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden px-3 ${
            openFoodCategory
              ? "max-h-[500px] opacity-100 py-2"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <FoodCategoryToggle />
        </div>
      </div>
      <div className="timeRange bg-white rounded-md px-3 py-2">
        <p className="text-xl font-semibold">Select Time Range</p>
        <TimeRangeSlider />
      </div>
    </>
  );
};

export default FilterSheet;
