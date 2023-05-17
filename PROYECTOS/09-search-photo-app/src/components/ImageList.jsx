import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  return (
    <div className='xl:grid-cols-3 md:grid-cols-2 md:my-8 md:gap-4 gap-2 grid grid-cols-1 justify-center w-full items-center m-auto'>
      {images.map(images => {
        return <ImageShow images={images} key={images.id} />;
      })}
    </div>
  );
}

export default ImageList;
