import vage from "../../assets/svg/vage.svg";
import nonVage from "../../assets/svg/nonVage.svg";
import { useFoodCategory } from "../../context/FoodCategoryContext";

const FoodCategoryToggle = () => {
  const { isVeg, isNonVeg, toggleVeg, toggleNonVeg } = useFoodCategory();

  return (
    <div className="toggleButton flex items-center gap-4 justify-center w-fit">
      <div onClick={toggleVeg} className="veg cursor-pointer">
        <div className="toggle h-9 w-16 relative flex items-center justify-center border border-gray-700/20 dark:border-[#2d2d2d] rounded-full">
          <div
            className={`h-3 w-11 rounded-full transition-colors duration-300 ${
              isVeg ? "bg-[#1ba672]" : "bg-[#f0f3f5] dark:bg-[#282931]"
            }`}
          >
            <img
              src={vage}
              alt="veg"
              className={`h-5 absolute top-[0.45rem] transition-transform duration-300 ${
                isVeg ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div onClick={toggleNonVeg} className="nonVeg cursor-pointer">
        <div className="toggle h-9 w-16 relative flex items-center justify-center border border-gray-700/20 dark:border-[#2d2d2d] rounded-full">
          <div
            className={`h-3 w-11 rounded-full transition-colors duration-300 ${
              isNonVeg ? "bg-[#e53554]" : "bg-[#f0f3f5] dark:bg-[#282931]"
            }`}
          >
            <img
              src={nonVage}
              alt="non-veg"
              className={`h-5 absolute top-[0.45rem] transition-transform duration-300 ${
                isNonVeg ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategoryToggle;
