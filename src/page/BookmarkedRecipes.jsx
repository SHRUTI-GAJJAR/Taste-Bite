import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import EmptyCart from "../components/Bookmarked-Recipe/EmptyCart";
import RecipeCart from "../components/Bookmarked-Recipe/RecipeCart";
import { useEffect, useState } from "react";

const BookmarkedRecipes = () => {
  const [bookMarked, setBookMarked] = useState([]);

  const loadBookMarks = () => {
    const stored = localStorage.getItem("bookmarksItem");

    try {
      const parsed = stored ? JSON.parse(stored) : [];
      setBookMarked(parsed);
    } catch (err) {
      console.log("Invalid JSON in localStorage", err);
      setBookMarked([]);
    }
  };

  useEffect(() => {
    loadBookMarks();
    const handelStorageChange = () => {
      loadBookMarks();
    };
    window.addEventListener("storage", handelStorageChange);
    return () => {
      window.removeEventListener("storage", handelStorageChange);
    };
  }, []);

  const isEmpty = bookMarked.length === 0;

  return (
    <div className="w-full relative h-screen bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>{isEmpty ? <EmptyCart /> : <RecipeCart items={bookMarked} />}</main>
    </div>
  );
};

export default BookmarkedRecipes;
