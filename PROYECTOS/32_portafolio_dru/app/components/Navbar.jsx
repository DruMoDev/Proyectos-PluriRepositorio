"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as ScrollLink1 } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isDivVisible, setIsDivVisible] = useState("aboutme");

  useEffect(() => {
    const handleScroll = () => {
      // Obtiene la información del rectángulo del div objetivo
      const aboutmeDiv = document.getElementById("aboutme");
      const proyectosDiv = document.getElementById("proyectos");
      const contactoDiv = document.getElementById("contacto");

      const aboutmeRect = aboutmeDiv.getBoundingClientRect();
      const proyectosRect = proyectosDiv.getBoundingClientRect();
      const contactoRect = contactoDiv.getBoundingClientRect();

      // Comprueba si el rectángulo está dentro de la ventana visible

      if (aboutmeRect.top <= 0 && aboutmeRect.bottom > 300) {
        setIsDivVisible("aboutme");
      } else if (proyectosRect.top >= 0 && aboutmeRect.bottom < 300) {
        setIsDivVisible("proyectos");
      } else if (contactoRect.top >= 0 && proyectosRect.bottom < 300) {
        setIsDivVisible("contacto");
      }
    };
    if (pathname !== "/") {
      window.removeEventListener("scroll", handleScroll);
    }
    // Agrega el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    if (pathname === "/") {
      setIsDivVisible("aboutme");
    }

    if (pathname === "/proyectos") {
      setIsDivVisible("");
      setIsDivVisible("proyectos");
    }

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

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
    <header
      className={`w-full fixed z-50 ${
        scrolled
          ? "bg-[#15151D] border-black border"
          : "bg-transparent border border-transparent "
      } transition-background-color duration-300 ease-in-out `}
    >
      <div className="container mx-auto flex items-center justify-between py-5 text-secondary text-xs md:text-lg ">
        <Image
          src={"/yo.png"}
          height={50}
          width={50}
          alt="logo"
          className="rounded-full h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
        />

        <nav className="  flex gap-5 lg:gap-20  ">
          <Link
            className={`hover:text-white transition-all duration-300 ${
              isDivVisible === "aboutme" ? "text-primary" : "text-secondary"
            } `}
            href={"#aboutme"}
          >
            About Me
          </Link>
          <Link
            className={`hover:text-white transition-all duration-300 ${
              isDivVisible === "proyectos" ? "text-primary" : "text-secondary"
            } `}
            href={"#proyectos"}
          >
            Proyectos
          </Link>
          <Link
            className={`hover:text-white transition-all duration-300 ${
              isDivVisible === "contacto" ? "text-primary" : "text-secondary"
            } `}
            href={"/#contacto"}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
