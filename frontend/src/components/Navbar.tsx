import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoBrancoUrl = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 7h.01'/><path d='M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20'/><path d='m20 7 2 .5-2 .5'/><path d='M10 18v3'/><path d='M14 17.75V21'/><path d='M7 18a6 6 0 0 0 3.84-10.61'/></svg>";
  const logoAzulUrl = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230055a5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 7h.01'/><path d='M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20'/><path d='m20 7 2 .5-2 .5'/><path d='M10 18v3'/><path d='M14 17.75V21'/><path d='M7 18a6 6 0 0 0 3.84-10.61'/></svg>";

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="nav-desktop">
        <Link to="/">Início</Link>
        <Link to="/pombos">Pombos</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/cartas">Cartas</Link>
      </div>

      <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-header">
          <img src={logoBrancoUrl} alt="Logo" />
          <span>Delivery Aéreo</span>
        </div>
        <Link to="/" onClick={handleLinkClick}><HomeIcon /> <span>Início</span></Link>
        <Link to="/pombos" onClick={handleLinkClick}>
          <img src={logoAzulUrl} alt="Ícone Pombos" style={{ width: '20px', height: '20px' }} />
          <span>Pombos</span>
        </Link>
        <Link to="/clientes" onClick={handleLinkClick}><UsersIcon /> <span>Clientes</span></Link>
        <Link to="/cartas" onClick={handleLinkClick}><MailIcon /> <span>Cartas</span></Link>
      </div>

      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </nav>
  );
}