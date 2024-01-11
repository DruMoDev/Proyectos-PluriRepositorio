import React from "react";
import AutoplayCarousel from "./AutoplayCarousel";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="bg-custom min-h-screen bg-cover bg-center flex flex-col pt-44 items-center "
    >
      <div className=" container mx-auto w-full">
        <h1 className="tracking-widest w-3/4 mx-auto text-center line lg:text-7xl text-4xl md:text-5xl">
          Desarrollador Web Full-Stack
        </h1>
        <p className="w-4/6 lg:leading-10 leading-7 mx-auto lg:text-2xl text-base mt-20 text-[#adadad] text-center">
          Soy Roger Morera, un apasionado autodidacta del mundo tecnológico,
          construyendo experiencias digitales con un enfoque integral, desde la
          concepción de ideas hasta su implementación y mejora continua.
        </p>
        <p className="w-5/6 lg:leading-10 leading-6 mx-auto lg:text-2xl mt-20 text-white text-center text-xs md:hidden">Estas son las tecnologias con las que he trabajado</p>
        <div className="h-[40px] lg:h-[70px] w-3/4 mx-auto md:mt-36 mt-2">
          <AutoplayCarousel />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
