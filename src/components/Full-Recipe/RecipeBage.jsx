import formatTime from "../Utils/formatedTime";
import { CgTimelapse } from "react-icons/cg";
import ingredients from "../../assets/svg/ingredients.svg";

const RecipeBage = ({ totalIngredients, rcipeCookingTime }) => {
  return (
    <div className="otherInfo absolute px-2 py-1 bottom-1.5 right-1.5 bg-black/20 backdrop-blur-3xl rounded-full text-white flex gap-2 items-center justify-center">
      <div className="cookTime flex justify-center items-center gap-0.5">
        <span className="timerIcon">
          <CgTimelapse className="text-[1rem] 2xl:text-[1.1rem]" />
        </span>
        <span className="time font-semibold  2xl:text-[1.1rem] xl:text-[1.01rem] ">
          {formatTime(rcipeCookingTime)}
        </span>
      </div>
      <p className="line h-4 opacity-70 w-1 rounded-full border-l-2"></p>
      <div className="ingredients flex justify-center items-center gap-1">
        <img src={ingredients} className="h-4.5" alt="ingredients" />
        <p className="text-[1rem] font-semibold 2xl:text-[1.1rem]">
          {totalIngredients} Ingredients
        </p>
      </div>
    </div>
  );
};

export default RecipeBage;
