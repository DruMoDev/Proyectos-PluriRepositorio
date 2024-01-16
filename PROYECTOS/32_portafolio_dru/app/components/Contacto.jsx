const Contacto = () => {
  return (
    <div id="contacto" class=" min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-3xl lg:text-6xl font-bold text-white mb-10">Contactame</h1>

      <form class="flex flex-col w-3/4 md:w-2/3 lg:w-1/2 bg-quaternary p-8 border border-white rounded">
        <label for="nombre" class="text-white">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          class="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label for="apellido" class="text-white">
          Apellidos
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          class="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label for="email" class="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label for="comentario" class="text-white">
          Comentario
        </label>
        <textarea
          id="comentario"
          name="comentario"
          required
          rows="4"
          class="bg-gray-800 text-white py-2 px-3 rounded mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>

        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
