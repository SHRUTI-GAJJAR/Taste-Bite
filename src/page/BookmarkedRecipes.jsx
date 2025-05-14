import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import EmptyCart from "../components/Bookmarked-Recipe/EmptyCart";
import RecipeCart from "../components/Bookmarked-Recipe/RecipeCart";
import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";

const BookmarkedRecipes = () => {
  const { bookMarked } = useContext(BookmarkContext);
  const isEmpty = bookMarked.length === 0;

  return (
    <div className="w-full relative h-screen bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>{isEmpty ? <EmptyCart /> : <RecipeCart />}</main>
    </div>
  );
};

export default BookmarkedRecipes;
