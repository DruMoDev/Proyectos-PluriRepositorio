import { Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Alerta from "./Alerta";
import Tarea from "./Tarea";
import formatearFecha from "../helpers/formatearFecha";
import { ToastContainer, toast } from "react-toastify";

const Tareas = () => {
  const {
    tareas,
    handleCrearTarea,
    proyecto,
    mostrarAlerta,
    alerta,
    handleEliminarTarea,
  } = useProyectos();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("Baja");
  const [actualizarTareas, setActualizarTareas] = useState(false);
  const [fechaDeEntrega, setFechaDeEntrega] = useState("");
  const [opcionOrden, setOpcionOrden] = useState("estado"); // Por defecto, ordenar por fecha
  const [tareasOrdenadas, setTareasOrdenadas] = useState([]); // Array de tareas ordenadas

  useEffect(() => {
    if (!isOpen) {
      const partesFecha = formatearFecha(Date.now()).split("/");
      const fechaReordenada = [partesFecha[2], partesFecha[1], partesFecha[0]];
      mostrarAlerta({});
      setNombre("");
      setDescripcion("");
      setPrioridad("Baja");
      setFechaDeEntrega(fechaReordenada.join("-"));
    }
  }, [isOpen]);

  useEffect(() => {
    const partesFecha = formatearFecha(Date.now()).split("/");
    const fechaReordenada = [partesFecha[2], partesFecha[1], partesFecha[0]];
    setNombre("");
    setDescripcion("");
    setPrioridad("Baja");
    setFechaDeEntrega(fechaReordenada.join("-"));
    onClose();
  }, [actualizarTareas]);

  useEffect(() => {
    let tareasOrdenadas;
    if (opcionOrden === "fecha") {
      tareasOrdenadas = [...tareas].sort((a, b) => {
        const fechaEntregaA = new Date(a.fechaEntrega);
        const fechaEntregaB = new Date(b.fechaEntrega);
        return fechaEntregaA - fechaEntregaB;
      });
    } else if (opcionOrden === "estado") {
      tareasOrdenadas = [...tareas].sort((a, b) =>
        a.estado === b.estado ? 0 : a.estado ? 1 : -1
      );
    }
    setTareasOrdenadas(tareasOrdenadas);
  }, [tareas, opcionOrden]);

  const handleCrear = async () => {
    try {
      if (
        [nombre, descripcion, prioridad].includes("") &&
        fechaDeEntrega.length < 10
      ) {
        mostrarAlerta({ msg: "Faltan campos por completar", error: true });
        return;
      }
      const datos = {
        nombre,
        descripcion,
        prioridad,
        proyecto: proyecto._id,
        fechaEntrega: fechaDeEntrega,
      };
      console.log(fechaDeEntrega);

      await handleCrearTarea(datos);
      setActualizarTareas((actualizarTareas) => !actualizarTareas);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminar = async (_id) => {
    try {
      const confirmacion = window.confirm(
        "¿Estás seguro de que deseas eliminar esta tarea?"
      );
      if (confirmacion) {
        await handleEliminarTarea(_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { msg } = alerta; 

  return (
    <>
      
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Crear Tarea{" "}
              </ModalHeader>
              <ModalBody className="w-full">
                {msg && <Alerta alerta={alerta} />}
                <form className="bg-white py-10 px-5 w-full rounded-lg shadow">
                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="nombre"
                    >
                      Nombre Tarea
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Nombre de la Tarea"
                      value={nombre}
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="descripcion"
                    >
                      Descripcion de la Tarea
                    </label>
                    <textarea
                      id="descripcion"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Descripcion del Proyecto"
                      value={descripcion}
                      onChange={(e) => {
                        setDescripcion(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="fecha-entrega"
                    >
                      Fecha de Entrega{" "}
                    </label>
                    <input
                      type="date"
                      id="fecha-entrega"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={fechaDeEntrega}
                      onChange={(e) => {
                        setFechaDeEntrega(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="prioridad"
                    >
                      Prioridad{" "}
                    </label>
                    <select
                      id="prioridad"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={prioridad}
                      onChange={(e) => {
                        setPrioridad(e.target.value);
                      }}
                    >
                      <option value="Baja">Baja</option>
                      <option value="Media">Media</option>
                      <option value="Alta">Alta</option>
                    </select>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleCrear();
                  }}
                >
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex justify-between my-10 ">
        <h1 className="text-4xl font-black text-sky-700">Tareas</h1>
        <div className="ml-5 flex gap-5 justify-center items-center">
          <h2 className="font-semibold">Ordenar por:</h2>
          <select
            className="border-2 border-gray-300 rounded-md py-1 px-4 text-gray-700 focus:outline-none focus:border-sky-500"
            value={opcionOrden}
            onChange={(e) => setOpcionOrden(e.target.value)}
          >
            <option value="fecha">Fecha de Entrega</option>
            <option value="estado">Estado</option>
          </select>
        </div>
        <Link
          className="bg-sky-600 font-semiboldbold flex text-white items-center justify-center uppercase font-bold hover:bg-sky-700 transition-colors rounded-lg h-10 w-1/4"
          onClick={onOpen}
        >
          Crear Tarea
        </Link>
      </div>
      <div className="bg-white flex min-h-32 flex-col container">
        {tareasOrdenadas.length !== 0 ? (
          tareasOrdenadas.map((tarea) => (
            <Tarea
              key={tarea._id}
              tarea={tarea}
              handleEliminar={handleEliminar}
            />
          ))
        ) : (
          <p className="font-semibold text-xl text-center my-auto">
            <button className="text-sky-600" onClick={onOpen}>
              Crea
            </button>{" "}
            tareas para tu proyecto
          </p>
        )}
      </div>
    </>
  );
};
export default Tareas;
