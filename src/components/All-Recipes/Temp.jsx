import { useFilter } from "../../context/FilterContext";

const Temp = () => {
  const {
    selectedCategories,
    isVeg,
    isNonVeg,
    minTime,
    maxTime,
    sortByRating,
    sortByName,
    appliedFilterCount,
  } = useFilter();
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Filter Values:</h2>
      <p>
        <strong>Selected Categories:</strong> {selectedCategories.join(", ")}
      </p>
      <p>
        <strong>Is Veg:</strong> {isVeg.toString()}
      </p>
      <p>
        <strong>Is Non-Veg:</strong> {isNonVeg.toString()}
      </p>
      <p>
        <strong>Time Range Min:</strong> {minTime}
      </p>
      <p>
        <strong>Time Range Max:</strong> {maxTime}
      </p>
      <p>
        <strong>Sort by Rating:</strong> {sortByRating}
      </p>
      <p>
        <strong>Sort by Name:</strong> {sortByName}
      </p>
      <p>
        <strong>Applied Filter Count:</strong> {appliedFilterCount}
      </p>
    </div>
  );
};

export default Temp;
