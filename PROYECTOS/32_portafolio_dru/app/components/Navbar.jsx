"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as ScrollLink1 } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isDivVisible, setIsDivVisible] = useState("aboutme");
  const router = useRouter();

  const pathnameNumero = parseInt(pathname.split("/")[2], 10);

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

      if (aboutmeRect.bottom > 100) {
        setIsDivVisible("aboutme");
      } else if (aboutmeRect.bottom <= 100 && proyectosRect.bottom > 300) {
        setIsDivVisible("proyectos");
      } else if (proyectosRect.bottom <= 300 && contactoRect.bottom > 100) {
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
    <header
      className={`w-full fixed z-50 ${
        scrolled
          ? "bg-quinary border-black border"
          : "bg-transparent border border-transparent "
      } transition-background-color duration-300 ease-in-out `}
    >
      <div className="container mx-auto flex items-center justify-between py-5 text-secondary text-xs md:text-lg ">
        <Image
          onClick={() => router.push("/")}
          src={"/yo.png"}
          height={50}
          width={50}
          alt="logo"
          className="cursor-pointer rounded-full h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
        />

        <nav className="  flex gap-5 lg:gap-20  ">
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "aboutme" ? "text-primary" : "text-secondary"
            } ${pathname !== `/` ? "text-secondary" : "text-primary"} `}
            href={"/#aboutme"}
          >
            About Me
          </Link>
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "proyectos"
                ? "text-primary"
                : "text-secondary" &&
                  pathname === `/proyectos/${pathnameNumero}`
                ? "text-primary"
                : "text-secondary"
            } `}
            href={"/#proyectos"}
          >
            Proyectos
          </Link>
          <Link
            className={`hover:text-primary transition-all duration-300 ${
              isDivVisible === "contacto" ? "text-primary" : "text-secondary"
            } ${pathname !== `/` ? "text-secondary" : "text-primary"}`}
            href={"/#contacto"}
          >
            Contacto
          </Link>
          <a
            download={"Roger_Morera_CV.pdf"}
            href="/Roger_Morera_CV.pdf"
            className="bg-primary rounded px-2 md:px-5 xl:px-10 text-black border border-black hover:bg-white hover:text-primary transition duration-300 hover:border-primary"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
