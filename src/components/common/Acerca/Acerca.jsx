import "./Acerca.css";
import { Carousel } from "react-bootstrap";

export function Acerca() {
  return (
    <section className="acerca-container container my-5 py-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-3">
          <Carousel fade interval={5000}>
            <Carousel.Item>
              <img
                src="src/assets/img/residencia.jfif"
                className="d-block w-100 rounded shadow"
                alt="Vista comunidad 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="src/assets/img/unidad.jfif"
                className="d-block w-100 rounded shadow"
                alt="Vista comunidad 2"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6 text-white">
          <h2 className="text-warning fw-bold mb-3">¿Qué es GestorApp?</h2>
          <p style={{ lineHeight: "1.8" }}>
            GestorApp es tu solución digital para gestionar eficientemente las
            reservas de espacios comunes en tu unidad residencial. Simplifica el
            acceso a zonas como piscinas, gimnasios, salones sociales y más,
            garantizando una mejor organización y experiencia para todos los
            residentes.
          </p>
        </div>
      </div>
    </section>
  );
}
