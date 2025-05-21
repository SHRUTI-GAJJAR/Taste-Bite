import { MdOutlineArrowForwardIos } from "react-icons/md";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { normalizedIcons, bgClasses } from "../../services/script/recipeHelper";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const CategoryCardGrid = ({
  categoryName,
  categoryImg,
  CategoryDescription,
  availbleRecipe,
}) => {
  const formattedKey = categoryName.replace(/\s+/g, "_");
  const svgIcon = normalizedIcons[formattedKey];
  const categoryBg = bgClasses[formattedKey];

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className={`cursor-pointer group ${categoryBg} rounded-md sm:rounded-xl xl:w-[19.3%] 2xl:w-[19.4%] sm:w-[32.4%] w-[48.7%] p-2`}
    >
      <NavLink
        to={`/Recipe/${categoryName === "Dessert" ? "Dessart" : categoryName.replace(/\s+/g, "-")}`}
      >
        <article className="flex group items-center justify-center flex-col gap-1.5">
          <figure className="rounded-md sm:rounded-xl h-40 relative overflow-hidden">
            <img
              src={`${`https://taste-bite-api.onrender.com/${categoryImg}`}`}
              onError={(requstedImage) => {
                requstedImage.target.onerror = null;
                requstedImage.target.src = NotFound;
              }}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              alt="categoryImg"
            />
            <div className="categoryTag z-10 top-1.5 right-1.5 absolute">
              <div
                className={`icon h-9 w-9 backdrop-blur-lg rounded-full flex items-center justify-center`}
              >
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(svgIcon)}`}
                  alt="categoryIcon"
                  className="h-5"
                />
              </div>
            </div>
          </figure>
          <div className="textData w-full flex flex-col">
            <div className="text flex items-center">
              <p className="text-gray-900 text-[1.15rem] font-semibold">
                {categoryName} ({availbleRecipe})
              </p>

              <div className="redirect flex items-center justify-start font-semibold gap-0.5">
                <MdOutlineArrowForwardIos className="opacity-50 group-hover:opacity-100 duration-300 group-hover:translate-x-1 transition-transform text-gray-700 mt-0.5 font-semibold text-[1rem]" />
              </div>
            </div>
            <p className="text-sm text-gray-800/70 line-clamp-1">
              {CategoryDescription}
            </p>
          </div>
        </article>
      </NavLink>
    </motion.li>
  );
};

export default CategoryCardGrid;
