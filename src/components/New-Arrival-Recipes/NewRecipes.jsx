import { useApi } from "../../context/apiContext";
import RecipeSimmerLoading from "./RecipeSimmerLoading";
import RecipeCard from "./RecipeCard";
import "../../App.css";

const NewRecipes = () => {
  const { recipeSliderData, sliderDataLoading } = useApi();

  const uniqueCategoryRecipes = recipeSliderData.filter(
    (item, index, itSelf) =>
      index ===
      itSelf.findIndex(
        (temp) =>
          temp.categories.toLowerCase() === item.categories.toLowerCase()
      )
  );

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
            {sliderDataLoading ? (
              <RecipeSimmerLoading />
            ) : (
              uniqueCategoryRecipes.map((item, index) => {
                return <RecipeCard key={index} item={item} index={index} />;
              })
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewRecipes;
