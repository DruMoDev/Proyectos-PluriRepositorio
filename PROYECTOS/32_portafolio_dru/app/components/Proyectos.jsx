import React from "react";
import Proyecto from "./Proyecto";

const PROYECTOS = [
  {
    titulo: "Quiosco de Comida",
    descripcion:
      "Es una aplicación web diseñada para facilitar y mejorar la experiencia de ordenar alimentos o comestibles. Esta plataforma virtual ofrece a los usuarios la posibilidad de explorar un menú diverso, realizar pedidos y, en algunos casos, personalizar opciones según sus preferencias.",
    img: "/imagen_quiosco_comida.jpg",
    url: "https://tienda-y-paneldeadministracion-dru.vercel.app/",
  },
  {
    titulo: "Control de Gastos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
    img: "/img_controldegastos.jpg",
    url: "https://control-gastos-dru.netlify.app/",
  },
  {
    titulo: "Cotizador de Seguros de Automovil",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
    img: "/im_cotizador_auto.jpg",
    url: "https://cotizador-seguros-automoviles.vercel.app/",
  },

  {
    titulo: "Buscador de Fotos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
    img: "/img_buscadordefoto.jpg",
    url: "https://search-photo-app-dru.netlify.app/",
  },
  {
    titulo: "Cotizador de Criptomonedas",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
    img: "/img_cotizadorcryptomonedas.jpg",
    url: "https://cotizador-criptomonedas-dru.netlify.app/",
  },
];

const Proyectos = () => {
  return (
    <div id="proyectos" className="min-h-screen flex flex-col items-center bg-[#0B0B0B]">
      <div className="container mb-20 lg:my-20 rounded-2xl p-10 lg:border w-5/6 lg:bg-black ">
        <h2 className="lg:my-10 mb-16 lg:text-4xl text-3xl text-center lg:text-left lg:ml-10 font-extrabold text-primary tracking-widest pt-32 lg:pt-0">Proyectos</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {PROYECTOS.map((proyecto) => (
            <Proyecto key={proyecto.titulo} proyecto={proyecto} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Proyectos;
