import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import {calendario} from "./datosCalendario"
import { datosApi } from "../../pages/Booking/DatosJSON";

export function Calendario(){

    const[dias, setDias]=useState([])
    const[horas, setHoras]=useState([])

    //El useNavigate se inicializa
    const navigate=useNavigate()

    useEffect(()=>{
        setDias(calendario[0])
        setHoras(calendario[1])
    },[])


    //funcion que captura los dos valores (Hora y fecha)
    function capturarReserva(dia,hora){

        //envio datos al componente hijo
        navigate("/Formulario", {state:{dia,hora}})

    }

    //funcion para verificar que reservas tien cada espacio 
    function estaReservado(dia,hora){
        return datosApi.some(function(espacio){
            return(
                espacio.calendario.some(function(reserva){
                   return reserva.dia.toLowerCase()===dia.toLowerCase()&&reserva.hora===hora
            })
        )
    })

 }

    return(

        <>

            <table className="table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        {
                            dias.map((dia)=>{
                                return <th key={dia}>{dia}</th>
                            })
                        }
                    </tr>

                </thead>
                <tbody>

                    {
                        horas.map((hora)=>{
                            return <tr key={hora}>
                                <td>{hora}</td>
                                {
                                    dias.map((dia)=>{
                                        return <td key={dia}>
                                            <button 
                                            className={`btn ${estaReservado(dia,hora)? "btn-danger" : "btn-success"}`}
                                            onClick={()=>{
                                                capturarReserva(dia,hora)
                                            }}
                                            
                                            
                                            
                                            
                                            >
                                                reservar
                                                </button>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }

                </tbody>
            </table>
        
        </>
    )

}