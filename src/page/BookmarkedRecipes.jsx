import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import EmptyCart from "../components/BookmarkedRecipe/EmptyCart";
import RecipeCart from "../components/BookmarkedRecipe/RecipeCart";
import { useEffect, useState } from "react";

const BookmarkedRecipes = () => {
  const [bookMarked, setBookMarked] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("bookmarksItem");

    try {
      const parsed = stored ? JSON.parse(stored) : {};
      setBookMarked(parsed);
    } catch (err) {
      console.log("Invalid JSON in localStorage", err);
      setBookMarked({});
    }
  }, []);

  const isEmpyt = Object.keys(bookMarked).length === 0;

  return (
    <div className="w-full relative h-screen bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>{isEmpyt ? <EmptyCart /> : <RecipeCart items={bookMarked} />}</main>
    </div>
  );
};

export default BookmarkedRecipes;
