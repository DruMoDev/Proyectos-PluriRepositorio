import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
