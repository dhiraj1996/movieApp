import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist } from '../../redux/reducers/watchlistReducer';

const AddToWatchlistButton = ({ movie }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.email);

  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist({ email, movie }));
  };

  return (
    <button className='bg-red-500 hover:bg-red-700 rounded-lg py-2 font-medium w-full' onClick={handleAddToWatchlist}>
      Add to Watchlist
    </button>
  );
};

export default AddToWatchlistButton;
