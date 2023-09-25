import { useEffect, useState } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
import { generarId, formatearFecha } from "../helpers";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastosEditar,
  setGastosEditar
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setNombre(gastosEditar.nombre);
      setCantidad(gastosEditar.cantidad);
      setCategoria(gastosEditar.categoria);
      setId(gastosEditar.id);
      setFecha(gastosEditar.fecha);
    }
  }, []);

  const fechaActual = () => {
    return formatearFecha(Date.now());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({
      nombre,
      cantidad,
      categoria,
      id,
      fecha,
    });
  };

  const ocultarModal = () => {
    setModal(false);
    setGastosEditar(false)
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt='cerrar modal' onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastosEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            type='text'
            placeholder='Añade el Nombre del Gasto'
            id='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            type='number'
            placeholder='Añade la cantidad del gasto. Ej: 300'
            id='nombre'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoría</label>
          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value=''>-- Seleccione --</option>
            <option value='ahorro'>-- Ahorro --</option>
            <option value='comida'>-- Comida --</option>
            <option value='casa'>-- Casa --</option>
            <option value='gastos'>-- Gastos Varios --</option>
            <option value='ocio'>-- Ocio --</option>
            <option value='salud'>-- Salud --</option>
            <option value='suscripciones'>-- Suscripciones --</option>
          </select>
        </div>
        <input
          type='submit'
          value={gastosEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
