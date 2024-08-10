"use client";
import { useState } from "react";
import { sendEmail } from "../utils/send-email.js";
import {  toast } from "react-toastify";

const Contacto = () => {
  const [nombreValor, setNombreValor] = useState("");
  const [apellidoValor, setApellidoValor] = useState("");
  const [emailValor, setEmailValor] = useState("");
  const [comentarioValor, setComentarioValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    sendEmail(formDataObject);
    setNombreValor("");
    setApellidoValor("");
    setEmailValor("");
    setComentarioValor("");
    toast.success("Correo enviado correctamente!")
  };

  return (
    <div
      id="contacto"
      className="container mx-auto min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl lg:text-6xl font-bold mb-10 bg-gradient-custom text-transparent bg-clip-text">
        Contactame
      </h1>     
      <form
        className="flex flex-col w-3/4 md:w-2/3 bg-quaternary p-8 border border-white rounded"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nombre" className="text-white">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={nombreValor}
          onChange={(e) => setNombreValor(e.target.value)}
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="apellido" className="text-white">
          Apellidos
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          value={apellidoValor}
          onChange={(e) => setApellidoValor(e.target.value)}
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={emailValor}
          onChange={(e) => setEmailValor(e.target.value)}
          placeholder="ejemplo@ejemplo.com"
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        />

        <label htmlFor="mensaje" className="text-white">
          Comentario
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows="4"
          value={comentarioValor}
          onChange={(e) => setComentarioValor(e.target.value)}
          placeholder="Me gustaría contactar contigo para..."
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-primary"
        ></textarea>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-primary"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
