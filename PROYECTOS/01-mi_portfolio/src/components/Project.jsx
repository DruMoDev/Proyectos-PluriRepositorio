import React from "react";

function Project({ title, description, img }) {
  return (
    <div className='bg-gray-600 rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300 opacity-75 hover:opacity-100 transition-all'>
      <div className='p-4 flex flex-col items-center'>
        <h3 className='text-white text-xl font-semibold mb-2'>{title}</h3>
        <img
          src={img}
          alt='Imagen del proyecto'
          className='w-full h-auto rounded-md mb-4'
        />
        <p className='text-white'>{description}</p>
      </div>

      <div className='bg-gray-800 text-center py-2'>
        <a href='#' className='text-white font-semibold hover:underline'>
          Ver más
        </a>
      </div>
    </div>
  );
}

export default Project;
