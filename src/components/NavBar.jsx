import axios from 'axios'
import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';

function NavBar() {
    return (<>
        <div className='navBar' >
            <div><h3>UserName: {}</h3></div>
            <nav>
                <div><Link to="/register">REGISTRARSE</Link></div>  
                <div><Link to="/">HOME</Link></div>
                <div><Link to="/miperfil">MI PERFIL</Link></div>
                <div><Link to="/login">LOGUEARSE</Link></div>
                
                
                
            </nav>
        </div>
    </>)
}

export default NavBar