import React from "react";
import useBebidas from "../hooks/useBebidas";
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";

const ListadoBebidas = () => {
  const { bebidas } = useBebidas();

  return (
    <Row className="mt-5">
      {bebidas.map(bebida => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebidas;
