const RecipeIngredients = ({ ingredientsArray }) => {


  return (
    <div className="ingredients sm:rounded-xl rounded-md p-3 border border-gray-300 dark:border-2 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] bg-[#f3f6f9] w-full">
      <div className="title">
        <h2 className="font-semibold text-xl dark:text-gray-100">
          Ingredients
        </h2>
      </div>

      <div className="border-1 border-dashed mt-2 mb-2 h-px w-full border-gray-600/45"></div>

      <ul className="list-disc pl-5 space-y-1">
        {ingredientsArray?.map((item, index) => (
          <li key={index} className="text-sm dark:text-gray-300 text-gray-800">
            {item}
          </li>


        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
