import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../context/apiContext";
import { BookmarkContext } from "../context/BookmarkContext";
import getCartInitialData from "../components/Utils/GetCartInitialData";
import { useFilter } from "./FilterContext";

export const FoodSortContext = createContext();

const FoodSortProvider = ({ children }) => {
  const { recipeSliderData } = useApi();
  const { bookMarked } = useContext(BookmarkContext);
  const { isVeg, isNonVeg, resetAllFilters } = useFilter();

  const [foods, setFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortType, setSortType] = useState("");

  const resetFilter = () => {
    setSortType("");
    resetAllFilters();
  };

  useEffect(() => {
    const initialData = getCartInitialData(bookMarked, recipeSliderData);
    setFoods(initialData);
    setSortedFoods(initialData);
  }, [bookMarked, recipeSliderData]);

  useEffect(() => {
    let filtered = [...foods];

    if (isVeg) {
      filtered = filtered.filter((item) => item.Isvage === true);
    } else if (isNonVeg) {
      filtered = filtered.filter((item) => item.Isvage === false);
    }

    if (sortType) {
      handleSort(sortType, filtered);
    } else {
      setSortedFoods(filtered);
    }
  }, [foods, isVeg, isNonVeg]);

  const handleSort = (type, customList = null) => {
    let sorted = [...(customList || sortedFoods)];
    switch (type) {
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted = [...foods];
        break;
    }
    setSortedFoods(sorted);
    setSortType(type);
  };

  return (
    <FoodSortContext.Provider value={{ sortedFoods, handleSort, resetFilter }}>
      {children}
    </FoodSortContext.Provider>
  );
};

export default FoodSortProvider;

// ✅ Custom Hook
export const useFoodSort = () => {
  const context = useContext(FoodSortContext);
  if (!context) {
    throw new Error("useFoodSort must be used within a FoodSortProvider");
  }
  return context;
};
