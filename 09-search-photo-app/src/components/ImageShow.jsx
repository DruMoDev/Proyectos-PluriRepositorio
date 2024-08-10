import React from "react";

function ImageShow({ images }) {
  return (
    <a href={images.urls.small}>
      <img
        src={images.urls.small}
        alt={images.alt_description}
        className='rounded-md shadow-md shadow-gray-400  object-cover md:max-h-[400px] bg-center'
      />
    </a>
  );
}

export default ImageShow;
