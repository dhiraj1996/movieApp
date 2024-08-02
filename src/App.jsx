
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MovieList from './components/Movies/MovieList';
import Watchlist from './components/Watchlist/Watchlist';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<MovieList/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/watchlist" exact element={<Watchlist/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

