import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef();

  const getMovies = useMemo(() =>{
    return async ({search}) => {
      if (search === previousSearch.current) return;
      try {
        setError(null);
        setLoading(true);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, []) 

  // constante para ordenar las peliculas por titulo
  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;
  }, [sort, movies]) 



  return { movies: sortedMovies, getMovies, loading };
}
