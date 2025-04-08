export const Pagina404 = () => {
    return (
      <div className="container text-center mt-5">
        <img 
          src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif?cid=ecf05e47og7juj3pznor8mdzksjbueyralhjzdk17fhszi4z&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
          alt="404 not found" 
          className="img-fluid mb-4" 
          style={{ maxWidth: "200px" }}
        />
        <h1 className="display-1 text-danger fw-bold">404</h1>
        <h3 className="text-secondary">¡Uy! Parece que esta página no existe.</h3>
        <p className="mb-4">Pero no te preocupes, puedes volver al inicio y seguir navegando.</p>
        <a href="/" className="btn btn-outline-primary btn-lg">
          Volver al inicio
        </a>
      </div>
    );
  };
  