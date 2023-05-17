import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./styles.css";
import { Result } from "postcss";

const API_KEY = "0ruJXULlVb86H6x5tP70LYEvpfPkSIow-2qvdvrfQps";
const API_URL = "https://api.unsplash.com/search/photos?query=";

function App() {
  const resultsData = JSON.parse(sessionStorage.getItem("resultados"));
  const [images, setImages] = useState(resultsData ? resultsData : []);

  const handleSubmit = async term => {
    const results = await searchImages(term);
    setImages(results);
    sessionStorage.setItem("resultados", JSON.stringify(results));
    console.log(results);
  };

  return (
    <div className=' w-[90%] justify-center items-center flex flex-col m-auto font-serif gap-4'>
      <h1 className="md:text-5xl mt-10 font-bold text-4xl bg-clip-text tracking-wide text-transparent bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB]">FotoFinder</h1>
      {/* <h2>Encuentra inspiración en cada imagen</h2> */}
      <p className="text-sm md:text-base text-gray-500 w-[80%] text-center">
        Explora y descubre una amplia colección de fotografías impresionantes.
        Ingresa el nombre de lo que buscas y déjate inspirar por el poder de la
        imagen.
      </p>

      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
