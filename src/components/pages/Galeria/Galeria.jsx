import { useState } from "react";
import { consultarImagenes } from "../../../services/serviciosGalerias";

export function Galeria() {
  const [busqueda, setBusqueda] = useState("");
  const [datosAPI, setDatosAPI] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [buscarRealizado, setBuscarRealizado] = useState(false);

  function manejarBusqueda(evento) {
    evento.preventDefault();

    if (busqueda.trim() === "") {
      setDatosAPI(null);
      setBuscarRealizado(false);
      return;
    }

    setCargando(true);
    consultarImagenes(busqueda)
      .then((datos) => {
        setDatosAPI(datos);
        setBuscarRealizado(true);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al consultar imágenes:", error);
        setDatosAPI(null);
        setBuscarRealizado(true);
        setCargando(false);
      });
  }

  return (
    <section style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", paddingTop: "100px", color: "white" }}>
      <div className="container text-center">
        <h1 className="text-warning mb-4 fw-bold display-5 border-bottom border-warning d-inline-block pb-2">
          Galería
        </h1>

        <form className="d-flex justify-content-center mb-5" onSubmit={manejarBusqueda}>
          <input
            type="text"
            className="form-control w-50 me-2 border-warning bg-dark text-white"
            placeholder="Buscar imágenes (ej: Medellín, atardecer, piscina...)"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ borderRadius: "8px" }}
          />
          <button className="btn btn-warning fw-bold px-4" type="submit">
            Buscar
          </button>
        </form>

        {!buscarRealizado && !datosAPI && (
          <p className="text-light">🔎 Escribe algo y presiona "Buscar" para ver imágenes relacionadas.</p>
        )}

        {buscarRealizado && datosAPI?.photos?.length === 0 && (
          <p className="text-danger fw-bold mt-3">
            ❌ No se encontraron resultados para “{busqueda}”.
          </p>
        )}

        {datosAPI?.photos?.length > 0 && (
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {datosAPI.photos.map((foto) => (
              <div className="col" key={foto.id}>
                <div className="card h-100 shadow border-0 bg-dark text-white">
                  <img
                    src={foto.src.landscape}
                    alt={foto.alt}
                    className="card-img-top"
                    style={{ objectFit: "cover", borderRadius: "10px", height: "200px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{foto.alt || "Imagen sin descripción"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
