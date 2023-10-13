import Image from "next/image";
import React from "react";
import Banner from "../../public/img/banner-camaras.jpg";

export async function getData() {
  const respuesta = await fetch(
    `${process.env.API_URL}/camaras?populate=imagen`
  );

  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return respuesta.json();
}

const Tienda = async () => {
  const { data } = await getData();
  console.log(data);

  return (
    <main>
      <div className="h-[150px] relative">
        <Image
          className=""
          src={Banner}
          alt="Banner de cámaras"
          fill
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 h-full w-full justify-center items-center flex">
          <h1 className="text-white text-xl">Mejores Cámaras del Mercado</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8  my-5  w-10/12 mx-auto">
        {data.map((camara) => (
          <div className="flex flex-col border rounded-md p-4 flex-1 gap-5 h-[500px]">
            <div className="relative h-full w-full">
              <Image
                className="rounded-md"
                src={camara.attributes.imagen.data.attributes.formats.large.url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                object-fit="contain"
                alt="imagen de una camara"
              />
            </div>

            <div>
              <p className="font-black text-xl text-center mb-5">
                {camara.attributes.nombre}
              </p>
              <p className="px-2">{camara.attributes.descripcion}</p>
            </div>
            <div className="flex justify-between items-center ">
              <button className="bg-cyan-500 p-2 rounded-md font-bold w-2/3 hover:bg-cyan-600 transition-all ease-in hover:-translate-y-1 ">
                Comprar
              </button>
              <p className="font-bold w-1/3 text-center">
                {camara.attributes.precio}€
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tienda;
