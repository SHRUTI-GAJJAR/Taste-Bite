import { createContext, useContext, useEffect, useState } from "react";

const ViewModeContext = createContext();

export const useViewMode = () => useContext(ViewModeContext);

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState(() => {
    try {
      return localStorage.getItem("viewMode") || "list";
    } catch {
      return "grid";
    }
  });

  const toggleMode = () => {
    setViewMode((prev) => (prev === "list" ? "grid" : "list"));
  };

  useEffect(() => {
    try {
      localStorage.setItem("viewMode", viewMode);
    } catch (error) {
      console.error("View Mode update failed:", error);
    }
  }, [viewMode]); 

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};
