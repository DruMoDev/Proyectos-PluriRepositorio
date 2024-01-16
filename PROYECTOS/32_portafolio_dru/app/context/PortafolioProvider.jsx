"use client";
import { createContext, useState } from "react";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [proyectosState, setProyectosState] = useState([
    {
      titulo: "Quiosco de Comida",
      descripcion:
        "Es una aplicación web diseñada para facilitar y mejorar la experiencia de ordenar alimentos o comestibles. Esta plataforma virtual ofrece a los usuarios la posibilidad de explorar un menú diverso, realizar pedidos y, en algunos casos, personalizar opciones según sus preferencias.",
      img: "/imagen_quiosco_comida.jpg",
      url: "https://tienda-y-paneldeadministracion-dru.vercel.app/",
      id: 1,
    },
    {
      titulo: "Control de Gastos",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_controldegastos.jpg",
      url: "https://control-gastos-dru.netlify.app/",
      id: 2,
    },
    {
      titulo: "Cotizador de Seguros de Automovil",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/im_cotizador_auto.jpg",
      url: "https://cotizador-seguros-automoviles.vercel.app/",
      id: 3,
    },

    {
      titulo: "Buscador de Fotos",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_buscadordefoto.jpg",
      url: "https://search-photo-app-dru.netlify.app/",
      id: 4,
    },
    {
      titulo: "Cotizador de Criptomonedas",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_cotizadorcryptomonedas.jpg",
      url: "https://cotizador-criptomonedas-dru.netlify.app/",
      id: 5,
    },
  ]);

  return (
    <PortafolioContext.Provider value={{ proyectosState }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };

export default PortafolioContext;
