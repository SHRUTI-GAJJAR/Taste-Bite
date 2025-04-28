import NavBar from '../components/Navbar/NavBar'
import Carousel from '../components/Slider/Carousel'
import HomePageCategory from '../components/Famous-Category/HomePageCategory';
import "../App.css";

const Home = () => {

  return (
    <header className='w-full h-fit bg-main dark:bg-main-dark transition-colors'>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <HomePageCategory></HomePageCategory>
    </header>
  )
}

export default Home