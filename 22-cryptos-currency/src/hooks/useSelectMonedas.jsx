import styled from "@emotion/styled";
import React, { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");
  const SelectMonedas = () => {
    return (
      <>
        <Label>{label}</Label>
        <Select value={state} onChange={e => setState(e.target.value)}>
          <option value=''>Seleccione</option>
          {opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </>
    );
  };

  return [state, SelectMonedas];
};

export default useSelectMonedas;
