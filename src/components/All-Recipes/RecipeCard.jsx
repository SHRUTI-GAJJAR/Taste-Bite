import { TiStarFullOutline } from "react-icons/ti";
import { useContext, useEffect } from "react";
import nonVage from "../../assets/svg/nonVage.svg";
import vage from "../../assets/svg/vage.svg";
import { BookmarkContext } from "../../context/BookmarkContext";
import NotFound from "../../assets/image/NOTFOUND!.png";
import CategoryTag from "../New-Arrival-Recipes/CategoryTag";
import UserData from "./UserData";
import RatingBadge from "../New-Arrival-Recipes/RatingBadge";
import { motion } from "framer-motion";
import formatTime from "../Utils/formatedTime";
import "../../App.css";
import { CgTimelapse } from "react-icons/cg";
import { Link, useParams } from "react-router";

const RecipeCard = ({
  recipeDetailData,
  recipeImg,
  recipeName,
  recipeId,
  Isvage,
  recipeRating,
  currentCategoriesName,
  categories,
  userData,
  recipeCookingTime,
}) => {
  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  const { CategoriesName } = useParams();

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
      layout
      className="p-2 border border-theme-light bg-[#f0f3f5] dark:border-2 dark:bg-[#1e1e1e] dark:border-[#2d2d2d] rounded-md md:rounded-xl overflow-hidden"
    >
      <article className="flex flex-col">
        <figure className="relative rounded-md overflow-hidden">
          <img
            src={`https://taste-bite-api.onrender.com/${recipeImg}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = NotFound;
            }}
            alt="foodImg"
          />
          <div className="acations z-10 top-1 w-full flex items-center justify-between absolute">
            <div className="foodCategory ml-1 h-5.5 w-5.5">
              <img src={Isvage ? vage : nonVage} alt="foodcateGory" />
            </div>
            <div className="bookMark cursor-pointer">
              <span
                onClick={() => {
                  toggleBookmark(recipeId, recipeName);
                }}
                className={`bookmark-icon bg-black rounded-l-md p-1.5 flex items-center justify-center transition-transform duration-300 ${
                  bookMarked.includes(recipeId) ? "bookmarked" : ""
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
                    fill={
                      bookMarked.includes(recipeId)
                        ? "url(#bookmark-gradient)"
                        : "none"
                    }
                    stroke={
                      bookMarked.includes(recipeId)
                        ? "url(#bookmark-gradient)"
                        : "#ffffff"
                    }
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="linearGrident absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        </figure>
        <div className="moreInfo flex mt-2 flex-col gap-2">
          <div className="recipeNameRating items-center w-full flex justify-between">
            <div className="recipeName line-clamp-1 text-black dark:text-white w-[75%] font-semibold text-[1.3rem]">
              <h4>{recipeName}</h4>
            </div>
            <div className="recipeRating">
              <RatingBadge rating={recipeRating} />
            </div>
          </div>
          <div className="foodCategoryType flex w-full items-center justify-between">
            <div className="categoryWrap">
              {currentCategoriesName === "All" ? (
                <CategoryTag categoryData={categories} />
              ) : (
                <div></div>
              )}
            </div>
            <div className="cookTime flex justify-center items-center gap-0.5">
              <span className="timerIcon">
                <CgTimelapse className="text-gray-500 dark:text-gray-400 text-[1rem] 2xl:text-[1.1rem]" />
              </span>
              <span className="time font-semibold text-gray-500 2xl:text-[1.1rem] xl:text-[1.01rem] dark:text-gray-400">
                {formatTime(recipeCookingTime)}
              </span>
            </div>
          </div>
          <div className="line border-gray-400 dark:border-[#2d2d2d] dark:border-b-[0.125rem] h-1 w-full border-b-1 my-1 border-dashed"></div>

          <UserData
            recipeId={recipeId}
            recipeData={recipeDetailData}
            userDetails={userData}
          />
          <Link to={`/Recipe/${CategoriesName}/${recipeId}`} className="w-full">
            <button className="redirectButton hover:cursor-pointer hover:scale-98 w-full transition-transform duration-300 mt-1 text-white font-semibold shadow-md flex items-center justify-center rounded-md py-1 bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:rounded-xl md:text-[1.2rem] 2xl:mt-1">
              <p>Viwe Full Recipe</p>
            </button>
          </Link>
        </div>
      </article>
    </motion.li>
  );
};

export default RecipeCard;
