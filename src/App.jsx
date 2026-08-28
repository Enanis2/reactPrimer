//import './app.css'
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import VerUser from './components/VerUser.jsx';

function App() {
  return (
    <>
      <Routes>

        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/register" />
        <Route Component={Home} path="/" />
        <Route Component={VerUser} path="/veruser" />

      </Routes>
    </>
  )
}

export default App
