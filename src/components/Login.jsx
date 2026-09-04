import axios from 'axios';
import { useState } from "react";

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [usuarioActivo, setUsuarioActivo] = useState()
    const [response, setResponse] = useState('')

    
    const logearse = async () => {
        try {
            const userLogged = await axios.post('http://localhost:3000/usuarios/buscar', { userName, password })
            setUsuarioActivo(userLogged.userName)
            setResponse(userLogged.data.userName)
            
        } catch (error) {
            setResponse(error.response.data.message)
        }
    }

    return (<>
        <div className="displayeados">
            <h2>Ingrese su userName</h2>
            <input type="text" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                    setUserName(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su password</h2>
            <input type="password" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                    setPassword(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <button onClick={logearse}>logearse</button>
        <h2>Response: {response}</h2>
    </>)
}

export default Login