import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import EmptyCart from "../components/BookmarkedRecipe/EmptyCart";

const BookmarkedRecipes = () => {
  return (
    <div className="w-full relative h-screen bg-white dark:bg-main-dark transition-colors">
        <NavBar />
      <main>
        <EmptyCart />
      </main>
    </div>
  );
};

export default BookmarkedRecipes;
