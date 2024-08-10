import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
    console.log(valor);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const resultadosFiltrados = resultado.articles.filter(
        (articulo) => articulo.title !== "[Removed]"
      );
      setNoticias(resultadosFiltrados);
      setTotalNoticias(resultado.totalResults);
      setPagina(1);
    };
    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const resultadosFiltrados = resultado.articles.filter(
        (articulo) => articulo.title !== "[Removed]"
      );
      setNoticias(resultadosFiltrados);
      setTotalNoticias(resultado.totalResults);
    };
    consultarAPI();
  }, [pagina]);

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        pagina,
        handleChangePagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
