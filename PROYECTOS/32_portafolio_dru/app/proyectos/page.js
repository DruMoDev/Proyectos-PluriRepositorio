"use client";
import React, { useContext } from "react";
import Proyecto from "../components/Proyecto";
import Link from "next/link";
import usePortafolio from "../hooks/usePortafolio";
import PortafolioContext from "../context/PortafolioProvider";

const Home = () => {
  const { proyectosState } = usePortafolio();

  return (
    <div id="proyectos" className="flex flex-col items-center pt-32 pb-20 ">
      <div className="container">
        <h2 className="lg:my-10 mb-16 lg:text-4xl text-3xl text-center font-extrabold text-primary tracking-widest ">
          Proyectos
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {proyectosState.map((proyecto) => (
            <Proyecto key={proyecto.titulo} proyecto={proyecto} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
