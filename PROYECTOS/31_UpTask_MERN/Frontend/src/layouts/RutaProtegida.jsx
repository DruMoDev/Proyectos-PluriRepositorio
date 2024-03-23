import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RutaProtegida = () => {
  const { auth, setAuth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
            <main className="flex-1 p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </>
  );
};
export default RutaProtegida;
