import { Link } from 'react-router-dom';

export function Navbar() {

  return (
    <nav className="navbar">
      <Link to="/pombos">Pombos</Link>
      <Link to="/clientes">Clientes</Link>
      <Link to="/cartas">Cartas</Link>
    </nav>
  );
}