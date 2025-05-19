import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/script/axios";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categoryName, setCategoryName] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const [recipeSliderData, setRecipeData] = useState([]);
  const [sliderDataLoading, setSliderDataLoading] = useState(true);

  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const [categoryWiseDataLoading, setCategoryWiseDataLoading] = useState(true);

  const [detailRecipeData, setDetailRecipeData] = useState([]);
  const [detailRecipeDataLoading, setDetailRecipeDataLoading] = useState(true);

  const [userData, setUserData] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  const [categoryCount, setCategoryCount] = useState([]);
  const [categoryCountLoading, setCategoryCountLoading] = useState(true);

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
      console.error("Failed to fetch slider data", error);
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
      console.error("Failed to fetch category names", error);
      setCategoryName([]);
    } finally {
      setCategoryLoading(false);
    }
  };

  const fetchCategoriesData = async (categoryName) => {
    try {
      const res = await axiosInstance.get(
        `/items/category/${categoryName.replace(/-/g, "%20")}`
      );
      setCategoryWiseData(res.data);
    } catch (error) {
      console.error("Failed to fetch category wise data", error);
      setCategoryWiseData([]);
    } finally {
      setCategoryWiseDataLoading(false);
    }
  };

  const fetchRecipe = async () => {
    try {
      const res = await axiosInstance.get("/recipe");
      setDetailRecipeData(res.data.recipes);
    } catch (error) {
      console.error("Failed to fetch recipe data", error);
      setDetailRecipeData([]);
    } finally {
      setDetailRecipeDataLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await axiosInstance.get("/auth");
      setUserData(res.data.users);
    } catch (error) {
      console.error("Failed to fetch user data", error);
      setUserData(null);
    } finally {
      setUserLoading(false);
    }
  };

  const fetchCategoryCount = async () => {
    try {
      const res = await axiosInstance.get("/category_count");
      setCategoryCount(res.data.data);
    } catch (error) {
      console.error("Failed to fetch category count", error);
      setCategoryCount([]);
    } finally {
      setCategoryCountLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchRecipeSliderData();
    fetchCategoriesName();
    fetchRecipe();
    fetchUserData();
    fetchCategoryCount();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        category,
        categoryName,
        recipeSliderData,
        categoryWiseData,
        detailRecipeData,
        userData,
        categoryCount,

        loading,
        categoryLoading,
        sliderDataLoading,
        categoryWiseDataLoading,
        detailRecipeDataLoading,
        userLoading,
        categoryCountLoading,

        fetchCategories,
        fetchRecipeSliderData,
        fetchCategoriesName,
        fetchCategoriesData,
        fetchRecipe,
        fetchUserData,
        fetchCategoryCount
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
