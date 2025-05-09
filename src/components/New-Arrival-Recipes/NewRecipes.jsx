import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/image/img.jpg";
import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { MdShare } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import {
  normalizedCategoryIcons,
  categoryBgClasses,
} from "../../services/script/foodCategories";
import { useApi } from "../../context/apiContext";
import NotFound from "../../assets/image/NOTFOUND!.png";

import "../../App.css"

const NewRecipes = () => {
  const [isBookMarked, setIsBookmarked] = useState(() => {
    const allBookmarks = {};
    for (let i = 0; i < 8; i++) allBookmarks[i] = false;
    return allBookmarks;
  });

  const { recipeSliderData, sliderDataLoading } = useApi();

  useEffect(() => {
    import("https://cdn.lordicon.com/lordicon.js");
  }, []);

  const handelBookmark = (index) => {
    setIsBookmarked((prev) => {
      const updated = { ...prev, [index]: !prev[index] };
      const icon = bookmarkRefs.current[index];

      if (icon) {
        icon.setAttribute(
          "state",
          updated[index] ? "morph-marked-bookmark" : "morph-unmarked-bookmark"
        );
      }
      return updated;
    });
  };

  const uniqueCategoryRecipes = recipeSliderData.filter(
    (item, index, itSelf) =>
      index ===
      itSelf.findIndex(
        (temp) =>
          temp.categories.toLowerCase() === item.categories.toLowerCase()
      )
  );

  const bookmarkRefs = useRef([]);

  return (
    <>
      <section className="relative newRecipeWrapper m-auto h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
        <div className="gap-2 w-full flex sm:top-[6rem] z-10">
          <h2 className="rounded-md w-full bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
            New Recipes
          </h2>
        </div>
        <div className="recipesSlider h-auto overflow-x-auto pb-[1rem] my-2 scroll-smooth snap-x snap-mandatory">
          <ul className="cardWrapper flex gap-2.5 xl:gap-3 h-auto w-full flex-nowrap whitespace-nowrap">
            {uniqueCategoryRecipes.map((item, index) => {
              return (
                <li
                  key={index}
                  className="recipeCard snap-start group cursor-pointer inline-block min-w-[48.5%] h-auto overflow-hidden 2xl:min-w-[24.2%] xl:min-w-[32.5%] lg:min-w-[32.4%] md:min-w-[49%] xxs:min-w-[32.2%]"
                >
                  <article className="p-2 rounded-md border w-full border-theme-light md:rounded-2xl dark:border-2 dark:bg-[#1e1e1e] dark:border-[#2d2d2d]">
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
                              onClick={() => handelBookmark(index)}
                              ref={(elm) => (bookmarkRefs.current[index] = elm)}
                              src="https://cdn.lordicon.com/oiiqgosg.json"
                              trigger="click"
                              state="morph-marked-bookmark"
                              colors="primary:#ffffff"
                              style={{ width: "18px", height: "18px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </div>
                      <img
                        src={`${`https://taste-bite-api.onrender.com/${item.Thumbnail_img}`}`}
                        onError={(requstedImage) => {
                          requstedImage.target.onerror = null;
                          requstedImage.target.src = NotFound;
                        }}
                        className="object-cover group-hover:scale-105 transition h-full w-full object-center"
                        alt="recipeImage"
                      />
                      <div className="linearGrident absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
                    </figure>
                    <div className="recipeInformations py-1 flex flex-col gap-1 w-full h-fit">
                      <div className="recipeNameAndRating flex items-center justify-between">
                        <h3 className="recipeName truncate w-[80%] font-semibold text-[1.1rem] 2xl:text-[1.5rem] md:text-xl xl:text-[1.35rem] dark:text-white">
                          {item.name}
                        </h3>
                        <div
                          className={`${
                            item.rating < 2
                              ? "bg-red-500"
                              : item.rating < 3
                              ? "bg-yellow-500 "
                              : item.rating < 4
                              ? "bg-green-400"
                              : "bg-green-500"
                          } rating w-fit flex items-center justify-center rounded-sm px-[0.3rem] py-[0.08rem] gap-0.5 xl:rounded-md`}
                        >
                          <span className="ratingNumber text-sm xl:text-[0.925rem] 2xl:text-[1rem] text-white">
                            {item.rating ? item.rating : "N/A"}
                          </span>
                          <span className="ratingIcon">
                            <TiStarFullOutline className="text-white text-sm xl:text-[0.925rem] 2xl:text-[1rem]" />
                          </span>
                        </div>
                      </div>
                      <div
                        className={`${
                          categoryBgClasses[
                            item.categories.replace(/\s+/g, "_")
                          ]
                        }  category rounded-full flex w-fit items-center gap-1 py-0.5 px-2 2xl:px-3`}
                      >
                        <span className="catagoryIcon flex bggray justify-center items-center">
                          <img
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(
                              normalizedCategoryIcons[
                                item.categories.replace(/\s+/g, "_")
                              ]
                            )}`}
                            className="h-4"
                            alt="vegetarianIcon"
                          />
                        </span>
                        <p className="categoryName text-black text-sm 2xl:text-[1rem] xl:text-[0.925rem]">
                          <span>{item.categories}</span>
                        </p>
                      </div>
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
                            2Min
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="viweFullRecipeButtom shadow-md flex items-center justify-center rounded-md py-1 bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:rounded-xl md:text-[1.2rem] 2xl:mt-1">
                      <button className="text-white font-semibold">
                        View Full Recipe
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewRecipes;
