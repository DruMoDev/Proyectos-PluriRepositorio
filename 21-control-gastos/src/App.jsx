import { useEffect, useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastosEditar, setGastosEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState({});

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastosEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0);

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
    setGastosFiltrados(gastosFiltrados);
  }, [filtro]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastosEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastosEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              alt='Icono Nuevo Gasto'
              src={IconoNuevoGasto}
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
          setModal={setModal}
          guardarGasto={guardarGasto}
          gastosEditar={gastosEditar}
          setGastosEditar={setGastosEditar}
        />
      )}
    </div>
  );
}

export default App;
