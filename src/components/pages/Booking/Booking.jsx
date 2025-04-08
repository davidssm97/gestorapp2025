import "./Booking.css";
import { Footer } from "../../common/Footer/Footer";
import { Menu } from "../../common/Menu/Menu";
import { useState } from "react";
import { datosApi } from "./DatosJSON";

export function Booking() {
  const [showForm, setShowForm] = useState(null); // Estado para manejar el formulario abierto
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const availableHours = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleReservation = (e, id) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) {
      alert("Por favor, selecciona un día y una hora.");
      return;
    }
    alert(`Reserva confirmada para el ${selectedDay} a las ${selectedTime} en ${datosApi.find((espacio) => espacio.id === id).nombreEspacio}`);
    setShowForm(null); // Ocultar el formulario después de reservar
    setSelectedDay("");
    setSelectedTime("");
  };

  return (
    <>
      <Menu />
      <div className="container Booking-container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {datosApi.map((espacioFisico) => (
            <div key={espacioFisico.id} className="col">
              <div className="card text-bg-dark mb-3 content-card">
                <div className="row g-0">
                  {/* Imagen */}
                  <div className="col-md-6 image-container">
                    {espacioFisico.foto !== "NAN" ? (
                      <img src={espacioFisico.foto} alt={espacioFisico.nombreEspacio} className="Booking-image" />
                    ) : (
                      <p className="no-image-text">SIN FOTO</p>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                    <div className="card-header">{espacioFisico.nombreEspacio}</div>
                    <div className="card-body">
                      <p className="card-text">{espacioFisico.descripcion}</p>
                      <h6>Horarios Disponibles:</h6>
                      <ul className="schedule-list">
                        {espacioFisico.calendario.map((cita, index) => (
                          <li key={index}>
                            <strong>{cita.dia}:</strong> {cita.hora}
                          </li>
                        ))}
                      </ul>

                      {/* Botón para abrir/cerrar formulario */}
                      {!showForm || showForm !== espacioFisico.id ? (
                        <button className="reserve-button" onClick={() => setShowForm(espacioFisico.id)}>
                          Reservar Ahora
                        </button>
                      ) : (
                        <form onSubmit={(e) => handleReservation(e, espacioFisico.id)} className="reservation-form">
                          <label htmlFor="day-select">Selecciona un día:</label>
                          <select id="day-select" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} required>
                            <option value="">-- Selecciona un día --</option>
                            {availableDays.map((day) => (
                              <option key={day} value={day}>{day}</option>
                            ))}
                          </select>

                          <label htmlFor="time-select">Selecciona una hora:</label>
                          <select id="time-select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                            <option value="">-- Selecciona una hora --</option>
                            {availableHours.map((hour) => (
                              <option key={hour} value={hour}>{hour}</option>
                            ))}
                          </select>

                          <button type="submit" className="reserve-button">Confirmar Reserva</button>
                          <button type="button" className="cancel-button" onClick={() => setShowForm(null)}>
                            Cancelar
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
