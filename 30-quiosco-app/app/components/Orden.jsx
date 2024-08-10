import Image from "next/image";
import React from "react";
import { formatearDinero } from "../helpers";
import axios from "axios";
import { toast } from "react-toastify";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = async () => {
    try {
      const response = await fetch(`/api/completarOrden/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar otros encabezados según sea necesario
        },
        // Puedes incluir un cuerpo si es necesario
        // body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }  
      // Puedes realizar alguna acción adicional aquí si es necesario
  
      toast.success("Orden Lista");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error");
    }
  };

  return (
    <>
      <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-bold">Orden: {id}</h3>
        <p className="text-lg font-bold">Cliente: {nombre}</p>

        <div>
          {pedido.map((platillo) => (
            <div
              key={platillo.id}
              className="py-3 flex border-b last-of-type:border-0 items-center"
            >
              <div className="w-32">
                <Image
                  width={400}
                  height={500}
                  alt="Imagen del plato"
                  src={`/assets/img/${platillo.imagen}.jpg`}
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-xl font-bold text-amber-500">
                  {platillo.nombre}
                </h4>
                <p className="text-lg font-bold">
                  Cantidad: {platillo.cantidad}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
          <p className="mt-5 font-black text-4xl text-amber-500">
            Total a pagar: {formatearDinero(total)}
          </p>

          <button onClick={completarOrden} className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg">
            Completar Orden
          </button>
        </div>
      </div>
    </>
  );
};

export default Orden;
