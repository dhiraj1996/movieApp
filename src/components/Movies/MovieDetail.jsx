import React, { useState } from "react";
import AddToWatchlistButton from "./AddToWatchlistButton";
import RemoveFromWatchlistButton from "./RemoveFromWatchlistButton"

const MovieDetail = ({ movie }) => {

  const [toggle,setToggle] = useState('true')

  const handleButton = () => {
    setToggle(!toggle);
  }
  return (
    <div className="flex justify-evenly flex-col p-2 border max-w-40 md:max-w-44 h-auto rounded-lg m-2">
      <img className="w-36 h-48 md:w-44 rounded-t-lg" src={movie.Poster} alt={movie.Title} />
      <div className="overflow-y-hidden">
        <h3 className="font-bold">{movie.Title}</h3>
        <p className="font-semibold">({movie.Year})</p>
        <p className=" text-gray-500 text-clip">{movie.Plot}</p>
      </div>
      <div className="w-full" onClick={handleButton}>
      {toggle ? <AddToWatchlistButton movie={movie} /> : <RemoveFromWatchlistButton movie={movie}/>}
      </div>
    </div>
  );
};

export default MovieDetail;
