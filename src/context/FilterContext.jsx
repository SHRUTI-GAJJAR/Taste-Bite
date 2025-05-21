import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const defaultMinTime = 1;
  const defaultMaxTime = 120;

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterApplied, setFilterApplied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [minTime, setMinTime] = useState(defaultMinTime);
  const [maxTime, setMaxTime] = useState(defaultMaxTime);
  const [sortByRating, setSortByRating] = useState("");
  const [sortByName, setSortByName] = useState("");

  const applyFilterNow = () => {
    setFilterApplied(true);
  };

  const timeRange = [minTime, maxTime];

  const setTimeRange = ([min, max]) => {
    setMinTime(min);
    setMaxTime(max);
  };

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

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    setIsVeg(false);
    setIsNonVeg(false);
    setMinTime(defaultMinTime);
    setMaxTime(defaultMaxTime);
    setSortByRating("");
    setSortByName("");
    setFilterApplied(false)
  };

  const appliedFilterCount =
    (selectedCategories.length > 0 ? 1 : 0) +
    (searchTerm.trim() !== "" ? 1 : 0) +
    (isVeg ? 1 : 0) +
    (isNonVeg ? 1 : 0) +
    (minTime !== defaultMinTime || maxTime !== defaultMaxTime ? 1 : 0) +
    (sortByRating !== "" ? 1 : 0) +
    (sortByName !== "" ? 1 : 0);

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        toggleCategory,
        searchTerm,
        setSearchTerm,
        isVeg,
        isNonVeg,
        toggleVeg,
        toggleNonVeg,
        minTime,
        maxTime,
        setMinTime,
        setMaxTime,
        timeRange,
        setTimeRange,
        sortByRating,
        setSortByRating,
        sortByName,
        setSortByName,
        resetAllFilters,
        appliedFilterCount,
        applyFilterNow,
        isFilterApplied,
        setFilterApplied,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
