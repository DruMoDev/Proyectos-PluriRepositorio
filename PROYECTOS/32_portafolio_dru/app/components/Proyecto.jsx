"use client"
import Image from "next/image";
import React from "react";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, img, url } = proyecto;

  const handleRedirect = () => {
    window.open(url, "_blank");
  };

  return (
    <article
      className="cursor-pointer border bg-[#0f0f0f] border-[#adadad] lg:p-7 p-4 rounded-2xl w-full hover:-translate-y-2 transition-transform duration-200 transform hover:scale-105"
      onClick={handleRedirect}
    >
      <Image
        className="mx-auto rounded-lg w-[390px]"
        height={200}
        width={500}
        src={img}
        alt={`Imagen del proyecto ${titulo}`}
      />
      <h3 className="lg:my-4 my-2 lg:text-3xl text-xl lg:text-left text-center font-bold">{titulo}</h3>
      <p className="text-[#adadad] ">{descripcion}</p>
      <div></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="float-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6"
        >
          <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
        </svg>
      </a>
    </article>
  );
};

export default Proyecto;
