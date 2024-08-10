"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between mx-auto py-5 px-10 bg-black items-center lg:px-40 relative top-0">
      <Link href={"/"}>
        <Image
          src={"/img/logo-removebg.png"}
          width={100}
          height={100}
          alt="logo empresa goed"
        />
      </Link>

      <nav className="flex gap-3 text-white text-base lg:text-xl">
        <Link
          className={`hover:bg-cyan-600 p-1 px-2 rounded-md transition-colors ease-in ${
            pathname === "/" ? "bg-cyan-600" : ""
          }`}
          href={"/"}
        >
          Inicio
        </Link>
        <Link
          className={`hover:bg-cyan-600 p-1 px-2 rounded-md transition-colors ease-in ${
            pathname === "/aboutus" ? "bg-cyan-600" : ""
          }`}
          href={"/aboutus"}
        >
          About Us
        </Link>
        <Link
          className={`hover:bg-cyan-600 p-1 px-2 rounded-md transition-colors ease-in ${
            pathname === "/tienda" ? "bg-cyan-600" : ""
          }`}
          href={"/tienda"}
        >
          Tienda
        </Link>
      </nav>
    </header>
  );
};

export default Header;
