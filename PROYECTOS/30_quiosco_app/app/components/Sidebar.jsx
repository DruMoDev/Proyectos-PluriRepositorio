"use client";

import Image from "next/image";
import React from "react";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <div className="fixed">
    <div className="items-center justify-center flex">

      <Image
        width={200}
        height={200}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        priority
        
      />
    </div>

      <nav className="mt-5">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
