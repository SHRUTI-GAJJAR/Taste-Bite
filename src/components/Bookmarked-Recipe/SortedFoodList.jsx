import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import CategoryTag from "../New-Arrival-Recipes/CategoryTag";
import RatingBadge from "../New-Arrival-Recipes/RatingBadge";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { FoodSortContext } from "../../context/FoodSortContext";
import { BookmarkContext } from "../../context/BookmarkContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SortedFoodList = () => {
  const { sortedFoods } = useContext(FoodSortContext);
  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  return (
    <ul className="flex h-fit w-full flex-col gap-1.5 lg:flex-row lg:flex-wrap lg:gap-1.5 2xl:gap-2.5">
      <AnimatePresence>
        {sortedFoods.map((Item) => (
          <motion.li
            key={Item._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            layout
            className="flex w-full items-center justify-between rounded-md border border-theme-light bg-[#f0f3f5] p-1 dark:border-2 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] md:rounded-xl lg:w-[49.5%]"
          >
            <div className="imgAndText flex w-[80%] items-center gap-2 xl:w-[70%] 2xl:w-[80%] lg:w-[80%]">
              <img
                src={`https://taste-bite-api.onrender.com/${Item.Thumbnail_img}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = NotFound;
                }}
                className="h-25 2xl:h-28 rounded-md object-cover md:rounded-xl"
                alt="Categoriesimg"
              />
              <div className="subData flex w-[70%] flex-col items-start justify-center gap-1.5 md:w-[80%]">
                <div className="foodName flex w-full gap-1">
                  <div className="vgeAndNonvge flex w-fit items-center justify-start">
                    <span>
                      <img
                        src={Item.isVeg ? vage : nonVage}
                        alt="vegIcon"
                        className="h-5.5 w-5.5 2xl:h-7 2xl:w-7"
                      />
                    </span>
                  </div>
                  <h3 className="recipeName truncate w-[90%] text-[1.2rem] font-semibold dark:text-white md:text-xl xl:text-[1.35rem] 2xl:text-[1.5rem]">
                    {Item.name}
                  </h3>
                </div>
                <div className="foodCategory mb-1">
                  <CategoryTag categoryData={Item.categories} />
                </div>
                <div className="rating">
                  <RatingBadge rating={Item.rating} />
                </div>
              </div>
            </div>

            <div className="flex h-[3rem] min-w-[3.5rem] cursor-pointer items-center justify-center">
              <div className="saveRecipe flex min-h-9 min-w-9 items-center justify-center rounded-full bg-black 2xl:min-h-10 2xl:min-w-10">
                <span
                  onClick={() => toggleBookmark(Item._id, Item.name)}
                  className={`bookmark-icon flex items-center justify-center p-1 transition-transform duration-300 ${
                    bookMarked ? "bookmarked" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <defs>
                      <linearGradient
                        id="bookmark-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" style={{ stopColor: "#e53935" }} />
                        <stop offset="100%" style={{ stopColor: "#e35d5b" }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                      fill={bookMarked ? "url(#bookmark-gradient)" : "none"}
                      stroke={
                        bookMarked ? "url(#bookmark-gradient)" : "#ffffff"
                      }
                    />
                  </svg>
                </span>
              </div>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default SortedFoodList;
