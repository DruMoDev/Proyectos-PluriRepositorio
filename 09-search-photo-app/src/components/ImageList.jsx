import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  if (images === "") return (<h2>Escribe una palabra para buscar una foto maravillosa</h2>)
  if (images.length === 0) return (<h2 className="text-red-500 italic animate-bounce ">No hay imágenes con este termino</h2>)
  else return (
    <div className='xl:grid-cols-3 md:grid-cols-2 md:my-8 md:gap-4 gap-2 grid grid-cols-1 justify-center w-full items-center m-auto'>
      {images.map(images => {
        return <ImageShow images={images} key={images.id} />;
      })}
    </div>
  );
}

export default ImageList;
