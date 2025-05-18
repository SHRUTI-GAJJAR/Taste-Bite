import { RiArrowGoBackLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useApi } from "../../context/apiContext";
import {
  categoryBgClasses,
  normalizedCategoryIcons,
} from "../../services/script/recipeHelper";

const CategorySideMenu = ({ isOpen, onClose }) => {
  const { categoryName, fetchCategoriesName, categoryLoading } = useApi();
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
        className="fixed top-0 right-0 w-full dark:bg-[#1e1e1e] bg-[#f3f3f7] h-full z-50 overflow-y-auto p-6 flex gap-2 flex-col"
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
        <div className="border-1 border-dashed md:mt-1.5 mt-1 md:mb-2 mb-2 h-px w-[100%] border-gray-700/45"></div>
        <div className="categorySelecation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[46vh] overflow-scroll">
            {categoryName.map((catName, index) => {
              const formattedKey = catName.replace(/\s+/g, "_");
              const svgIcon = normalizedCategoryIcons[formattedKey];
              return (
                <div
                  key={index}
                  className="p-4 text-gray-900 dark:text-gray-200 h-fit flex items-center gap-2.5 text-xl bg-white dark:bg-[#2d2d2d] rounded"
                >
                  <span
                    className={`catagoryIcon p-1.5 flex rounded-full ${categoryBgClasses[formattedKey]} justify-center items-center`}
                  >
                    <img
                      src={`data:image/svg+xml;utf8,${encodeURIComponent(
                        svgIcon
                      )}`}
                      className="h-4"
                      alt="vegetarianIcon"
                    />
                  </span>
                  <p className="text-xl">{catName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CategorySideMenu;
