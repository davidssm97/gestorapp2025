import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Booking } from "../pages/Booking/Booking";
import { Menu } from "../common/Menu/Menu";
import { Prueba } from "../pages/Prueba/Prueba";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva";

export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Prueba" element={<Prueba />} />
        <Route path="/Formulario" element={<FormularioReserva />} />

      </Routes>
    </>
  );
}
