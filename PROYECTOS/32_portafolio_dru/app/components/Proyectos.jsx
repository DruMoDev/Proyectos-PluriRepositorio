"use client";
import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import Link from "next/link";
import usePortafolio from "../hooks/usePortafolio";
import PortafolioContext from "../context/PortafolioProvider";

// const PROYECTOS = [
//   {
//     titulo: "Quiosco de Comida",
//     descripcion:
//       "Es una aplicación web diseñada para facilitar y mejorar la experiencia de ordenar alimentos o comestibles. Esta plataforma virtual ofrece a los usuarios la posibilidad de explorar un menú diverso, realizar pedidos y, en algunos casos, personalizar opciones según sus preferencias.",
//     img: "/imagen_quiosco_comida.jpg",
//     url: "https://tienda-y-paneldeadministracion-dru.vercel.app/",
//     id: 1,
//   },
//   {
//     titulo: "Control de Gastos",
//     descripcion:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
//     img: "/img_controldegastos.jpg",
//     url: "https://control-gastos-dru.netlify.app/",
//     id: 2,
//   },
//   {
//     titulo: "Cotizador de Seguros de Automovil",
//     descripcion:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
//     img: "/im_cotizador_auto.jpg",
//     url: "https://cotizador-seguros-automoviles.vercel.app/",
//     id: 3,
//   },

//   {
//     titulo: "Buscador de Fotos",
//     descripcion:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
//     img: "/img_buscadordefoto.jpg",
//     url: "https://search-photo-app-dru.netlify.app/",
//     id: 4,
//   },
//   {
//     titulo: "Cotizador de Criptomonedas",
//     descripcion:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
//     img: "/img_cotizadorcryptomonedas.jpg",
//     url: "https://cotizador-criptomonedas-dru.netlify.app/",
//     id: 5,
//   },
// ];

const Proyectos = () => {
  const { proyectosState } = usePortafolio();
  return (
    <div
      id="proyectos"
      className="flex flex-col items-center  pb-20 pt-20 lg:pt-28"
    >
      <div className="container">
        <h2 className=" mb-16 lg:mb-24 lg:text-6xl text-3xl text-center font-extrabold text-primary tracking-widest ">
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

export default Proyectos;
