import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import EmptyCart from "../components/Bookmarked-Recipe/EmptyCart";
import RecipeCart from "../components/Bookmarked-Recipe/RecipeCart";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "./BookmarkContext";

const BookmarkedRecipes = () => {
  const { bookMarked } = useContext(BookmarkContext);
  const isEmpty = bookMarked.length === 0;
  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem("reloaded");

    if (!alreadyReloaded) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }

    return () => {
      sessionStorage.removeItem("reloaded");
    };
  }, []);

  return (
    <div className="w-full relative h-screen bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>{isEmpty ? <EmptyCart /> : <RecipeCart />}</main>
    </div>
  );
};

export default BookmarkedRecipes;
