import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export function FormularioReserva() {
  const navigate = useNavigate();
  const [getResponsableReserva, setResponsableReserva] = useState(localStorage.getItem("responsableReserva") || "");
  const [getNumeroApartamento, setNumeroApartamento] = useState(localStorage.getItem("numeroApartamento") || "");
  const [getNumeroContacto, setNumeroContacto] = useState(localStorage.getItem("numeroContacto") || "");
  const [getCorreoElectronico, setCorreoElectronico] = useState(localStorage.getItem("correoElectronico") || "");
  const [getDiaReserva, setDiaReserva] = useState(localStorage.getItem("diaReserva") || "");
  const [getHoraReserva, setHoraReserva] = useState(localStorage.getItem("horaReserva") || "");
  const [getconsideraciones, setconsideraciones] = useState(localStorage.getItem("consideraciones") || "");

  const [getFormularioHaSidoEnviado, setFormularioHaSidoEnviado] = useState(false);
  const [nombreEspacio, setNombreEspacio] = useState("");

  const location = useLocation();
  const { dia, hora, nombreEspacio: nombreDesdeCalendario } = location.state || {};

  useEffect(() => {
    if (dia && hora) {
      setDiaReserva(dia);
      setHoraReserva(hora);
    }
    if (nombreDesdeCalendario) {
      setNombreEspacio(nombreDesdeCalendario);
    }
  }, [dia, hora, nombreDesdeCalendario]);

  // Persistencia
  useEffect(() => localStorage.setItem("responsableReserva", getResponsableReserva), [getResponsableReserva]);
  useEffect(() => localStorage.setItem("numeroApartamento", getNumeroApartamento), [getNumeroApartamento]);
  useEffect(() => localStorage.setItem("numeroContacto", getNumeroContacto), [getNumeroContacto]);
  useEffect(() => localStorage.setItem("correoElectronico", getCorreoElectronico), [getCorreoElectronico]);
  useEffect(() => localStorage.setItem("diaReserva", getDiaReserva), [getDiaReserva]);
  useEffect(() => localStorage.setItem("horaReserva", getHoraReserva), [getHoraReserva]);
  useEffect(() => localStorage.setItem("consideraciones", getconsideraciones), [getconsideraciones]);

  

  function capturarDatosFormulario(evento) {
    evento.preventDefault();
  
    // Validar campos vacíos
    if (
      !getResponsableReserva ||
      !getNumeroApartamento ||
      !getNumeroContacto ||
      !getCorreoElectronico ||
      !getDiaReserva ||
      !getHoraReserva ||
      !nombreEspacio
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    const datosApi = JSON.parse(localStorage.getItem("datosApi")) || [];
  
    const nuevaReserva = {
      dia: getDiaReserva,
      hora: getHoraReserva
    };
  
    const index = datosApi.findIndex(
      (espacio) => espacio.nombreEspacio.trim().toLowerCase() === nombreEspacio.trim().toLowerCase()
    );
  
    if (index !== -1) {
      datosApi[index].calendario.push(nuevaReserva);
      localStorage.setItem("datosApi", JSON.stringify(datosApi));
  
      // Limpiar campos
      [
        "responsableReserva",
        "numeroApartamento",
        "numeroContacto",
        "correoElectronico",
        "diaReserva",
        "horaReserva",
        "consideraciones"
      ].forEach((key) => localStorage.removeItem(key));
  
      alert("✅ Reserva registrada exitosamente.\nSerás redirigido al Dashboard.");
  
      // Redirigir luego de mostrar la alerta
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1500);
    } else {
      alert("❌ Error: no se encontró el espacio para la reserva.");
    }
  }
  
  
  

  return (
    <>
      <br />
      <br />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-8">
            <h3>Registra tu reserva en <strong>{nombreEspacio}</strong></h3>
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
                  onChange={(evento) => setResponsableReserva(evento.target.value)}
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
                  onChange={(evento) => setNumeroApartamento(evento.target.value)}
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
                  onChange={(evento) => setNumeroContacto(evento.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={getCorreoElectronico}
                  onChange={(evento) => setCorreoElectronico(evento.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Día Reserva"
                  value={getDiaReserva}
                  onChange={(evento) => setDiaReserva(evento.target.value)}
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
                  onChange={(evento) => setHoraReserva(evento.target.value)}
                />
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    value={getconsideraciones}
                    onChange={(evento) => setconsideraciones(evento.target.value)}
                  />
                  <label>Consideraciones</label>
                </div>
              </div>

              <button className="btn btn-outline-primary w-100" type="submit">
                Reservar
              </button>
            </form>
          </section>

          <section className="col-12 col-md-4 align-self-center">
            <img
              src="src/assets/img/reserva.png"
              alt="foto"
              className="img-fluid"
            />
          </section>
        </section>
      </section>
    </>
  );
}
