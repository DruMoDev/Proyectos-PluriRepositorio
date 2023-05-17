import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className='w-11/12 mx-auto mt-16'>
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
