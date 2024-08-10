import React, { useState } from "react";
import "./filters.css";

function Filters({ filter }) {
  const [minPrice, setMinPrice] = useState(0);

  function handleChangeMinPrice(event) {
    setMinPrice(event.target.value);
    filter(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  }

  const handleChangeCategory= (event) => {
    filter(prevState => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio a partir de:</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        ></input>
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoría</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
