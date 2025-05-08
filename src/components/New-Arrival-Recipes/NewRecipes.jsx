import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/image/img.jpg";
import vage from "../../assets/svg/vage.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { MdShare } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import vegetarian from "../../assets/svg/foodCategory/vegetarian.svg";

const NewRecipes = () => {
  const [isBookMarked, setIsBookmarked] = useState(() => {
    const allBookmarks = {};
    for (let i = 0; i < 8; i++) allBookmarks[i] = false;
    return allBookmarks;
  });

  useEffect(() => {
    import("https://cdn.lordicon.com/lordicon.js");
  }, []);

  const handelBookmark = (index) => {
    setIsBookmarked((prev) => {
      const updated = { ...prev, [index]: !prev[index] };
      const icon = bookmarkRefs.current[index]

      if(icon) {
        icon.setAttribute(
          "state",
          updated[index] ? "morph-marked-bookmark" : "morph-unmarked-bookmark"
        )
      }
      return updated
    });
  };

  const bookmarkRefs = useRef([]);

  return (
    <>
      <section className="relative newRecipeWrapper m-auto h-fit my-3 w-[97vw] sm:my-6 md:max-w-[75vw]">
        <div className="gap-2 w-full flex bg-white dark:bg-main-dark py-1.5 sm:top-[6rem] z-10">
          <h2 className="rounded-md w-full bg-[linear-gradient(to_right,#e53935,#e35d5b)] px-3 py-1 text-xl font-semibold text-white sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-2xl md:font-semibold">
            New Recipes
          </h2>
        </div>
        <div className="recipesSlider h-auto overflow-x-auto pb-[1rem] my-2">
          <ul className="cardWrapper flex gap-2.5 h-auto w-full flex-nowrap whitespace-nowrap">
            {[...Array(8)].map((_, index) => {
              return (
                <li
                  key={index}
                  className="recipeCard inline-block min-w-[48.5%] h-auto overflow-hidden"
                >
                  <article className="p-2 rounded-md border w-full border-theme-light">
                    <figure className="relative rounded-md overflow-hidden w-full h-[8rem]">
                      <div className="acatios w-full h-fit top-2 z-10 px-2 absolute flex items-center justify-between">
                        <div className="veg w-fit flex items-center justify-center">
                          <span className="inline-block bg-white w-fit rounded-md">
                            <img src={vage} alt="vegIcon" className="h-5 w-5" />
                          </span>
                        </div>
                        <div
                            onClick={() => handelBookmark(index)}
                          className="saveRecipe bg-black min-h-8 min-w-8 rounded-full flex items-center justify-center"
                          >
                          <span className="p-1 flex items-center justify-center">
                            <lord-icon
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
                        src={img}
                        className="object-cover cursor-pointer hover:scale-105 transition h-full w-full object-center"
                        alt="recipeImage"
                      />
                      <div className="linearGrident absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
                    </figure>
                    <div className="recipeInformations py-1 flex flex-col gap-1 w-full h-fit">
                      <div className="recipeNameAndRating flex items-center justify-between">
                        <h3 className="recipeName font-semibold text-[1.1rem]">
                          Tomato Sup
                        </h3>
                        <div className="rating bg-green-500 w-fit flex items-center justify-center rounded-sm px-[0.3rem] py-[0.08rem] gap-0.5">
                          <span className="ratingNumber text-sm text-white">
                            4.5
                          </span>
                          <span className="ratingIcon">
                            <TiStarFullOutline className="text-white text-sm" />
                          </span>
                        </div>
                      </div>
                      <div className="category rounded-full flex w-fit items-center gap-1 py-0.5 px-2 bg-gray-700">
                        <span className="catagoryIcon">
                          <img
                            src={vegetarian}
                            className="h-4"
                            alt="vegetarianIcon"
                          />
                        </span>
                        <p className="categoryName text-white text-sm">
                          <span>Vegetarian</span>
                        </p>
                      </div>
                      <div className="line border-gray-400 h-1 w-full border-b-1 my-1 border-dashed"></div>
                      <div className="shareAndCookTime flex items-center justify-between my-1">
                        <div className="ShareIcon cursor-pointer flex w-fit border-1 border-theme-light rounded-full px-1.5 items-center justify-center gap-1 bg-transperent-dark">
                          <span className="icon">
                            <MdShare className="text-theme-light" />
                          </span>
                          <span className="shareText text-theme-light">
                            Share
                          </span>
                        </div>
                        <div className="cookTime flex justify-center items-center gap-0.5">
                          <span className="timerIcon">
                            <PiCookingPotBold className="text-gray-500 text-[1rem]" />
                          </span>
                          <span className="time font-semibold text-gray-500">
                            2Min
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="viweFullRecipeButton flex items-center cursor-pointer justify-center rounded-md py-1 bg-[linear-gradient(to_right,#e53935,#e35d5b)]">
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
