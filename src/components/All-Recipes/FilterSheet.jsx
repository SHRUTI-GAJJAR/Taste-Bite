import { useFilter } from "../../context/FilterContext";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import TimeRangeSlider from "./TimeRangeSlider";
import { AnimatePresence, motion } from "framer-motion";
import RecipeSort from "./RecipeSort";
import CategorySideMenu from "./CategorySideMenu";
import FoodCategoryToggle from "../Bookmarked-Recipe/FoodCategoryToogle";

const FilterSheet = () => {
  const [openSections, setOpenSections] = useState({
    foodCategory: false,
    sortCategory: false,
    categories: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionHeaderClasses =
    "text-xl font-semibold px-4 py-3 flex justify-between items-center cursor-pointer transition-colors dark:text-gray-200 bg-white dark:bg-[#2d2d2d]";

  const motionProps = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { opacity: 0, scaleY: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
    className: "origin-top overflow-hidden dark:bg-[#2d2d2d] px-4",
  };

  return (
    <>
      <div className="FoodCategory bg-white dark:bg-[#2d2d2d] rounded-md overflow-hidden mb-4">
        <div
          onClick={() => toggleSection("foodCategory")}
          className={sectionHeaderClasses}
        >
          <p>Select Food Category</p>
          <FaChevronDown
            className={`transition-transform duration-300 ${
              openSections.foodCategory ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <AnimatePresence initial={false}>
          {openSections.foodCategory && (
            <motion.div {...motionProps}>
              <div className="py-4">
                <FoodCategoryToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="recipeTime bg-white dark:bg-[#2d2d2d] rounded-md px-4 py-4 mb-4">
        <p className="text-xl dark:text-gray-200 font-semibold mb-2">
          Cook Time Duration
        </p>
        <TimeRangeSlider />
      </div>

      <div className="recipeSorting rounded-md overflow-hidden bg-white dark:bg-[#2d2d2d] mb-4">
        <div
          onClick={() => toggleSection("sortCategory")}
          className={sectionHeaderClasses}
        >
          <p>Sort By</p>
          <FaChevronDown
            className={`transition-transform duration-300 ${
              openSections.sortCategory ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <AnimatePresence initial={false}>
          {openSections.sortCategory && (
            <motion.div {...motionProps}>
              <RecipeSort />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="CategorySelecation bg-white dark:bg-[#2d2d2d] rounded-md overflow-hidden mb-4">
        <div
          onClick={() => toggleSection("categories")}
          className={sectionHeaderClasses}
        >
          <p>Categories</p>
          <FaChevronDown
            className={`transition-transform duration-300 -rotate-90`}
          />
        </div>
        <AnimatePresence>
          {openSections.categories && (
            <motion.div {...motionProps}>
              <CategorySideMenu
                isOpen={openSections.categories}
                onClose={() => toggleSection("categories")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FilterSheet;
