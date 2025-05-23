import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Slider/Carousel";
import HomePageCategory from "../components/Famous-Category/HomePageCategory";
import SearchBox from "../components/Navbar/SearchBox";
import NewRecipes from "../components/New-Arrival-Recipes/NewRecipes";
import "../App.css";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-[#121212] transition-colors">
      <NavBar />
      <SearchBox />
      <main>
        <Carousel />
        <HomePageCategory />
        <NewRecipes />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
