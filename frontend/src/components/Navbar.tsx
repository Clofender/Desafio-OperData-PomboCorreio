import { Link } from 'react-router-dom';

export function Navbar() {
  const navStyle: React.CSSProperties = {
    background: '#f0f0f0',
    padding: '16px',
    marginBottom: '24px',
    borderBottom: '1px solid #ccc',
  };

  const linkStyle: React.CSSProperties = {
    marginRight: '16px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/pombos" style={linkStyle}>Pombos</Link>
      <Link to="/clientes" style={linkStyle}>Clientes</Link>
      <Link to="/cartas" style={linkStyle}>Cartas</Link>
    </nav>
  );
}