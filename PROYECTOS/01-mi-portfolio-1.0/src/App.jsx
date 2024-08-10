import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className='w-screen'>
        <Navbar />
        <Hero />
       
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
