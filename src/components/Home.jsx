import { useEffect, useState } from "react";

function Home() {
    
    const user = "sapallo";
    //let edad = 1; NO PODEMOS CAMBIARLO DESPUES EN PANTALLA
    const [edad, setEdad] = useState(1); //PODEMOS CAMBIARLO DESPUES EN PANTALLA
    
    const sumar1 = () =>{
        // edad = edad + 1;  ESTO DE ACÁ CAMBIA E VALOR PERO NO RE-RENDERIZA EL VALOR EN PANTALLA
        // console.log(edad); 
        
        //Para solucionarlo usamos el useState, una funcion que recibe como parametro un valor inicial opcional y que devuelve un array con el valor actual y el metodo setter
        setEdad(edad + 1)
    }
    

    return (<>
        <h2>{user}</h2>
        <h2>{edad}</h2>
        <button onClick={sumar1}>sumar1 a la edsad</button>
    </>)
}

export default Home