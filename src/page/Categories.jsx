import NavBar from "../components/Navbar/NavBar";
import "../App.css";
import AllCategory from "../components/Category/AllCategory";
import Footer from "../components/Footer/Footer";

const Categories = () => {
  return (
    <div className="w-full relative h-full bg-white dark:bg-main-dark transition-colors">
        <NavBar />
      <main>
        <AllCategory />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Categories;
