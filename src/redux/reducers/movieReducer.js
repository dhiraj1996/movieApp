import { createSlice } from '@reduxjs/toolkit';
import { searchMovies, getMovieDetails } from '../../api';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieDetails: {},
    watchlist: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addToWatchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { setMovies, setMovieDetails, addToWatchlist, removeFromWatchlist } = movieSlice.actions;

export const fetchMovies = (title) => async (dispatch) => {
  const response = await searchMovies(title);
  dispatch(setMovies(response.data.Search));
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  const response = await getMovieDetails(id);
  dispatch(setMovieDetails(response.data));
};

export default movieSlice.reducer;
