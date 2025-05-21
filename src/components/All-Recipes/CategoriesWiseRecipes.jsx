import { useParams } from "react-router";
import FilterModule from "./FilterModule";
import { useApi } from "../../context/apiContext";
import { AnimatePresence } from "framer-motion";
import SimmerLoadingCategory from "./SimmerLoadingCategory";
import RecipeCard from "./RecipeCard";
import { useEffect } from "react";
import { useFilter } from "../../context/FilterContext";
import NoRecipeFoundForThisFilter from "./NoRecipeFoundForThisFilter";

const CategoriesWiseRecipes = () => {
  const { CategoriesName } = useParams();
  const {
    categoryWiseData,
    fetchCategoriesData,
    fetchRecipeSliderData,
    recipeSliderData,
    detailRecipeData,
    detailRecipeDataLoading,
    fetchRecipe,
    fetchUserData,
    userData,
    userLoading,
  } = useApi();

  const {
    isFilterApplied,
    selectedCategories,
    isVeg,
    isNonVeg,
    minTime,
    maxTime,
    sortByRating,
    sortByName,
  } = useFilter();

  useEffect(() => {
    CategoriesName === "All"
      ? fetchRecipeSliderData()
      : fetchCategoriesData(CategoriesName);
    fetchRecipe();
    fetchUserData();
  }, [CategoriesName]);

  const isLoading = detailRecipeDataLoading || userLoading;

  const rawData =
    CategoriesName === "All" ? recipeSliderData : categoryWiseData;

  const filterData = isFilterApplied
    ? rawData.filter((recipe) => {
        const isVegMatch = isVeg ? recipe.Isvage === true : true;
        const isNonVegMatch = isNonVeg ? recipe.Isvage === false : true;
        const isTimeMatch =
          recipe.cookingTime >= minTime && recipe.cookingTime <= maxTime;
        const categorisMatch =
          selectedCategories.length === 0 ||
          selectedCategories.includes(recipe.categories);
        return isVegMatch && isNonVegMatch && isTimeMatch && categorisMatch;
      })
    : rawData;

  const sortedData = [...filterData]
    .sort((a, b) => {
      if (sortByRating === "rating-desc") return b.rating - a.rating;
      if (sortByRating === "rating-asc") return a.rating - b.rating;
      return 0;
    })
    .sort((a, b) => {
      if (sortByName === "az") return a.name.localeCompare(b.name);
      if (sortByName === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <section className="categoryFood h-fit m-auto md:max-w-[75vw] w-[97vw]">
      <div className="filterModule">
        <FilterModule />
      </div>
      <div className="mainContent my-2">
        <AnimatePresence>
          {isLoading ? (
            <ul className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-2 w-full">
              <SimmerLoadingCategory />
            </ul>
          ) : filterData.length === 0 ? (
            <NoRecipeFoundForThisFilter />
          ) : (
            <ul className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-2 w-full">
              {sortedData.map((item, index) => {
                const recipeDetailData = detailRecipeData.find(
                  (recipe) =>
                    recipe._id?.toString() === item.full_recipe?.toString()
                );
                return (
                  <RecipeCard
                    key={index}
                    recipeDetailData={recipeDetailData}
                    recipeImg={item.Thumbnail_img}
                    recipeName={item.name}
                    recipeId={item._id}
                    Isvage={item.Isvage}
                    recipeRating={item.rating}
                    currentCategoriesName={CategoriesName}
                    categories={item.categories}
                    userData={userData}
                    recipeCookingTime={item.cookingTime}
                  />
                );
              })}
            </ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategoriesWiseRecipes;
