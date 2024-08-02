import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import movieReducer from './reducers/movieReducer';
import watchlistReducer from './reducers/watchlistReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    watchlist: watchlistReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
