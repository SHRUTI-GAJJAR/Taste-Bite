import { useParams } from "react-router";
import FilterModule from "./FilterModule";
import { TiStarFullOutline } from "react-icons/ti";
import { useContext, useEffect } from "react";
import { useApi } from "../../context/apiContext";
import nonVage from "../../assets/svg/nonVage.svg";
import vage from "../../assets/svg/vage.svg";
import { BookmarkContext } from "../../context/BookmarkContext";
import NotFound from "../../assets/image/NOTFOUND!.png";
import CategoryTag from "../New-Arrival-Recipes/CategoryTag";
import UserData from "./UserData";
import RatingBadge from "../New-Arrival-Recipes/RatingBadge";
import { AnimatePresence, motion } from "framer-motion";
import SimmerLoadingCategory from "./SimmerLoadingCategory";

const CategoriesWiseRecipes = () => {
  const { CategoriesName } = useParams();
  const {
    categoryWiseData,
    categoryWiseDataLoading,
    fetchCategoriesData,
    fetchRecipeSliderData,
    recipeSliderData,
    detailRecipeData,
    detailRecipeDataLoading,
    fetchRecipe,
    userLoading,
  } = useApi();

  const { bookMarked, toggleBookmark } = useContext(BookmarkContext);

  useEffect(() => {
    if (CategoriesName === "All") {
      fetchRecipeSliderData();
    } else {
      fetchCategoriesData(CategoriesName);
    }
    fetchRecipe();
  }, [CategoriesName]);

  const isLoading =
  detailRecipeDataLoading || userLoading;

  return (
    <section className="categoryFood h-fit m-auto md:max-w-[75vw] w-[97vw]">
      <div className="filterModule">
        <FilterModule />
      </div>
      <div className="mainContent my-2">
        <AnimatePresence>
          <ul className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-2 w-full">
            {isLoading ? (
              <SimmerLoadingCategory />
            ) : (
              (CategoriesName === "All"
                ? recipeSliderData
                : categoryWiseData
              ).map((item, index) => {
                // const recipeDetailData = detailRecipeData.find(
                //   (recipe) => recipe._id?.toString() === item._id?.toString()
                // );
                // console.log(recipeDetailData._id);
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
                    key={index}
                    className="p-2 border border-theme-light bg-[#f0f3f5] dark:border-2 dark:bg-[#1e1e1e] dark:border-[#2d2d2d] rounded-md md:rounded-xl overflow-hidden"
                  >
                    <article className="flex flex-col">
                      <figure className="relative rounded-md overflow-hidden">
                        <img
                          src={`https://taste-bite-api.onrender.com/${item.Thumbnail_img}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = NotFound;
                          }}
                          alt="foodImg"
                        />
                        <div className="acations z-10 top-1 w-full flex items-center justify-between absolute">
                          <div className="foodCategory ml-1 h-5.5 w-5.5">
                            <img
                              src={item.Isvage ? vage : nonVage}
                              alt="foodcateGory"
                            />
                          </div>
                          <div className="bookMark">
                            <span
                              onClick={() => {
                                toggleBookmark(item._id, item.name);
                              }}
                              className={`bookmark-icon bg-black rounded-l-md p-1.5 flex items-center justify-center transition-transform duration-300 ${
                                bookMarked.includes(item._id)
                                  ? "bookmarked"
                                  : ""
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
                                  fill={
                                    bookMarked.includes(item._id)
                                      ? "url(#bookmark-gradient)"
                                      : "none"
                                  }
                                  stroke={
                                    bookMarked.includes(item._id)
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
                            <h4>{item.name}</h4>
                          </div>
                          <div className="recipeRating">
                            <RatingBadge rating={item.rating} />
                          </div>
                        </div>
                        <div className="foodCategoryType">
                          {" "}
                          {CategoriesName === "All" ? (
                            <CategoryTag categoryData={item.categories} />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="line border-gray-400 dark:border-[#2d2d2d] dark:border-b-[0.125rem] h-1 w-full border-b-1 my-1 border-dashed"></div>

                        <UserData
                          recipeId={item._id}
                          // recipeData={recipeDetailData}
                        />
                        <div className="redirectButton mt-1 text-white font-semibold shadow-md flex items-center justify-center rounded-md py-1 bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:rounded-xl md:text-[1.2rem] 2xl:mt-1">
                          <button>Viwe Full Recipe</button>
                        </div>
                      </div>
                    </article>
                  </motion.li>
                );
              })
            )}
          </ul>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategoriesWiseRecipes;
