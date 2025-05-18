import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { motion } from "framer-motion";
import { useFilter } from "../../context/FilterContext";

const RecipeSort = () => {
  const { sortByRating, setSortByRating, sortByName, setSortByName } =
    useFilter();

  const handleRatingSort = (type) => {
    setSortByRating(sortByRating === type ? "" : type);
  };

  const handleNameSort = (type) => {
    setSortByName(sortByName === type ? "" : type);
  };

  const sortButtonClasses = (isActive) =>
    `w-[48%] transition-all duration-300 cursor-pointer rounded-md flex items-center justify-center gap-1 py-2 font-semibold ${
      isActive ? "bg-orange-600 text-white" : "bg-gray-200 dark:bg-[#1e1e1e]"
    }`;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden px-"
    >
      <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-200 py-4">
        <div>
          <div className="w-full flex justify-between gap-2">
            <div
              onClick={() => handleRatingSort("rating-desc")}
              className={sortButtonClasses(sortByRating === "rating-desc")}
            >
              <BiSortDown />
              <p>5 To 0</p>
            </div>
            <div
              onClick={() => handleRatingSort("rating-asc")}
              className={sortButtonClasses(sortByRating === "rating-asc")}
            >
              <BiSortUp />
              <p>0 To 5</p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-between gap-2">
            <div
              onClick={() => handleNameSort("az")}
              className={sortButtonClasses(sortByName === "az")}
            >
              <AiOutlineSortAscending />
              <p>A To Z</p>
            </div>
            <div
              onClick={() => handleNameSort("za")}
              className={sortButtonClasses(sortByName === "za")}
            >
              <AiOutlineSortDescending />
              <p>Z To A</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeSort;
