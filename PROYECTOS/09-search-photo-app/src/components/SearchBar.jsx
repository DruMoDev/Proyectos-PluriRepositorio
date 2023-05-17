import React, { useState } from "react";


function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className=' rounded-md  my-6 mx-0 justify-center items-center w-[315px] md:min-w-[415px] bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] p-1'>
    
      <form
        onSubmit={handleFormSubmit}
        className='flex flex-col justify-center items-center m-auto bg-gray-100 min-w-[300px] md:min-w-[400px] p-5'
      >
        {/* <label className='md:text-xl mt-2'>Enter search term /</label> */}
        <label className='md:text-xl mb-2 font-medium'>Ingresa un termino para buscar</label>
        <input
          value={term}
          onChange={handleChange}
          className='border border-gray-700 rounded-lg p-1 md:min-w-[250px] mt-2 mb-3 bg-transparent'
        /> 
        <button class="button-64" role="button"><span class="text">Buscar</span></button>
      </form>

      
    </div>
  );
}

export default SearchBar;
