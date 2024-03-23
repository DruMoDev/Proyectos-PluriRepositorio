import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import useProyectos from "../hooks/useProyectos";
import { Link } from "react-router-dom";

const PreviewProyecto = ({ proyecto, index }) => {
  const { nombre, _id, cliente, __v } = proyecto;
  const { handleEliminarProyecto, handleObtenerProyecto } = useProyectos();

  const handleEliminar = () => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este proyecto?"
    );
    if (confirmacion) {
      handleEliminarProyecto(_id);
    }
  };
  const handleVerMas = async () => {
    await handleObtenerProyecto(_id);
  };

  return (
    <div className="w-full flex">
      <Card className="w-3/4 mx-auto rounded-none">
        <CardHeader className="flex gap-3">
          <p className="font-bold border-r-1 pr-2">{index + 1}</p>
          <div className="flex flex-col">
            <p className="text-md font-bold">{nombre}</p>
            <p className="text-small text-default-500">{cliente}</p>
          </div>
        </CardHeader>
      </Card>
      <div className="w-1/4 flex">
        <Link
          onClick={handleVerMas}
          to={`/proyectos/${nombre}`}
          className="bg-sky-600 font-semiboldbold w-1/2 flex text-white items-center justify-center uppercase font-bold hover:bg-sky-700 transition-colors "
        >
          Ver Más
        </Link>
        <Link
          className="bg-red-600 font-semiboldbold text-white w-1/2 flex items-center justify-center uppercase font-bold hover:bg-red-700 transition-colors "
          onClick={handleEliminar}
        >
          Eliminar
        </Link>
      </div>
    </div>
  );
};
export default PreviewProyecto;
