import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, error, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({search})
    }, 300)
    , [getMovies]
  )

  function handleSubmit(event) {
    event.preventDefault();
    getMovies({search});
  }

  function handleChange(event) {
    const newSearch = event.target.value
    updateSearch(newSearch);
    debouncedGetMovies(newSearch)
  }

  function handleSort() {
    if (search === "") return
    setSort(!sort);
  }

  return (
    <>
      <div className='page'>
        <header>
          <h2>Buscador de Películas</h2>
          <form className='form' onSubmit={handleSubmit}>
            <input
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "green",
              }}
              value={search}
              onChange={handleChange}
              placeholder='Avengers, Matrix, ...'
            ></input>
            <input type="checkbox" onChange={handleSort} checked={sort}></input>
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>

        <main>{loading ? <h3>"Cargando..."</h3> : <Movie movies={movies}></Movie>}</main>
      </div>
    </>
  );
}

export default App;
