const RecipeInstructions = ({ recipeDetailData }) => {
  const recipeDetailDataArray = recipeDetailData?.recipe?.[0]
    ?.split("\n\n")
    .filter((item) => item.trim() !== "");
  return (
    <div className="steps p-3 w-full">
      <div className="title mb-3">
        <h2 className="font-semibold text-xl dark:text-gray-100">
          Recipe Instructions
        </h2>
      </div>
      <ul className="flex flex-col gap-2">
        {recipeDetailDataArray?.map((item, index) => (
          <li
            key={index}
            className="text-sm cursor-pointer border border-transperent-border-dark hover:bg-transperent-dark/80 hover:scale-99 transition-all duration-300 flex gap-2 rounded-md sm:rounded-xl bg-transperent-dark flex-col items-start list-none p-3 dark:text-gray-300 text-gray-800"
          > 
            <p className="text-orange-600 font-semibold text-[1rem]">Step {index + 1}</p>
            <p className="text-sm dark:text-gray-300/80">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeInstructions;
