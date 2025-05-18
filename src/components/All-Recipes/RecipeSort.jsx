import { useState } from "react";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { motion } from "framer-motion";

const RecipeSort = () => {
  const [ratingSort, setRatingSort] = useState("");
  const [alphabetSort, setAlphabetSort] = useState("");

  const handleRatingSort = (value) => {
    setRatingSort((prev) => (prev === value ? "" : value));
  };

  const handleAlphabetSort = (value) => {
    setAlphabetSort((prev) => (prev === value ? "" : value));
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
      className="overflow-hidden px-4"
    >
      <div className="flex md:flex-row flex-col gap-4 text-gray-600 dark:text-gray-200 py-4">
        <div className="w-full flex justify-between gap-2">
          <div
            onClick={() => handleRatingSort("desc")}
            className={sortButtonClasses(ratingSort === "desc")}
          >
            <BiSortDown />
            <p>5 To 0</p>
          </div>
          <div
            onClick={() => handleRatingSort("asc")}
            className={sortButtonClasses(ratingSort === "asc")}
          >
            <BiSortUp />
            <p>0 To 5</p>
          </div>
        </div>
        <div className="w-full flex justify-between gap-2">
          <div
            onClick={() => handleAlphabetSort("az")}
            className={sortButtonClasses(alphabetSort === "az")}
          >
            <AiOutlineSortAscending />
            <p>A To Z</p>
          </div>
          <div
            onClick={() => handleAlphabetSort("za")}
            className={sortButtonClasses(alphabetSort === "za")}
          >
            <AiOutlineSortDescending />
            <p>Z To A</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeSort;
