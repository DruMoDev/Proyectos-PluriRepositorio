import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import WeatherAPI from "./components/WeatherAPI";

function App() {
  return (
    <div className='mx-auto min-h-screen  '>
      <NavbarComp />
      <WeatherAPI />
      <Footer />
    </div>
  );
}

export default App;
