import React from "react";
import PropTypes from "prop-types";
import "../hojas-de-estilo/boton-clear.css";

const BotonClear = (props) => {
  return (
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};

BotonClear.propTypes = {};

export default BotonClear;
