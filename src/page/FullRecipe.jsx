import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import FullRecipeDetails from "../components/Full-Recipe/FullRecipeDetails";
import Footer from "../components/Footer/Footer";

const FullRecipe = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
      <NavBar />
      <main>
        <FullRecipeDetails></FullRecipeDetails>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default FullRecipe;
