import React from 'react';
import PropTypes from 'prop-types';
import "../hojas-de-estilo/boton.css"


const Boton = (props) => {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor != ".") && (valor != "=");
    }

    return (
        <div onClick={() => props.manejarClicks(props.children)} className={`boton-contenedor${esOperador(props.children) ? " operador" : ""}`}>
            {props.children}
        </div>
    );
};


Boton.propTypes = {

};


export default Boton;
