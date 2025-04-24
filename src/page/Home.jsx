import NavBar from '../components/NavBar'
import { useTheme } from '../context/ThemeContext'
import "../App.css";

const Home = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <header className='w-full h-fit bg-main dark:bg-main-dark'>
      <NavBar></NavBar>
      <p onClick={toggleTheme}> click </p>
    </header>
  )
}

export default Home