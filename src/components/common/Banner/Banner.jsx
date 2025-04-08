import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Banner() {
  return (
    <section className="banner">
      <Carousel fade interval={4000} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/cuartoGamer.jpg"
            alt="Primera imagen"
            style={{ maxHeight: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="text-warning display-4 fw-bold">GestorApp</h1>
            <p className="text-light">
              Reserva espacios comunes con elegancia y facilidad.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/cine.jpg"
            alt="Segunda imagen"
            style={{ maxHeight: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="text-warning display-4 fw-bold">Organiza tu comunidad</h1>
            <p className="text-light">Tu solución moderna para conjuntos residenciales.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/gimnasio.jpg"
            alt="Tercera imagen"
            style={{ maxHeight: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="text-warning display-4 fw-bold">Reserva y disfruta</h1>
            <p className="text-light">Fácil, rápido y desde cualquier dispositivo.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
