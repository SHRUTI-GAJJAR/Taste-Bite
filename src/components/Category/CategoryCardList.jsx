import { MdOutlineArrowForwardIos } from "react-icons/md";
import NotFound from "../../assets/image/NOTFOUND!.png";
import { normalizedIcons, bgClasses } from "../../services/script/recipeHelper";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const CategoryCardList = ({
  categoryName,
  categoryImg,
  CategoryDescription,
}) => {
  const formattedKey = categoryName.replace(/\s+/g, "_");
  const svgIcon = normalizedIcons[formattedKey];
  const categoryBg = bgClasses[formattedKey];

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className={`${categoryBg} cursor-pointer group 2xl:w-[49.6%] lg:w-[49.3%] h-full rounded-md sm:rounded-xl w-full flex items-center justify-between p-2`}
    >
      <div className="nameAndIcon flex lg:w-[70%] sm:w-[85%] w-[70%] items-start justify-between gap-4 flex-col">
        <div className="textAndRedirect w-full">
          <div className="categoryName flex items-center gap-1 ">
            <p className="text-gray-700 font-semibold text-xl">
              {categoryName}
            </p>
            <NavLink to="/Categories">
              <div className="redirect flex items-center justify-start font-semibold gap-0.5">
                <MdOutlineArrowForwardIos className="opacity-50 group-hover:opacity-100 duration-300 group-hover:translate-x-1 transition-transform text-gray-700 mt-0.5 font-semibold text-[1rem]" />
              </div>
            </NavLink>
          </div>
          <div className="categorySubText w-full">
            <p className="w-[90%] text-sm text-gray-700/70 line-clamp-1">
              {CategoryDescription}
            </p>
          </div>
        </div>
        <div
          className={
            "icon h-9 border border-gray-700/50 bg-white w-9 rounded-full flex items-center justify-center"
          }
        >
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgIcon)}`}
            alt="categoryIcon"
            className="h-5"
          />
        </div>
      </div>
      <div className="categoryImg w-fit rounded-md sm:rounded-xl overflow-hidden">
        <img
          src={`${`https://taste-bite-api.onrender.com/${categoryImg}`}`}
          onError={(requstedImage) => {
            requstedImage.target.onerror = null;
            requstedImage.target.src = NotFound;
          }}
          className="h-25 transition-transform duration-300 group-hover:scale-110"
          alt="categoryImg"
        />
      </div>
    </motion.li>
  );
};
export default CategoryCardList;
