import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <NavLink className="navSobreMim" to="/">Sobre Mim</NavLink>
      <NavLink className="navProjetos" to="/projetos">Projetos</NavLink>
      <NavLink className="navExperiencias" to="/experiencias">Experiências</NavLink>
      <NavLink className="navContato" to="/contato">Contato</NavLink>
    </nav>
  );
}

export default Navbar;