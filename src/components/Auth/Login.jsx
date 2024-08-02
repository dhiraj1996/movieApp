import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';
import {Navigate, useNavigate} from "react-router"

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login(email));
    navigate("/");
  };

  return (
    <form className='w-screen h-screen flex flex-col items-center justify-center gap-8 px-8 ' 
      onSubmit={handleSubmit}>
      <input 
        className='p-3 w-full rounded-lg outline-none border-red-500 border md:max-w-96'
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        required 
      />
      <button className="bg-red-500 rounded-lg px-4 py-2 w-full font-bold active:text-white hover:bg-red-600 md:max-w-96" type="submit">Login</button>
    </form>
  );
};

export default Login;
