import NavBar from '../components/Navbar/NavBar'
import Carousel from '../components/Slider/Carousel'
import "../App.css";

const Home = () => {

  return (
    <header className='w-full h-screen bg-main dark:bg-main-dark transition-colors'>
      <NavBar></NavBar>
      <Carousel></Carousel>
    </header>
  )
}

export default Home