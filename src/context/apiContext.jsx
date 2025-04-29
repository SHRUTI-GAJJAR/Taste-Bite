import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/script/axios";

const apiContext = createContext();

export const useApi = () => useContext(apiContext);

export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategory(res.data.data);
      console.log(res.data);
      
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return <apiContext.Provider value={{ category, fetchCategories }}>{children}</apiContext.Provider>;
};
