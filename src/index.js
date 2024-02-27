import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CharacterDetails from './components/CharacterDetails';
//import App from './App';
import NavBar from './components/Navbar';


const routes = createBrowserRouter([
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/characters',
    element: <CharacterList/>
  },
  {
    path: '/details',
    element: <CharacterDetails/>
  },
  {
    path: '/notfound',
    element: <NotFound/>
  },
  {
    path: '/',
    element: <NavBar/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();