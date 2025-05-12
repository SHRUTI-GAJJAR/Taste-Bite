import { createContext, useContext, useState } from "react";

const FoodCategoryContext = createContext();
export const useFoodCategory = () => useContext(FoodCategoryContext);

export const FoodCategoryProvider = ({ children }) => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);

  const toggleVeg = () => {
    const newVeg = !isVeg;
    setIsVeg(newVeg);
    if (newVeg && isNonVeg) setIsNonVeg(false); 
  };

  const toggleNonVeg = () => {
    const newNonVeg = !isNonVeg;
    setIsNonVeg(newNonVeg);
    if (newNonVeg && isVeg) setIsVeg(false); 
  };

  const resetCategory = () => {
    setIsVeg(false);
    setIsNonVeg(false);
  };

  return (
    <FoodCategoryContext.Provider
      value={{ isVeg, isNonVeg, toggleVeg, toggleNonVeg, resetCategory }}
    >
      {children}
    </FoodCategoryContext.Provider>
  );
};
