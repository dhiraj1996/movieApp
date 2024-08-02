import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import MovieDetail from './MovieDetail';

const SearchMovies = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await dispatch(fetchMovies(title));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Search for movies" 
          required 
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <div>
        {movies && movies.map(movie => (
          <MovieDetail key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
