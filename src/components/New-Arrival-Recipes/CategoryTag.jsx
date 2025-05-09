import {
  normalizedCategoryIcons,
  categoryBgClasses,
} from "../../services/script/recipeHelper";

const CategoryTag = ({ categoryData }) => {
  const formattedKey = categoryData.replace(/\s+/g, "_");
  const bgClass = categoryBgClasses[formattedKey];
  const svgIcon = normalizedCategoryIcons[formattedKey];

  return (
    <div
      className={`${bgClass} category rounded-full flex w-fit items-center gap-1 py-0.5 px-2 2xl:px-3`}
    >
      <span className="catagoryIcon flex bggray justify-center items-center">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgIcon)}`}
          className="h-4"
          alt="vegetarianIcon"
        />
      </span>
      <p className="categoryName text-black font-semibold text-sm 2xl:text-[1rem] xl:text-[0.925rem]">
        <span>{categoryData}</span>
      </p>
    </div>
  );
};

export default CategoryTag;
