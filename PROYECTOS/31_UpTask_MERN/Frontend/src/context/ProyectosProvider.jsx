import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState({});
  const [tareas, setTareas] = useState([]);
  const [alerta, setAlerta] = useState([]);
  const [proyecto, setProyecto] = useState({});
  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
  };

  
  // const formatearFechaTareas = () => {
  //   const tareasForamteadas = tareas.map(
  //     (tarea) => (
  //       {
  //         ...tarea,
  //         fechaEntrega: formatearFecha(tarea.fechaEntrega),
  //       },
  //       console.log(formatearFecha(tarea.fechaEntrega))
  //     )
  //   );
  //   setTareas([...tareasForamteadas]);
  // };

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/proyectos", config);
        setProyectos(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProyectos();
  }, []);

  const submitProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/proyectos", proyecto, config);
      console.log(data);
      setAlerta({ msg: "Proyecto creado correctamente.", error: false });
      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminarProyecto = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(`/proyectos/${_id}`, config);
      window.location.reload();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleObtenerProyecto = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.get(`/proyectos/${_id}`, config);
      setProyecto(data.proyecto);
      setTareas(data.tareas);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditarProyecto = async (_id, datos) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.put(
        `/proyectos/${_id}`,
        datos,
        config
      );
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleCrearTarea = async (datos) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/tareas", datos, config);
      console.log(data);
      
      setTareas([...tareas, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminarTarea = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(`/tareas/${id}`, config);
      console.log(data);
      
      const tareasActualizadas = tareas.filter((objeto) => {
        return objeto._id !== id;
      });
      setTareas([...tareasActualizadas]);
    } catch (error) {
      console.log(error);
    }
  };

  const completarTarea = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      // La const de datos es irrelebante, solo es para poder hacer un "post"
      const datos = { estado: false };
      const { data } = await clienteAxios.post(
        `/tareas/estado/${id}`,
        datos,
        config
      );

      const tareasActualizadas = tareas.map((tarea) => {
        if (tarea._id === id) {
          return {
            ...tarea,
            estado: data.estado,
          };
        } else {
          return tarea;
        }
      });
      setTareas([...tareasActualizadas]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
        handleEliminarProyecto,
        handleObtenerProyecto,
        proyecto,
        tareas,
        handleEditarProyecto,
        setProyecto,
        handleCrearTarea,
        handleEliminarTarea,
        completarTarea,
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
