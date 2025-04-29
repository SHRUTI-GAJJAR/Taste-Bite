import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Slider/Carousel";
import HomePageCategory from "../components/Famous-Category/HomePageCategory";
import "../App.css";
import SearchBox from "../components/Navbar/SearchBox";

const Home = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
        <NavBar />
        <SearchBox />
      <main>
        <Carousel />
        <HomePageCategory />
      </main>
    </div>
  );
};

export default Home;
