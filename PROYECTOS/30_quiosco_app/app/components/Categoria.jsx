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
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 `}
    >
      <div className="hidden sm:block ">
        <Image
          alt="Imagen Icono"
          height={100}
          width={100}
          src={`/assets/img/icono_${icono}.svg`}
        />
      </div>
      <button
        className="md:text-2xl font-bold hover:cursor-pointer"
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
