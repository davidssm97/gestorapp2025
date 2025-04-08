import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Menu.css";

export function Menu() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const accederAdmin = () => {
    if (clave === "admin123") {
      setMostrarModal(false);
      setClave("");
      setError("");
      navigate("/admin");
    } else {
      setError("❌ Contraseña incorrecta");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Booking">Booking</Link>
              </li>
            </ul>

            {/* Botón de acceso admin */}
            <button
              onClick={() => setMostrarModal(true)}
              className="btn btn-link text-light"
              style={{ textDecoration: "none", fontSize: "1.2rem" }}
              title="Panel Admin"
            >
              ⚙️
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Admin */}
      {mostrarModal && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={(e) => {
            if (e.target.classList.contains("modal")) setMostrarModal(false);
          }}
        >
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Acceso Administrador</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setMostrarModal(false);
                    setClave("");
                    setError("");
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={clave}
                  onChange={(e) => {
                    setClave(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && accederAdmin()}
                />
                {error && <small className="text-danger mt-2 d-block">{error}</small>}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setMostrarModal(false)}>Cancelar</button>
                <button className="btn btn-primary" onClick={accederAdmin}>Entrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
