import { Link } from "react-router-dom";
import './styles.css'
function pageNotFound() {
  return (
    <div class="pageNotFound">
      <h1 class="notfound">404</h1>
      <h1 class="texto-perdido">Parece que você está perdido?!</h1>
      <p>A pagina que você procura está em construção!</p>
      <Link to="/"><h1 class="inicio">Volte pro Inicio</h1></Link>
    </div>
  );
}

export default pageNotFound;
