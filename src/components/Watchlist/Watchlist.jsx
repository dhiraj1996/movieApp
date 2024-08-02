import React from 'react';
import { useSelector } from 'react-redux';

const Watchlist = () => {
  const email = useSelector(state => state.auth.email);
  const watchlist = useSelector(state => state.watchlist[email] || []);

  return (
    <div className='w-screen'>
      <div className='border-red-500 border m-10 p-4 rounded-lg'>
        <h2 className='font-bold text-center text-red-500 '>Your Watchlist {email}</h2>
      </div>
      <div className="m-10 flex justify-between flex-wrap items-center">
      {watchlist.length === 0 ? (
        <p className='text-center m-10 text-gray-500 font-semibold'>No movies in your watchlist.</p>
      ) : (
        watchlist.map(movie => (
          <div className="flex flex-col p-2 border max-w-44 h-96 rounded-lg m-2" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};


export default Watchlist;
