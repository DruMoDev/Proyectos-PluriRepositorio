import ListaDeTareas from "./components/ListaDeTareas";
import React from "react";


function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h1 className="text-3xl text-blue-800 font-sans font-bold my-10">Lista de Tareas</h1>
        <ListaDeTareas></ListaDeTareas>
      </main>
    </>
  );
}

export default App;
