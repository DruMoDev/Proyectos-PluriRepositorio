const Contacto = () => {
  return (
    <div id="contacto" className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl lg:text-6xl font-bold text-white mb-10">Contactame</h1>

      <form className="flex flex-col w-3/4 md:w-2/3 bg-quaternary p-8 border border-white rounded">
        <label htmlFor="nombre" className="text-white">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="apellido" className="text-white">
          Apellidos
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="comentario" className="text-white">
          Comentario
        </label>
        <textarea
          id="comentario"
          name="comentario"
          required
          rows="4"
          className="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
