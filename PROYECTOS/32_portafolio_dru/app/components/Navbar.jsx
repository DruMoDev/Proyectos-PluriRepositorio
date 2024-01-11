"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollElement } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <span className="hover:text-white cursor-pointer">Roger Morera</span>
      </div>
      <div className="  flex gap-5 lg:gap-20 xl:gap-32 ">
        <Link
          onClick={(e) => ScrollElement("aboutme", e)}
          className="hover:text-white"
          href={"#aboutme"}
        >
          About Me
        </Link>
        <Link
          onClick={(e) => ScrollElement("aboutme", e)}
          className="hover:text-white"
          href={"#proyectos"}
        >
          Proyectos
        </Link>
        <Link className="hover:text-white" href={"/"}>
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
