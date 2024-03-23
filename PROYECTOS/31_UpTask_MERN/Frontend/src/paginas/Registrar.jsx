import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios.", error: true });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: "Los passwords no son iguales.", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "El password es muy corto. Mínimo 6 caracteres.",
        error: true,
      });
      return;
    }

    setAlerta({});

    //Crear el usuario en la API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        nombre,
        password,
        email,
      });
      setAlerta({ msg: data.msg, error: false });

      setNombre("")
      setEmail("")
      setPassword("")
      setRepetirPassword("")
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Crea tu Cuenta y Administra tus{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5 ">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            nombre
          </label>
          <input
            id="nombre"
            type="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
            placeholder="Repetir tu Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value={"Registrarme"}
          className="bg-sky-700 py-3 mb-5 text-white uppercase font-bold rounded w-full hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="xl:flex xl:justify-between">
        <Link
          to={"/"}
          className="block text-center my-5 text-slate-500 uppercase text-sm font-bold"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          to={"/olvide-password"}
          className="block text-center my-5 text-slate-500 uppercase text-sm font-bold"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  );
};
export default Registrar;
