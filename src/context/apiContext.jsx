import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/script/axios";

const apiContext = createContext();

export const useApi = () => useContext(apiContext);

export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [recipeSliderData, setRecipeData] = useState([]);
  const [sliderDataLoading, setSliderDataLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategory(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
      setCategory([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeSliderData = async () => {
    try {
      const res = await axiosInstance.get("/items");
      setRecipeData(res.data);
    } catch (error) {
      console.error("Failed to fetch slider data ", error);
      setRecipeData([]);
    } finally {
      setSliderDataLoading(false);
    }
  };

  const fetchCategoriesName = async () => {
    try {
      const res = await axiosInstance.get("/items/categories");
      setCategoryName(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
      setCategoryName([]);
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchRecipeSliderData();
    fetchCategoriesName();
  }, []);

  return (
    <apiContext.Provider
      value={{
        categoryName,
        fetchCategoriesName,
        categoryLoading,
        category,
        fetchCategories,
        Loading,
        recipeSliderData,
        fetchRecipeSliderData,
        sliderDataLoading,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};
