// ✅ File: RecipeCard.jsx
import { MdShare } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import ImageWithFallback from "./ImageWithFallback";
import RatingBadge from "./RatingBadge";
import CategoryTag from "./CategoryTag";
import { useEffect, useRef } from "react";

const RecipeCard = ({
  item,
  index,
  handelLocalStorageBookMark,
  isBookmarked,
}) => {
  const bookmarkRefs = useRef([]);

  useEffect(() => {
    import("https://cdn.lordicon.com/lordicon.js").then(() => {
      const icon = bookmarkRefs.current[index];
      if (icon) {
        icon.setAttribute(
          "state",
          isBookmarked ? "morph-unmarked-bookmark" : "morph-marked-bookmark"
        );
      }
    });
  }, [isBookmarked]);

  return (
    <li className="recipeCard snap-start group cursor-pointer inline-block min-w-[48.5%] h-auto overflow-hidden 2xl:min-w-[24.2%] xl:min-w-[32.5%] lg:min-w-[32.4%] md:min-w-[49%] xxs:min-w-[32.2%]">
      <article className="p-2 select-none rounded-md md:rounded-2xl border w-full border-theme-light dark:border-2 dark:bg-[#1e1e1e] dark:border-[#2d2d2d]">
        <figure className="relative rounded-md overflow-hidden w-full h-[8rem] md:rounded-xl 2xl:h-[14rem] md:h-[12rem]">
          <div className="acatios w-full h-fit top-2 z-10 px-2 absolute flex items-center justify-between">
            <div className="veg w-fit flex items-center justify-center">
              <span>
                <img
                  src={item.Isvage ? vage : nonVage}
                  alt="vegIcon"
                  className="h-6 w-6"
                />
              </span>
            </div>
            <div className="saveRecipe bg-black min-h-9 min-w-9 rounded-full flex items-center justify-center">
              <span className="p-1 flex items-center justify-center">
                <lord-icon
                  onClick={() => handelLocalStorageBookMark(item._id)}
                  ref={(elm) => (bookmarkRefs.current[index] = elm)}
                  src="https://cdn.lordicon.com/oiiqgosg.json"
                  trigger="morph"
                  state={
                    isBookmarked
                      ? "morph-marked-bookmark"
                      : "morph-unmarked-bookmark"
                  }
                  colors="primary:#ffffff"
                  style={{ width: "18px", height: "18px" }}
                ></lord-icon>
              </span>
            </div>
          </div>
          <ImageWithFallback
            src={`https://taste-bite-api.onrender.com/${item.Thumbnail_img}`}
            alt="recipeImage"
          />
          <div className="linearGrident absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        </figure>
        <div className="recipeInformations py-1 flex flex-col gap-1 w-full h-fit">
          <div className="recipeNameAndRating flex items-center justify-between">
            <h3 className="recipeName truncate w-[80%] font-semibold text-[1.1rem] 2xl:text-[1.5rem] md:text-xl xl:text-[1.35rem] dark:text-white">
              {item.name}
            </h3>
            <RatingBadge rating={item.rating} />
          </div>
          <CategoryTag categoryData={item.categories} />
          <div className="line border-gray-400 dark:border-[#2d2d2d] dark:border-b-[0.125rem] h-1 w-full border-b-1 my-1 border-dashed"></div>
          <div className="shareAndCookTime flex items-center justify-between my-1">
            <div className="ShareIcon flex w-fit border-1 border-theme-light rounded-full px-1.5 items-center justify-center gap-1 bg-transperent-dark">
              <span className="icon">
                <MdShare className="text-theme-light 2xl:text-[1.1rem]" />
              </span>
              <span className="shareText xl:text-[1.01rem] 2xl:text-[1.1rem] text-theme-light">
                Share
              </span>
            </div>
            <div className="cookTime flex justify-center items-center gap-0.5">
              <span className="timerIcon">
                <CgTimelapse className="text-gray-500 dark:text-gray-400 text-[1rem] 2xl:text-[1.1rem]" />
              </span>
              <span className="time font-semibold text-gray-500 2xl:text-[1.1rem] xl:text-[1.01rem] dark:text-gray-400">
                {item.cookingTime}
              </span>
            </div>
          </div>
        </div>
        <div className="viweFullRecipeButtom shadow-md flex items-center justify-center rounded-md py-1 bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:rounded-xl md:text-[1.2rem] 2xl:mt-1">
          <button className="text-white font-semibold">View Full Recipe</button>
        </div>
      </article>
    </li>
  );
};

export default RecipeCard;
