import { useState, useEffect } from "react"

export const Prueba=()=>{

    //EStoy en zona de js
    const[getcontador, setcontador]=useState(0)

    useEffect(()=>{
        alert("cambiaron el contador")
    },[getcontador])


    function sumar (){
        setcontador(getcontador+1)
    }

    return(

        <>
            <h2>El contador esta en {getcontador}</h2>
            <button onClick={sumar} className="btn btn-primaty my5">Incrementar</button>
            <button className="btn btn-danger my5"> Decrementar</button>
        </>

    )


}