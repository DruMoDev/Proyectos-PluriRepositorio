import React, { useContext } from "react";
import PortafolioContext from "../context/PortafolioProvider";

const usePortafolio = () => {
  return useContext(PortafolioContext);
};

export default usePortafolio;
