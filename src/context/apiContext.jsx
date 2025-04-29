import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/script/axios";

const apiContext = createContext();

export const useApi = () => useContext(apiContext);

export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategory(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
      setCategory([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <apiContext.Provider value={{ category, fetchCategories, Loading }}>
      {children}
    </apiContext.Provider>
  );
};
