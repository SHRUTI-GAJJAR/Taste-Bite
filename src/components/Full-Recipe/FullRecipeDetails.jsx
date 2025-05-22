import { useParams } from "react-router";
import HeaderTitle from "../Utils/HeaderTitle";
import { useApi } from "../../context/apiContext";
import RecipeDetailModule from "./RecipeDetailModule";
import { useEffect } from "react";

const FullRecipeDetails = () => {
  const { RecipeId } = useParams();
  const {
    fetchRecipeSliderData,
    fetchUserData,
    fetchRecipe,
    userData,
    recipeSliderData,
    detailRecipeData,
    detailRecipeDataLoading,
    sliderDataLoading,
    userLoading,
  } = useApi();

  useEffect(() => {
    fetchRecipeSliderData();
    fetchUserData();
    fetchRecipe();
  }, []);

  const recipeData = recipeSliderData.find((item) => item._id === RecipeId);
  const recipeName = recipeData?.name;
  const recipeDetailData = detailRecipeData.find(
    (recipe) => recipe._id?.toString() === recipeData?.full_recipe?.toString()
  );

  return (
    <section>
      <div className="categoryWrap h-fit m-auto md:max-w-[75vw] w-[97vw]">
        <div className="titleAndModeWrap flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={recipeName} />
        </div>
        <div className="MainContant">
          {detailRecipeDataLoading || sliderDataLoading || userLoading ? (
            <p>Loading....</p>
          ) : recipeData ? (
            <RecipeDetailModule
              recipeId={recipeData._id}
              recipeName={recipeData?.name}
              recipeImage={recipeData?.Thumbnail_img}
              recipeRating={recipeData?.rating}
              rcipeCookingTime={recipeData?.cookingTime}
              Isvage={recipeData?.Isvage}
              recipeCategories={recipeData?.categories}
              recipeDetailData={recipeDetailData}
              userData={userData}
            />
          ) : (
            <p>Recipe not found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullRecipeDetails;
