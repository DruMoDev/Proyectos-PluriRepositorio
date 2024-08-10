import React from "react";

function listOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <div className='movie_container'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <img src={movie.img}></img>
        </li>
      ))}
    </ul>
  );
}

function noListOfMovies() {
  return <p>No hay películas</p>;
}

export default function Movie({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? listOfMovies({ movies }) : noListOfMovies();
}
