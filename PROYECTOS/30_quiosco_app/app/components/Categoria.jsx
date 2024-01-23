import Image from "next/image";
import React from "react";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
      <div className="hidden sm:block ">
        <Image
          alt="Imagen Icono"
          height={90}
          width={90}
          src={`/assets/img/icono_${icono}.svg`}
        />
      </div>
      <h3 className="md:text-2xl font-bold hover:cursor-pointer">{nombre}</h3>
    </div>
  );
};

export default Categoria;
