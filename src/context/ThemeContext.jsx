  import { createContext, useContext, useEffect, useState } from "react";

  const ThemeContext = createContext();

  export const useTheme = () => useContext(ThemeContext);

  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
      try {
        return localStorage.theme || "light";
      } catch {
        return "light";
      }
    });

    useEffect(() => {
      try {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.theme = theme;
      } catch (err) {
        console.error("Theme update failed:", err);
      }
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prev) => prev === "light" ? "dark" : "light");
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
