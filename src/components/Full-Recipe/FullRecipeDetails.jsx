import { useParams } from "react-router";
import HeaderTitle from "../Utils/HeaderTitle";
import { useApi } from "../../context/apiContext";
import RecipeDetailModule from "./RecipeDetailModule";
import { useEffect } from "react";
import { useRef } from "react";
import { handleDownloadPDF } from "../Utils/pdfDownloder"

const FullRecipeDetails = () => {
  const contentRef = useRef();
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
        <div className="titleAndModeWrap items-center justify-center flex gap-2 mt-3 mb-2 sm:mt-6">
          <HeaderTitle title={recipeName} />
          <div className="Print">
            <button onClick={() => handleDownloadPDF(contentRef,recipeName)} className="flex items-center justify-center bg-transperent-dark border-2 border-transperent-border-dark text-white font-semibold text-xl px-1 py-1 sm:px-2 sm:py-2 rounded-md sm:rounded-xl cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/jqqjtvlf.json"
                trigger="click"
                state="hover-file-2"
                colors="primary:#f54900"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
            </button>
          </div>
        </div>
        <div className="MainContant" ref={contentRef}>
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
