import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import CarouselPrueba from "./components/CarouselPrueba";

export default function Home() {
  return (
    <main className="">
      <AboutMe />
      <Proyectos />
      <Contacto />
      
    </main>
  );
}
