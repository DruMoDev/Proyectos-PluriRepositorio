const API_KEY = "db3a7b9a";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      img: movie.Poster,
      year: movie.Year,
    }));
  } catch (e) {
    throw new Error("Error buscando peliculas");
  }
};
