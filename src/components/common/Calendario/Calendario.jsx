import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calendario } from "./datosCalendario";

export function Calendario({ nombreEspacio, calendarioReservas }) {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDias(calendario[0]);
    setHoras(calendario[1]);
  }, []);

  function capturarReserva(dia, hora) {
    navigate("/Formulario", {
      state: {
        dia,
        hora,
        nombreEspacio
      }
    });
  }

  function estaReservado(dia, hora) {
    return calendarioReservas.some(
      (reserva) =>
        reserva.dia.toLowerCase() === dia.toLowerCase() &&
        reserva.hora === hora
    );
  }

  return (
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Hora</th>
          {dias.map((dia) => (
            <th key={dia}>{dia}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {horas.map((hora) => (
          <tr key={hora}>
            <td>{hora}</td>
            {dias.map((dia) => (
              <td key={dia}>
                <button
                  className={`btn ${estaReservado(dia, hora) ? "btn-danger" : "btn-success"}`}
                  onClick={() => capturarReserva(dia, hora)}
                  disabled={estaReservado(dia, hora)}
                >
                  Reservar
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
