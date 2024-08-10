import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Loading from "./Loading";
import Resultado from "./Resultado";

const AppClima = () => {
  const { resultado, cargando, noResultados } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {
            cargando ? <Loading /> :
            resultado?.name ? <Resultado />
            : noResultados ? <p>{noResultados}</p>
            : <p>El clima se va a mostrar aquí</p>
        }

      </main>
    </>
  );
};

export default AppClima;
