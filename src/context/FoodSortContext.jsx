import React, { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../context/apiContext";
import { BookmarkContext } from "../context/BookmarkContext";
import getCartInitialData from "../components/Utils/GetCartInitialData";

export const FoodSortContext = createContext();

const FoodSortProvider = ({ children }) => {
  const { recipeSliderData } = useApi(); 
  const { bookMarked } = useContext(BookmarkContext);

  const [foods, setFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);

  useEffect(() => {
    const initialData = getCartInitialData(bookMarked, recipeSliderData);
    setFoods(initialData);
    setSortedFoods(initialData);
  }, [bookMarked, recipeSliderData]);

  const handleSort = (type) => {
    let sorted = [...foods];
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
  };

  return (
    <FoodSortContext.Provider value={{ sortedFoods, handleSort }}>
      {children}
    </FoodSortContext.Provider>
  );
};

export default FoodSortProvider;
