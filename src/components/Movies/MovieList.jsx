import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies} from "../../redux/actions/movieActions";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(title));
  };

  return (
    <div className="w-screen">
      <div className="m-10 p-4 border border-red-500 rounded-lg">
        <h1 className="font-semibold text-3xl">
          Welcome to <span className="text-red-500">Watchlists</span>{" "}
        </h1>
        <p className="mt-5">
          Browse movies, add them to watchlists and share them with friends.
        </p>
        <p>
          Just click the ---- to add a movie, the poster to see more details
          click to mark the movies as watched
        </p>
      </div>
      <form
        className="flex flex-col sm:flex-row flex-wrap w-full px-10 py-3"
        onSubmit={handleSearch}
      >
        <div className="w-full sm:basis-3/4">
          <input
            className="w-full pl-10 p-2 border-2 outline-none rounded-t-lg sm:rounded-none sm:rounded-l-lg border-red-500"
            type="text"
            name="search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search for movies"
          />
        </div>
        <div className="sm:basis-1/4">
          <button
            className="py-2 font-bold bg-red-500 rounded-b-lg sm:rounded-none sm:rounded-r-lg h-full w-full"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="m-10 border flex justify-evenly flex-wrap">
        {movies && movies.map((movie) => (
            <MovieDetail key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
