import { searchMovies, getMovieDetails } from '../../api';
import { setMovies, setMovieDetails } from '../reducers/movieReducer';

export const fetchMovies = (title) => async (dispatch) => {
  try {
    const data = await searchMovies(title);
    if (data.Response === 'True') {
      dispatch(setMovies(data.Search));
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    // Handle the error appropriately, e.g., dispatch an error action or set an error state
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const data = await getMovieDetails(id);
    if (data.Response === 'True') {
      dispatch(setMovieDetails(data));
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    // Handle the error appropriately, e.g., dispatch an error action or set an error state
  }
};

export const addToWatchlist = (movie) => {
  return {
    type: 'ADD_TO_WATCHLIST',
    payload: movie
  };
};

export const removeFromWatchlist = (id) => {
  return {
    type: 'REMOVE_FROM_WATCHLIST',
    payload: id
  };
};
