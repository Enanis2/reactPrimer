//import './app.css'
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import MiPerfil from './components/MiPerfil.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>

        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/register" />
        <Route Component={Home} path="/" />
        <Route Component={MiPerfil} path="/miperfil" />

      </Routes>
    </>
  )
}

export default App
