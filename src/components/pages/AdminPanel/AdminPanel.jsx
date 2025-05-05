import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export function AdminPanel() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("datosApi")) || [];
    setDatos(datosGuardados);
  }, []);

  const reiniciarReservas = () => {
    if (confirm("¿Estás seguro de eliminar todas las reservas?")) {
      localStorage.removeItem("datosApi");
      window.location.reload();
    }
  };

  const exportarAExcel = () => {
    const filas = [];

    datos.forEach((espacio) => {
      espacio.calendario.forEach((reserva) => {
        filas.push({
          Espacio: espacio.nombreEspacio,
          Día: reserva.dia,
          Hora: reserva.hora,
        });
      });
    });

    const libro = XLSX.utils.book_new();
    const hoja = XLSX.utils.json_to_sheet(filas);
    XLSX.utils.book_append_sheet(libro, hoja, "Reservas");

    XLSX.writeFile(libro, "reservas.xlsx");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 mt-5 text-center">Panel de Administración</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-danger" onClick={reiniciarReservas}>
          🔁 Reiniciar Reservas
        </button>
        <button className="btn btn-success" onClick={exportarAExcel}>
          📥 Exportar a Excel
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Espacio</th>
              <th>Día</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {datos.length > 0 &&
              datos.flatMap((espacio, index) =>
                espacio.calendario.map((reserva, idx) => (
                  <tr key={`${index}-${idx}`}>
                    <td>{idx + 1}</td>
                    <td>{espacio.nombreEspacio}</td>
                    <td>{reserva.dia}</td>
                    <td>{reserva.hora}</td>
                  </tr>
                ))
              )}
            {datos.every((espacio) => espacio.calendario.length === 0) && (
              <tr>
                <td colSpan="4">No hay reservas registradas.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
