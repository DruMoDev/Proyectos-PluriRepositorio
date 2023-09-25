import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastosEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {filtro ? (
        <>
          <p>{gastosFiltrados.length ? "Gastos" : "No hay gastos en esta categoría"} </p>
          {gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <p>{gastos.length ? "Gastos" : "No hay gastos aun"} </p>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
