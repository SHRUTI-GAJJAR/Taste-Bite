import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { MdShare } from "react-icons/md";
import UserData from "./UserData";
import CategoryTag from "../New-Arrival-Recipes/CategoryTag";

const getRatingColor = (rating) => {
  if (rating < 2) return "bg-red-500";
  if (rating < 3) return "bg-yellow-500";
  if (rating < 4) return "bg-green-400";
  return "bg-green-500";
};
const RecipeInformation = ({
  recipeDetailData,
  recipeId,
  userData,
  Isvage,
  recipeName,
  recipeRating,
  recipeCategories,
}) => {
  const bgColor = getRatingColor(recipeRating);
  return (
    <div className="recipeInformation w-full relative z-10 p-1.5 flex flex-col gap-2 ">
      <div className="nameAndRating w-full flex justify-between items-start">
        <div className="nameAndVage w-full flex gap-1 items-start justify-center">
          <div className="isVage justify-self-start">
            <img
              src={Isvage ? vage : nonVage}
              alt="vage"
              className="h-6.5 mt-1 w-6.5"
            />
          </div>
          <div className="name font-semibold text-2xl w-full dark:text-white">
            <p className="line-clamp-2 w-[90%]">{recipeName}</p>
          </div>
        </div>
        <div className="rating mt-1 flex items-center justify-center">
          <div
            className={`${bgColor} rating w-fit flex items-center justify-center rounded-sm px-[0.5rem] py-[0.1rem] gap-0.5 xl:rounded-md`}
          >
            <span className="ratingNumber text-sm xl:text-[0.925rem] 2xl:text-[1rem] text-white">
              {recipeRating ? recipeRating : "N/A"}
            </span>
            <span className="ratingIcon">
              <TiStarFullOutline className="text-white text-sm xl:text-[0.925rem] 2xl:text-[1rem]" />
            </span>
          </div>
        </div>
      </div>
      <UserData recipeData={recipeDetailData} userDetails={userData} />
      <div className="categoryAndShare mt-1 flex items-center justify-between">
        <CategoryTag categoryData={recipeCategories} />
        <div className="ShareIcon flex w-fit border-1 border-theme-light rounded-full px-1.5 items-center justify-between gap-1 bg-transperent-dark">
          <span className="icon">
            <MdShare className="text-theme-light 2xl:text-[1.1rem]" />
          </span>
          <span className="shareText xl:text-[1.01rem] 2xl:text-[1.1rem] text-theme-light">
            Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeInformation;
