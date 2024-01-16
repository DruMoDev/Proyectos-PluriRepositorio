import usePortafolio from "../hooks/usePortafolio";
import AutoplayCarousel from "./AutoplayCarousel";
import Badge from "./Badge";

const AboutMe = () => {
  return (
    <div id="aboutme" className="flex flex-col pt-44 items-center min-h-screen">
      <div className=" container mx-auto w-full">
        <h1 className="tracking-widest w-3/4 mx-auto text-center line lg:text-7xl text-4xl md:text-5xl">
          Desarrollador <span className="text-primary">Web</span> Full-Stack
        </h1>
        <p className="w-4/6 lg:leading-10 leading-7 mx-auto lg:text-2xl text-base mt-20 text-secondary text-center">
          Soy <span className="text-primary">Roger Morera</span>, un apasionado
          autodidacta del mundo tecnológico, construyendo experiencias digitales
          con un <span className="text-primary">enfoque integral</span>, desde
          la concepción de ideas hasta su implementación y mejora continua.
        </p>
       
        <p className="w-5/6 lg:leading-10 leading-6 mx-auto lg:text-2xl mt-20 text-secondary text-center text-xs md:hidden">
          Estas son las <span className="text-primary">tecnologias</span> con
          las que he trabajado
        </p>
        <div className="h-[40px] lg:h-[70px] w-3/4 mx-auto md:mt-36 mt-2">
          <AutoplayCarousel />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
