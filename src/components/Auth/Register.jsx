import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';

const Register = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
