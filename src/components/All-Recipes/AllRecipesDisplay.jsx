import { useEffect } from "react";
import { useApi } from "../../context/apiContext";
import ALL from "../../assets/svg/All.svg";
import HeaderTitle from "../Utils/HeaderTitle";
import { NavLink, useNavigate } from "react-router";
import {
  bgClassesCategoryActive,
  categoryWiseImg,
} from "../../services/script/recipeHelper";

const AllRecipesDisplay = () => {
  const { categoryName, fetchCategoriesName } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoriesName();
    if (window.location.pathname === "/Recipe") {
      navigate("/Recipe/All", { replace: true });
    }
  }, []);
  return (
    <section className="relative h-auto flex items-center justify-center">
      <div className="cartWrap m-auto md:max-w-[75vw] w-[97vw]">
        <div className="headerTitleWrap flex gap-2 mt-3 mb-2 sm:mt-6">  
          <HeaderTitle title={"All Recipes"} />
        </div>
        <div className="categorySlider pb-2 flex items-center gap-1.5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollBarVisible">
          <NavLink
            className={({ isActive }) =>
              `min-w-[32.3%] sm:min-w-[24.3%] lg:min-w-[24.5%] 2xl:min-w-[16.5%] snap-start flex flex-col items-center justify-center gap-1 p-2 rounded-md ${
                isActive
                  ? "bg-transperent-dark border-2 border-transperent-border-dark"
                  : "bg-gray-200 border-2 dark:bg-[#1e1e1e] border-transparent"
              }`
            }
            to={`/Recipe/All`}
          > 
            <div className="categoryImg h-10 w-full">
              <img src={ALL} alt="svg" className="w-full h-full" />
            </div>
            <div className="categoryName dark:text-gray-200 text-gray-800 text-[1.1rem] font-semibold whitespace-nowrap">
              <p>All</p>
            </div>
          </NavLink>
          {categoryName.map((catName, index) => {
            const formattedCat = catName.replace(/\s+/g, "-");
            const formattedSvg = catName.replace(/\s+/g, "_");
            const svgIcon = categoryWiseImg[formattedSvg];
            return (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `min-w-[32.3%] sm:min-w-[24.3%] lg:min-w-[24.5%] 2xl:min-w-[16.5%] snap-start transition-colors duration-300 flex flex-col items-center justify-center gap-1 p-2 rounded-md ${
                    isActive
                      ? bgClassesCategoryActive[formattedSvg]
                      : "bg-gray-200 border-2 dark:bg-[#1e1e1e] border-transparent"
                  }`
                }
                to={`/Recipe/${formattedCat}`}
              >
                <div className="categoryImg h-10 w-full">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      svgIcon
                    )}`}
                    alt="svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="categoryName text-gray-800 dark:text-gray-200 text-[1.1rem] font-semibold whitespace-nowrap">
                  <p>{catName}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="border-1 border-dashed md:mt-1.5 mt-1 md:mb-2 mb-2 h-px w-[100%] border-gray-700/45"></div>
      </div>
    </section>
  );
};

export default AllRecipesDisplay;
