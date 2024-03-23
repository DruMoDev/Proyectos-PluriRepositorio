import { useContext } from "react";
import TareasContext from "../context/TareasProvider";

const useTareas = () => {
  return useContext(TareasContext);
};

export default useTareas;
