import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    const obtenerRespuestaPorId = async () => {
      if (!bebidaId) return;

      try {
        const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
        const respuesta = await fetch(url);
        const {drinks} = await respuesta.json();
        setReceta(drinks[0])
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false)
      }
    };
    obtenerRespuestaPorId();
  }, [bebidaId]);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIdClick = id => {
    setBebidaId(id);
  };

  const consultarBebidas = async datos => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i${datos.nombre}&c=${datos.categoria}`;
      const respuesta = await fetch(url);
      const { drinks } = await respuesta.json();
      setBebidas(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        cargando
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
