import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchlist } from '../../redux/reducers/watchlistReducer';

const RemoveFromWatchlistButton = ({ movie }) => {

    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);

    const handleRemove = () => {
        dispatch(removeFromWatchlist({ email, movie }));
      };
  return (
    <button className='bg-red-500 hover:bg-red-700 rounded-lg py-2 font-medium w-full' onClick={handleRemove}>
      Remove from List
    </button>
  )
}

export default RemoveFromWatchlistButton