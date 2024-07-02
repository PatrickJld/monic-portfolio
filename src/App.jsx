import './App.css'
import Home from './components/Home/Home';
// import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Carousel from "./components/Gallery/Carousel.jsx";

function App() {

  return (
    <>
        <Home/>
        <About />
        <Experience />
        <Carousel />
        <Footer/>
    </>
  )
}

export default App
