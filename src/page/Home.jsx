import NavBar from '../components/NavBar'
import "../App.css";

const Home = () => {

  return (
    <header className='w-full h-screen bg-main dark:bg-main-dark transition-colors'>
      <NavBar></NavBar>
    </header>
  )
}

export default Home