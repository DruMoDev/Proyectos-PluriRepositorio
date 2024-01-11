import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Proyectos from "./components/Proyectos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutMe />
      <Proyectos />
    </main>
  );
}
