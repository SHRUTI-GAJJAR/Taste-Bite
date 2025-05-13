import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookMarked, setBookMarked] = useState([]);

  const loadBookMarks = () => {
    const stored = localStorage.getItem("bookmarksItem");

    try {
      const parsed = stored ? JSON.parse(stored) : [];
      setBookMarked(parsed);
    } catch (err) {
      console.error("Invalid JSON in localStorage", err);
      setBookMarked([]);
    }
  };

  const saveBookmarks = (data) => {
    setBookMarked(data);
    localStorage.setItem("bookmarksItem", JSON.stringify(data));
  };

  useEffect(() => {
    loadBookMarks();

    const handleStorageChange = () => {
      loadBookMarks();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <BookmarkContext.Provider
      value={{ bookMarked, setBookMarked: saveBookmarks }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
