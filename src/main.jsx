import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store.js'
import Login from './components/Auth/Login';
import MovieList from './components/Movies/MovieList';
import Watchlist from './components/Watchlist/Watchlist';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <MovieList/>},
      {path:"/login", element: <Login/>},
      {path:"/watchlist", element: <Watchlist/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)


