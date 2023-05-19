import { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "http://localhost/next-movies/php/movies.php"
        );
        setMovies(response.data);

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  function loadMovies() {
    return (
      Array.isArray(movies) &&
      movies.map(function (m, index) {
        return (
          <div
            className="bg-gray-600 w-80 h-96 border-gray-500 border-r-gray-300 border-t-white border-2 p-2 rounded-xl m-2  shadow-md"
            key={index}
          >
            <h1 className="text-white text-center text-2xl font-bold">
              {m.movieTitle}
            </h1>
            <div className="text-white text-center">
              <img src={m.movieImage}></img>
            </div>
            <h1 className="text-white text-center">Genre: {m.movieGenre}</h1>
          </div>
        );
      })
    );
  }

  return (
    <div className="p-2 bg-gray-700 grid gap-4 grid-cols-4 h-auto place-items-center justify-center">
      {loadMovies()}
    </div>
  );
}
