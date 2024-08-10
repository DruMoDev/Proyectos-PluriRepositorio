import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import freeCodeCampLogo from "./imagenes/800px-FreeCodeCamp_logo.png";
import { useState } from "react";
import {evaluate} from "mathjs";

function App() {

const [input, setInput] = useState("");

const agregarInput = valor => {
  setInput(input + valor)
}

const calcularResultado = () => {
  if(input) {
  setInput(evaluate(input))
  } else { alert("Por favor ingrese valores para realizar los calculos")}
}


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          alt="Logo de Freecodecamp"
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
        ></img>
      </div>
      <div className="contenedor-calculadora">
      <Pantalla input={input}></Pantalla>
        <div className="fila">
          <Boton manejarClicks={agregarInput}>1</Boton>
          <Boton manejarClicks={agregarInput}>2</Boton>
          <Boton manejarClicks={agregarInput}>3</Boton>
          <Boton manejarClicks={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={agregarInput}>4</Boton>
          <Boton manejarClicks={agregarInput}>5</Boton>
          <Boton manejarClicks={agregarInput}>6</Boton>
          <Boton manejarClicks={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={agregarInput}>7</Boton>
          <Boton manejarClicks={agregarInput}>8</Boton>
          <Boton manejarClicks={agregarInput}>9</Boton>
          <Boton manejarClicks={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={calcularResultado}>=</Boton>
          <Boton manejarClicks={agregarInput}>0</Boton>
          <Boton manejarClicks={agregarInput}>.</Boton>
          <Boton manejarClicks={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")} >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
