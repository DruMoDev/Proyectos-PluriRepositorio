import React, { useState } from "react";
import Tarea from "./Tarea";
import { MdClose } from "react-icons/md";

const ListaDeTareas = () => {
  const [tarea, setTarea] = useState([]);

  function handleClickAgregarNota() {
    const nuevaTarea = 
    { id: tarea.length };
    setTarea([...tarea, nuevaTarea]);
  }

  function handleClickBorrarNota(id) {
    const index = tarea.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
      const nuevasTareas = [...tarea];
      nuevasTareas.splice(index, 1);
      setTarea(nuevasTareas);
    }
  }

  return (
    <section className='flex justify-center items-center flex-col w-full mb-10'>
      <div className='min-h-[300px] w-full md:max-w-[700px] py-10 gap-10 border-slate-600 border-4 bg-slate-100 flex justify-center flex-col pb-10'>
        {tarea.length === 0 ? (
          <h1 className=' m-auto italic font-medium font-sans text-xl'>
            No hay tareas.
          </h1>
        ) : (
          tarea.map(tarea => (
            <div key={tarea.id} className='flex w-full flex-col justify-center'>
              <button
                className=''
                onClick={() => handleClickBorrarNota(tarea.id)}
              >
                <MdClose className='text-[25px] float-right md:mr-10 mr-2'></MdClose>
              </button>
              <Tarea></Tarea>
            </div>
          ))
        )}
      </div>

      <div className='justify-center items-center flex'>
        <button
          onClick={handleClickAgregarNota}
          className='hover:bg-[#4d91d5] bg-[#55a0eb] mt-10  rounded-xl hover:translate-y-1 transition-transform  shadow-[#4d6578] shadow-md py-4 px-8 text-lg font-bold '
        >
          Añadir Tarea
        </button>
      </div>
    </section>
  );
};

export default ListaDeTareas;
