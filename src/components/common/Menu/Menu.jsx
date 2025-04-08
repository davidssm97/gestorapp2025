import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
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
              <li className="nav-item">
                <Link className="nav-link" to="/Prueba">Prueba</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Formulario">Formulario Reserva</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
