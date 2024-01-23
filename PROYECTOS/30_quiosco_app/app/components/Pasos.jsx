"use client";
import { usePathname, useRouter } from "next/navigation";
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { handleChangePaso, pedido } = useQuiosco();

  const calcularProgreso = () => {
    let valor;
    if (pathname === "/") {
      valor = 2;
    } else if (pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };

  return (
    <div className="sticky top-0 bg-white mb-7 pt-5 border-b-2">
      <div className="flex justify-between mb-5 ">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
              handleChangePaso(paso.paso);
            }}
            className={`text-2xl font-bold ${
              pedido.length !== 0 && paso.nombre === "Resumen" && pathname !== "/resumen" && pathname !== "/total"
                ? "animate-bounce text-amber-500"
                : ""
            } ${
              pedido.length !== 0 &&
              paso.nombre === "Datos y Total" &&
              pathname === "/resumen"
                ? "animate-bounce text-amber-500"
                : ""
            }`}
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Pasos;
