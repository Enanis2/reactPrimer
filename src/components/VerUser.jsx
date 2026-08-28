import axios from 'axios'
import { useEffect, useState } from "react";

function VerUser() {
    
    const [user, setUser] = useState("")
    const [id, setId] = useState("")
    const [response, setResponse] = useState()

    const buscarUser = async (id) => {
        const respuesta = await axios.post('http://localhost:3000/usuarios/buscar', {
            id: id
        })
        setResponse(respuesta.data)
    }
    
    console.log(response)

    return (<>
        <div className='displayeados'>
            <input type="text" onChange={
                (event) => { //Ejecuto una arrow function que recibe el evento entero
                    setId(event.target.value)
                }
            }/>
            <button onClick={() => buscarUser(id)}>BUSCAR</button>
        </div>
        <h1>{response}</h1>
    </>)
}

export default VerUser