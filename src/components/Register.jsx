import axios from 'axios'
import { useEffect, useState } from "react";


function Register() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("");
    const [userName, setUserName] = useState("");
    const [edad, setEdad] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    /* Esto sirve, pero dbeeria crear demasiadas funciones, asi que meto todo eso en el onChange y me olvido del problema
    const cambiarNombre = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    */

    const crearUsuario = async () => {
            const response = await axios.post('http://localhost:3000/usuarios/create', {
                nombre: nombre,
                apellido: apellido,
                userName: userName,
                edad: edad,
                mail: mail,
                password: password,
                password2: password2
            })
    }

    return (<>
        <div className="displayeados">
            <h2>Ingrese su nombre</h2>
            <input type="text" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);
                    setNombre(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su apellido</h2>
            <input type="text" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setApellido(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su userName</h2>
            <input type="text" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setUserName(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su edad</h2>
            <input type="number" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setEdad(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su mail</h2>
            <input type="email" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setMail(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su contraseña</h2>
            <input type="password" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setPassword(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <div className="displayeados">
            <h2>Ingrese su contraseña otra vez</h2>
            <input type="password" onChange={ //Cuando algo cambia
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                            console.log(event.target.value);

                    setPassword2(event.target.value) //Y uso solo la parte del valor que tiene
                }
            }/>
        </div>
        <button onClick={crearUsuario}>CREAR</button>
    </>)
}

export default Register