import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

export function Banner() {
  return (
    <section className="hero-banner">
      <div className="carousel-container">
        <Carousel fade controls={false} indicators={false} interval={2000}>
          {["cuartoGamer.jpg", "cine.jpg", "gimnasio.jpg"].map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={`/img/${img}`}
                alt={`slide-${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Texto fijo encima del carousel */}
        <div className="overlay">
          <div className="hero-content text-center text-light">
            <h1 className="display-3 fw-bold">GestorApp</h1>
            <p className="lead">Gestiona tus reservas con rapidez y elegancia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
