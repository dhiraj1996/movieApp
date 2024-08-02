import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/reducers/authReducer';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [toggle,setToggle] = useState('true')

  const handleMenu = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="h-20 w-full bg-white p-4 px-10 flex justify-between items-center md:items-start md:flex-col md:h-screen md:w-72 border">
      <Link className="font-extrabold text-red-500 text-3xl md:mt-9" to="/">WatchLists</Link>
      <Link className='md:block text-gray-700 font-semibold border p-2 rounded-lg hidden hover:border-red-300' to="/">Home</Link>
      {isAuthenticated ? (
        <div className='hidden md:block'>
          <Link className='md:block text-gray-700 font-semibold md:mb-2' to="/watchlist">My Watchlist</Link>
          <button className="bg-red-500 rounded-lg px-4 py-2 md:block w-full font-semibold hover:bg-red-700 active:text-white" onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div className='flex gap-2 items-center '>
        <Link className="bg-red-500 rounded-lg px-4 py-1 md:block w-full font-semibold hover:bg-red-700" to="/login">Login</Link>
        </div>
      )}
      <div className='md:hidden text-4xl' 
          onClick={handleMenu}>
            {toggle ? <GiHamburgerMenu/> : <IoClose />}
        </div>

      {/* hidden menu starts from here  */}

      {!toggle ? <div id="nav-item" className="fixed top-20 w-full left-0 md:hidden">
            
            <div className="bg-red-200 w-full flex flex-col justify-center align-center text-center">
                <Link to="/" className="font-semibold text-xl hover:bg-gradient-to-r from-pink-800 to-red-600 py-4">Home</Link>
                {isAuthenticated ? (
                  <>
                <Link to="/watchlist" className="font-semibold text-xl hover:bg-gradient-to-r from-pink-800 to-red-600 py-4">My Watchlist</Link>
                <button className="font-semibold text-xl hover:bg-gradient-to-r from-green-950 to-red-600 py-4" onClick={() => dispatch(logout())}>Logout</button>
                </>
                ):  (
                <Link to="/Login" className="font-semibold text-xl hover:bg-gradient-to-r from-pink-800 to-red-600 py-4">Login</Link>)}
                
            </div>

      </div>: null}
      
    </nav>
  );
};

export default Navbar;
