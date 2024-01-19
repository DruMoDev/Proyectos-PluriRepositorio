"use client";
import { createContext, useState } from "react";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [proyectosState, setProyectosState] = useState([
    {
      titulo: "Quiosco de Comida",
      descripcion:
        "Es una aplicación web que representa un quiosco de una cafetería. Hay un menú superior donde podemos encontrar el 'Menú' que contiene todos los productos disponibles, los cuales podemos añadir a nuestro pedido. Al lado encontramos el 'Resumen' donde podemos ver, editar y eliminar nuestro pedido. Finalmente, en la sección de 'Datos y Total' podemos añadir nuestro nombre y realizar el pedido. Además, incluye un panel de administración en la dirección '/administración' donde el personal del local podrá gestionar los pedidos.",
      img: "/imagen_quiosco_comida.jpg",
      url: "https://tienda-y-paneldeadministracion-dru.vercel.app/",
      id: 1,
      tecnologias: ["Next", "Prisma", "MongoDB", "Taildwind"],
    },
    {
      titulo: "Control de Gastos",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_controldegastos.jpg",
      url: "https://control-gastos-dru.netlify.app/",
      id: 2,
      tecnologias: ["Vite", "CSS3", "Context API"],
    },
    {
      titulo: "Cotizador de Seguros de Automovil",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/im_cotizador_auto.jpg",
      url: "https://cotizador-seguros-automoviles.vercel.app/",
      id: 3,
      tecnologias: ["Vite", "Tailwind", "Context API"],
    },

    {
      titulo: "Buscador de Fotos",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_buscadordefoto.jpg",
      url: "https://search-photo-app-dru.netlify.app/",
      id: 4,
      tecnologias: ["Vite", "Tailwind", "API"],
    },
    {
      titulo: "Cotizador de Criptomonedas",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aenean sed adipiscing diam donec adipiscing.",
      img: "/img_cotizadorcryptomonedas.jpg",
      url: "https://cotizador-criptomonedas-dru.netlify.app/",
      id: 5,
      tecnologias: ["Vite", "CSS3", "API"],
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
