"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ScrollElement } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isDivVisible, setIsDivVisible] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Obtiene la información del rectángulo del div objetivo
      const aboutmeDiv = document.getElementById("aboutme");
      const proyectosDiv = document.getElementById("proyectos");
      const contactoDiv = document.getElementById("contacto");

      const aboutmeRect = aboutmeDiv.getBoundingClientRect();
      const proyectosRect = proyectosDiv.getBoundingClientRect();
      // const contactoRect = contactoDiv.getBoundingClientRect();

      // Comprueba si el rectángulo está dentro de la ventana visible
      if (aboutmeRect.top <= 0 && aboutmeRect.bottom > 300) {
        setIsDivVisible("aboutme");
      } else if (proyectosRect.top >= 0 && aboutmeRect.bottom < 300) {
        setIsDivVisible("proyectos");
      }
    };

    // Agrega el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full py-5 fixed flex justify-between px-6 z-50 text-[#adadad] sm:text-base sm:px-[100px] md:px-[120px] md:text-lg xl:px-[250px] ${
        scrolled
          ? "bg-[#0f0f0f] border-black border"
          : "bg-transparent border border-transparent "
      } transition-background-color duration-300 ease-in-out `}
    >
      <div className="">
        <span className="hover:text-white cursor-pointer transition-all duration-300">
          Roger Morera
        </span>
      </div>
      <div className="  flex gap-5 lg:gap-20 xl:gap-32 ">
        <Link
          onClick={(e) => ScrollElement("aboutme", e)}
          className={`hover:text-white transition-all duration-300 ${
            isDivVisible === "aboutme" ? "text-primary" : "text-secondary"
          } `}
          href={"#aboutme"}
        >
          About Me
        </Link>
        <Link
          onClick={(e) => ScrollElement("aboutme", e)}
          className={`hover:text-white transition-all duration-300 ${
            isDivVisible === "proyectos" ? "text-primary" : "text-secondary"
          } `}
          href={"#proyectos"}
        >
          Proyectos
        </Link>
        <Link
          className="hover:text-white transition-all duration-300"
          href={"/"}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
