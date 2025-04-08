import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export function FormularioReserva() {

    const [getResponsableReserva, setResponsableReserva] = useState("");
    const [getNumeroApartamento, setNumeroApartamento] = useState("");
    const [getNumeroContacto, setNumeroContacto] = useState("");
    const [getCorreoElectronico, setCorreoElectronico] = useState("");
    const [getDiaReserva, setDiaReserva] = useState("");
    const [getHoraReserva, setHoraReserva] = useState("");
    const [getconsideraciones, setconsideraciones] = useState("");

    const[getDatosFormulario, setDatosFormulario] = useState("")
    const[getFormularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false)

  //inicializando el useLocation
    const location = useLocation()
    const {dia,hora}=location.state || {}

    useEffect(()=>{
      if(dia && hora){
        setDiaReserva(dia)
        setHoraReserva(hora)
      }
    },[dia,hora])


    //los datos del formulario viajan hacia el api 
    //rutina para llamar al api

    useEffect(()=>{
        if(getFormularioHaSidoEnviado){
            console.log("Datos Registrados")
            console.log(getDatosFormulario)
        }
    },[getFormularioHaSidoEnviado])


    function capturarDatosFormulario(){
        evento.preventDefault()
        let datosCapturados = {
            responsableReserva: getResponsableReserva,
            numeroApartamento: getNumeroApartamento,
            numeroContacto: getNumeroContacto,
            correoElectronico: getCorreoElectronico,
            diaReserva: getDiaReserva,
            horaReserva: getHoraReserva,
            consideraciones: getconsideraciones
        }
        setDatosFormulario(datosCapturados)
        setFormularioHaSidoEnviado(true)
    }





  return (
    <>
      <br />
      <br />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva en nuestro espacio</h3>
            <hr />
            <form className="border rounded p-4 shadow" onSubmit={capturarDatosFormulario}>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Responsable Reserva"
                  value={getResponsableReserva}
                  onChange={(evento)=>{setResponsableReserva(evento.target.value)}}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-buildings-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número Apartamento"
                  value={getNumeroApartamento}
                  onChange={(evento)=>{setNumeroApartamento(evento.target.value)}}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-phone-vibrate-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número Contacto"
                  value={getNumeroContacto}
                  onChange={(evento)=>{setNumeroContacto(evento.target.value)}}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={getCorreoElectronico}
                  onChange={(evento)=>{setCorreoElectronico(evento.target.value)}}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dia Reserva"
                  value={getDiaReserva}
                  onChange={(evento)=>{setDiaReserva(evento.target.value)}}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-clock-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hora Reserva"
                  value={getHoraReserva}
                  onChange={(evento)=>{setHoraReserva(evento.target.value)}}
                />
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea className="form-control"></textarea>
                  <label>Consideraciones</label>
                </div>
              </div>

              <button className="btn btn-outline-primary w-100" type="submit">
                Reservar
              </button>
            </form>
          </section>
          <section className="col-12 col-md-4 aling-self-center">
            <img
              src="src\assets\img\reserva.png"
              alt="foto"
              className="img-fluid"
            />
          </section>
        </section>
      </section>
    </>
  );
}
