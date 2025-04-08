import "./Booking.css";
import { Footer } from "../../common/Footer/Footer";
import { Menu } from "../../common/Menu/Menu";
import { datosApi } from "./DatosJSON";

export function Booking() {
  return (
    <>
      <Menu />
      <div className="container-fluid py-5 Booking-container">
        <h2 className="text-center mb-5 text-warning display-5">Espacios del Conjunto</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-4">
          {datosApi.map((espacio) => (
            <div key={espacio.id} className="col">
              <div className="card h-100 border-0 shadow-lg bg-dark text-light rounded-4 overflow-hidden">
                {espacio.foto !== "NAN" ? (
                  <img
                    src={espacio.foto}
                    alt={espacio.nombreEspacio}
                    className="card-img-top object-fit-cover"
                    style={{ height: "220px" }}
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ height: "220px" }}>
                    <p className="m-0">Sin Imagen</p>
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title text-warning text-capitalize">
                    <i className="bi bi-star-fill me-2"></i>{espacio.nombreEspacio}
                  </h5>
                  <p className="card-text">{espacio.descripcion}</p>
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
