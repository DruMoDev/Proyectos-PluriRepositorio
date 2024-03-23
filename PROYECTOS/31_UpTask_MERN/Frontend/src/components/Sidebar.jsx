import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProyectos from "../hooks/useProyectos";

const Sidebar = () => {
  const { auth } = useAuth();
  const { setProyecto, proyecto } = useProyectos();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 ">
      <p className="text-2xl font-bold">
        Bienvenido <span className="uppercase">{auth.nombre}</span>
      </p>
      <Link
        onClick={() => {
          const newstate = {};

          setProyecto(newstate);
        }}
        to={"/proyectos"}
        className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
      >
        Proyectos
      </Link>
      <Link
        to="crear-proyectos"
        className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
      >
        Nuevo Proyecto
      </Link>
    </aside>
  );
};
export default Sidebar;
