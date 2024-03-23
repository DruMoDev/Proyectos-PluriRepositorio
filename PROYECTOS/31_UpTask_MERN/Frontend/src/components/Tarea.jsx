import { Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import formatearFecha from "../helpers/formatearFecha";

const Tarea = ({ tarea, handleEliminar }) => {
  const { nombre, descripcion, prioridad, fechaEntrega, estado, _id } = tarea;
  const { completarTarea } = useProyectos();
  const fechaFormateada = formatearFecha(fechaEntrega);

  const handleCompletarTarea = async () => {
    await completarTarea(_id);
  };

  return (
    <>
      <div className="flex justify-between items-center m-5 pb-5 px-5  gap-20 border-b">
        <div
          className={`w-full p-5 border rounded-xl  ${
            estado ? "bg-green-300" : "bg-sky-100"
          }`}
        >
          <p>{nombre}</p>
          <p>{descripcion}</p>
          <p>{prioridad}</p>
          <p>{fechaFormateada}</p>
        </div>
        <div className="flex flex-col w-32 gap-4 justify-between ">
          <Link className="bg-sky-600 font-semiboldbold text-white  flex items-center justify-center uppercase font-bold hover:bg-sky-700 transition-colors rounded-lg h-8">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
            </svg>
          </Link>
          {estado ? (
            <button
              className={`bg-orange-600 font-semiboldbold text-white  flex items-center justify-center uppercase disabled  font-bold hover:bg-orange-700 transition-colors rounded-lg h-8 `}
              onClick={handleCompletarTarea}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.4em"
                width="1.4em"
              >
                <path d="M12 4c2.1 0 4.1.8 5.6 2.3 3.1 3.1 3.1 8.2 0 11.3-1.8 1.9-4.3 2.6-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7 2.3-2.3 2.3-6.1 0-8.5C15.1 6.6 13.5 6 12 6v4.6l-5-5 5-5V4M6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8.5.5 1.1.9 1.8 1.2l-.6 2c-1-.4-1.9-1-2.7-1.8z" />
              </svg>{" "}
            </button>
          ) : (
            <button
              className={`bg-green-600 font-semiboldbold text-white  flex items-center justify-center uppercase disabled  font-bold hover:bg-green-700 transition-colors rounded-lg h-8 `}
              onClick={handleCompletarTarea}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.4em"
                width="1.4em"
              >
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
              </svg>{" "}
            </button>
          )}

          <Link
            className="bg-red-600 font-semiboldbold text-white  flex items-center justify-center uppercase font-bold hover:bg-red-700 transition-colors rounded-lg h-8"
            onClick={() => handleEliminar(_id)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Tarea;
