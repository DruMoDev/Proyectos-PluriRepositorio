"use client";
import Proyecto from "@/app/components/Proyecto";
import usePortafolio from "@/app/hooks/usePortafolio";
import React from "react";

const Home = ({ params }) => {
  const { proyectosState } = usePortafolio();
  const proyectoObjetivo = proyectosState.filter(
    (proyecto) => proyecto.id.toString() === params.proyectoId
  );

  console.log(proyectoObjetivo);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-3/4 flex flex-col items-center">
        <h1 className="mb-10 text-3xl">{proyectoObjetivo[0].titulo}</h1>
        <Proyecto proyecto={proyectoObjetivo[0]} />
      </div>
    </div>
  );
};

export default Home;
