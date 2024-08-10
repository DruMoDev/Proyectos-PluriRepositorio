import React, { useState } from "react";

const Tarea = () => {
  const [texto, setTexto] = useState("");
  const [altura, setAltura] = useState("100px");

  function changeText(event) {
    setTexto(event.target.value);
    setAltura(event.target.scrollHeight + "px");
  }

  return (
    <div className='min-h-[100px] flex justify-center items-center mx-auto w-full'>
      <textarea
        value={texto}
        onChange={changeText}
        className={`px-1 w-3/4 min-h-[100px] border-2 border-black rounded-md resize-none overflow-hidden`}
        onInput={changeText}
        style={{ height: altura }}
        placeholder="Escribe aquí tus deseos..."
        
      ></textarea>
    </div>
  );
};

export default Tarea;
