import { FoodSortContext } from "../../context/FoodSortContext";
import { BookmarkContext } from "../../context/BookmarkContext";
import { useContext } from "react";
import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import CategoryTag from "../New-Arrival-Recipes/CategoryTag";
import RatingBadge from "../New-Arrival-Recipes/RatingBadge";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { useFoodCategory } from "../../context/FoodCategoryContext";
import { motion, AnimatePresence } from "framer-motion";

const SortedFoodGrid = () => {
  const { sortedFoods } = useContext(FoodSortContext);
  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  return (
    <div>
      <AnimatePresence>
        <ul className="flex flex-wrap items-center gap-2">
          {sortedFoods.map((Item) => {
            return (
              <motion.li 
                className="flex group cursor-pointer flex-col items-start justify-center 2xl:w-[19.3%] lg:w-[24.2%] sm:w-[32.2%] w-[48%] rounded-md md:rounded-xl border border-theme-light bg-[#f0f3f5] p-2 gap-2 dark:border-2 dark:border-[#2d2d2d] dark:bg-[#1e1e1e]"
                key={Item._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                layout
              >
                <div className="imgAndFoodCategory rounded-md md:rounded-xl relative overflow-hidden w-full">
                  <img
                    src={`https://taste-bite-api.onrender.com/${Item.Thumbnail_img}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = NotFound;
                    }}
                    alt="foodImg"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-110 h-38 w-full"
                  />
                  <img src={Item.Isvage ? vage : nonVage} alt="foodcateGory" className="absolute top-1 right-1 h-5.5"/>
                </div>
                <div className="nameAndRating flex items-center justify-between w-full">
                  <div className="foodName w-[75%]">
                    <h4 className="truncate w-full text-[1.2rem] font-semibold dark:text-white ">{Item.name}</h4>
                  </div>
                  <div className="ratingBage">
                    <RatingBadge rating={Item.rating} />
                  </div>
                </div>
                <div className="category">
                  <CategoryTag categoryData={Item.categories} />
                </div>
                <div className="bookmark w-full flex justify-end">
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
                            <stop
                              offset="0%"
                              style={{ stopColor: "#e53935" }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#e35d5b" }}
                            />
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
            );
          })}
        </ul>
      </AnimatePresence>
    </div>
  );
};

export default SortedFoodGrid;
