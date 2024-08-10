"use client";
import { createContext, useState } from "react";
import { proyectosContent } from "../db/proyectosContent";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [proyectosState, setProyectosState] = useState(proyectosContent);

  return (
    <PortafolioContext.Provider value={{ proyectosState }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };

export default PortafolioContext;
