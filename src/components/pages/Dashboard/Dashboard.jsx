import { useState } from "react";
import { datosApi as datosOriginales } from "../Booking/DatosJSON";
import { Calendario } from "../../common/Calendario/Calendario";
import "./Dashboard.css";
import { useEffect } from "react";




export const Dashboard = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [espacioActivo, setEspacioActivo] = useState(null);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("datosApi");
    if (!datosGuardados) {
      localStorage.setItem("datosApi", JSON.stringify(datosOriginales));
    }
  }, []);

  const datosApi = JSON.parse(localStorage.getItem("datosApi")) || [];


  const abrirModal = (espacio) => {
    setEspacioActivo(espacio);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setEspacioActivo(null);
  };

  return (
    <div className="container-fluid dashboard-container">
      <h1 className="dashboard-title">Espacios disponibles</h1>
      <div className="row g-4">
        {datosApi.map((espacio) => {
          const tieneDisponibilidad = espacio.calendario.length < 10; // lógica simple para ejemplo

          return (
            <div key={espacio.id} className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 h-100 shadow dashboard-card">
                {espacio.foto !== "NAN" && (
                  <img
                    src={espacio.foto}
                    className="card-img-top"
                    alt={espacio.nombreEspacio}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title fw-bold text-warning">
                    <i className="bi bi-building"></i> {espacio.nombreEspacio}
                  </h5>
                  <p className="card-text">{espacio.descripcion}</p>
                  <p>
                    Estado:{" "}
                    <span className={`fw-semibold ${tieneDisponibilidad ? "estado-disponible" : "estado-lleno"}`}>
                      {tieneDisponibilidad ? "Disponible" : "Sin cupos"}
                    </span>
                  </p>
                  <button
                    className="btn btn-sm w-100 mt-2 dashboard-btn"
                    onClick={() => abrirModal(espacio)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {mostrarModal && espacioActivo && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={(e) => {
            if (e.target.classList.contains("modal")) cerrarModal();
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content rounded-4" style={{ backgroundColor: "#1b1b1b", color: "#f8f9fa" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title text-warning">
                  <i className="bi bi-calendar-week"></i> {espacioActivo.nombreEspacio}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={cerrarModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {espacioActivo.foto !== "NAN" && (
                    <div className="col-md-5 mb-3">
                      <img
                        src={espacioActivo.foto}
                        alt={espacioActivo.nombreEspacio}
                        className="img-fluid rounded"
                        style={{ objectFit: "cover", width: "100%", maxHeight: "220px" }}
                      />
                    </div>
                  )}
                  <div className="col-md-7">
                    <p><strong>Descripción:</strong> {espacioActivo.descripcion}</p>
                    <p><strong>Capacidad:</strong> {espacioActivo.capacidad} personas</p>
                  </div>
                </div>
                <hr />
                <Calendario
                  nombreEspacio={espacioActivo.nombreEspacio}
                  calendarioReservas={espacioActivo.calendario}
                />
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-outline-light" onClick={cerrarModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
