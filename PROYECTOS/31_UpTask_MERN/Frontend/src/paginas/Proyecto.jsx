import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useProyectos from "../hooks/useProyectos";
import { Link } from "react-router-dom";
import Tareas from "../components/Tareas";
import formatearFecha from "../helpers/formatearFecha";
import { Progress } from "@nextui-org/react";
import progressBar from "../helpers/progressBar";

const Proyecto = () => {
  const {
    proyecto,
    tareas,
    handleEliminarProyecto,
    handleEditarProyecto,
    setProyecto,
  } = useProyectos();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    nombre,
    descripcion,
    updatedAt,
    createdAt,
    fechaEntrega,
    _id,
    cliente,
    colaboradores,
  } = proyecto;

 

  const formFecha = (fecha) => {
    const partesFecha = formatearFecha(fecha).split("/");
    const fechaReordenada = [partesFecha[2], partesFecha[1], partesFecha[0]];
    const fechaEntregaFinal = fechaReordenada.join("-");
    return fechaEntregaFinal;
  };

  const handleEliminar = () => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este proyecto?"
    );
    if (confirmacion) {
      handleEliminarProyecto(_id);
    }
  };

  const handleEditar = () => {
    const datos = {
      nombre,
      descripcion,
      cliente,
      fechaEntrega,
    };

    handleEditarProyecto(_id, datos);
  };

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
                Editar Proyecto{" "}
              </ModalHeader>
              <ModalBody className="w-full">
                <form className="bg-white py-10 px-5 w-full rounded-lg shadow">
                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="nombre"
                    >
                      Nombre Proyecto
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Nombre del Proyecto"
                      value={nombre}
                      onChange={(e) => {
                        const state = { ...proyecto };
                        setProyecto({ ...state, nombre: e.target.value });
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="descripcion"
                    >
                      Descripcion Proyecto
                    </label>
                    <textarea
                      id="descripcion"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Descripcion del Proyecto"
                      value={descripcion}
                      onChange={(e) => {
                        const state = { ...proyecto };
                        setProyecto({
                          ...state,
                          descripcion: e.target.value,
                        });
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
                      value={formFecha(fechaEntrega)}
                      onChange={(e) => {
                        const state = { ...proyecto };

                        setProyecto({
                          ...state,
                          fechaEntrega: formFecha(e.target.value),
                        });
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      className="text-gray-700 uppercase font-bold text-sm"
                      htmlFor="cliente"
                    >
                      Nombre del Cliente
                    </label>
                    <input
                      type="text"
                      id="cliente"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Nombre del cliente"
                      value={cliente}
                      onChange={(e) => {
                        const state = { ...proyecto };
                        setProyecto({ ...state, cliente: e.target.value });
                      }}
                    />
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
                    handleEditar(), onClose();
                  }}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {nombre === undefined ? (
        ""
      ) : (
        <>
          <div className="flex justify-between mb-5">
            <h1 className="text-4xl font-black mb-5 ">
              Proyectos | <span className="text-4xl">{nombre}</span>
            </h1>
            <div className="w-[500px]">
              <Progress size="md" aria-label="progress bar" value={progressBar(tareas)}></Progress>
            </div>
            <div className="w-1/4 flex gap-5">
              <Link
                onClick={onOpen}
                // to={"/proyectos/editar-proyecto"}
                className="bg-sky-600 font-semiboldbold w-1/2 flex text-white items-center justify-center uppercase font-bold hover:bg-sky-700 transition-colors rounded-lg h-10"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                </svg>
              </Link>
              <Link
                className="bg-red-600 font-semiboldbold text-white w-1/2 flex items-center justify-center uppercase font-bold hover:bg-red-700 transition-colors rounded-lg h-10"
                onClick={handleEliminar}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.8em"
                  width="1.8em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white rounded p-5">
            <div className="w-full flex justify-end gap-5">
              <p className="text-default-500 text-sm italic">
                Creado:{" "}
                <span className=" ">{createdAt && createdAt.slice(0, 10)}</span>
              </p>
              <p className="text-default-500 text-sm italic">
                Última edición:{" "}
                <span>{updatedAt && updatedAt.slice(0, 10)}</span>
              </p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-xl uppercase">
                Cliente:{" "}
                <span className="normal-case font-normal">{cliente}</span>
              </p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-xl uppercase">
                Descripción:{" "}
                <span className="normal-case font-normal">{descripcion}</span>
              </p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-xl uppercase">
                Colaboradores:{" "}
                <span className="normal-case font-normal">
                  {colaboradores === ""
                    ? colaboradores
                    : "No hay colaboradores"}
                </span>
              </p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-xl uppercase">
                Fecha de entrega:{" "}
                <span className="normal-case font-normal">
                  {fechaEntrega && formatearFecha(fechaEntrega)}
                </span>
              </p>
            </div>
          </div>

          <Tareas />
        </>
      )}
    </>
  );
};
export default Proyecto;
