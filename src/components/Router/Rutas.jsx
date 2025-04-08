import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Booking } from "../pages/Booking/Booking";
import { Menu } from "../common/Menu/Menu";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { FormularioReserva } from "../common/FormularioReserva/FormularioReserva";
import { Pagina404 } from "../pages/Pagina404/Pagina404"; 
import { AdminPanel } from "../pages/AdminPanel/AdminPanel";


export function Rutas() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Formulario" element={<FormularioReserva />} />
        <Route path="*" element={<Pagina404 />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}
