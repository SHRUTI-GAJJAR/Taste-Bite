import { RiArrowGoBackLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useApi } from "../../context/apiContext";
import {
  categoryBgClasses,
  normalizedCategoryIcons,
} from "../../services/script/recipeHelper";
import { useFilter } from "../../context/FilterContext";

const CategorySideMenu = ({ isOpen, onClose }) => {
  const { categoryName, categoryLoading } = useApi();
  const { selectedCategories, toggleCategory } = useFilter();

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-40"
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 h-[65vh] right-0 w-full dark:bg-[#1e1e1e] bg-[#f3f3f7] z-50 overflow-hidden p-6 flex gap-2 flex-col"
      >
        <div className="titelBar flex w-full items-center justify-between">
          <h2 className="text-[1.5rem] text-black dark:text-gray-200 font-bold">
            Select Categories
          </h2>
          <button
            className="text-black dark:text-gray-200 rounded-full bg-gray-200 dark:bg-[#2d2d2d] p-2 font-semibold"
            onClick={onClose}
          >
            <RiArrowGoBackLine className="text-[1.1rem]" />
          </button>
        </div>

        <div className="border-1 border-dashed mt-2 mb-2 h-px w-full border-gray-700/45"></div>

        <div className="categorySelecation">
          <div className="grid grid-cols-1 noScrollBar h-[42vh] md:grid-cols-2 gap-2 overflow-y-auto">
            {!categoryLoading && categoryName.length > 0 ? (
              categoryName.map((catName, index) => {
                const formattedKey = catName.replace(/\s+/g, "_");
                const svgIcon = normalizedCategoryIcons[formattedKey];
                const isSelected = selectedCategories.includes(catName);

                return (
                  <button
                    onClick={() => toggleCategory(catName)}
                    key={index}
                    className={`p-4 text-left flex border-2 items-center gap-2.5 text-xl rounded transition-all duration-200 ${
                      isSelected
                        ? "bg-transperent-dark border border-transperent-border-dark"
                        : "bg-white dark:bg-[#2d2d2d] border-transparent"
                    } text-gray-900 dark:text-gray-200`}
                  >
                    <span
                      className={`catagoryIcon p-1.5 flex rounded-full ${categoryBgClasses[formattedKey]} justify-center items-center`}
                    >
                      <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(
                          svgIcon
                        )}`}
                        className="h-4"
                        alt={`${catName} icon`}
                      />
                    </span>
                    <p className="text-xl">{catName}</p>
                  </button>
                );
              })
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 col-span-2">
                Loading categories...
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CategorySideMenu;
