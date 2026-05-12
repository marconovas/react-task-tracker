import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>

      <p>
        La página que intentas visitar no existe.
      </p>

      <Link to="/">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;