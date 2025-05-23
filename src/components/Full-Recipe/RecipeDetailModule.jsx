import React, { useContext } from "react";
import { BookmarkContext } from "../../context/BookmarkContext";
import NotFound from "../../assets/image/NOTFOUND!.png";
import RecipeBage from "./RecipeBage";
import RecipeInformation from "./RecipeInformation";
import chillyFlex from "../../assets/svg/chillyFlex.svg";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const RecipeDetailModule = ({
  recipeId,
  recipeName,
  recipeImage,
  recipeRating,
  rcipeCookingTime,
  Isvage,
  recipeCategories,
  recipeDetailData,
  userData,
}) => {
  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  const ingredientsArray = recipeDetailData?.ingredients?.[0]
    ?.split("\n\n")
    .filter((item) => item.trim() !== "");

  return (
    <article className="recipeDetailModule w-full h-fit">
      <div className="basicInfo w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <figure className="relative sm:rounded-xl rounded-md overflow-hidden md:h-130 w-full lg:h-[72vh] h-90">
          <img
            src={`https://taste-bite-api.onrender.com/${recipeImage}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = NotFound;
            }}
            className="w-full h-full object-cover object-center"
            alt="recipeImage"
          />
          <div className="bookmark absolute z-10 top-1.5 right-1.5">
            <div className="bookMark cursor-pointer">
              <span
                onClick={() => {
                  toggleBookmark(recipeId, recipeName);
                }}
                className={`bookmark-icon bg-black rounded-full p-2 flex items-center justify-center transition-transform duration-300 ${
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
          <RecipeBage
            totalIngredients={ingredientsArray.length}
            rcipeCookingTime={rcipeCookingTime}
          />
        </figure>
        <div className="w-full lg:h-[72vh] relative overflow-scroll noScrollBar">
          <div className="otherInfo h-fit relative w-full overflow-hidden border rounded-md sm:rounded-xl mb-2 border-orange-600 dark:border-2 dark:border-[#2d2d2d] dark:bg-[#1e1e1e]">
            <div
              className="absolute top-0 left-0 w-full h-full z-0 bg-center bg-contain opacity-30 dark:opacity-10"
              style={{
                backgroundImage: `url(${chillyFlex})`,
                backgroundSize: "100%",
              }}
            ></div>
            <RecipeInformation
              recipeDetailData={recipeDetailData}
              recipeId={recipeId}
              userData={userData}
              Isvage={Isvage}
              recipeName={recipeName}
              recipeRating={recipeRating}
              recipeCategories={recipeCategories}
            />
          </div>
          <div className="ingredientsAndRecipeSteps w-full">
            <RecipeIngredients ingredientsArray={ingredientsArray} />
          </div>
          <div className="recipeInstcations">
            <RecipeInstructions recipeDetailData={recipeDetailData} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeDetailModule;
