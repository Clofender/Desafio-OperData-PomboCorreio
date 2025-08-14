import './Footer.css';

export function Footer() {
  const logoDataUrl =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 7h.01'/><path d='M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20'/><path d='m20 7 2 .5-2 .5'/><path d='M10 18v3'/><path d='M14 17.75V21'/><path d='M7 18a6 6 0 0 0 3.84-10.61'/></svg>";

  return (
    <footer className="app-footer">
      <div className="footer-logo">
        <img src={logoDataUrl} alt="Logo" style={{ width: '24px', height: '24px' }} />
        <h3>Delivery Aéreo</h3>
      </div>
      <p className="footer-tagline">
        Conectando pessoas através dos céus desde 2024
      </p>
      <p className="footer-copyright">
        © 2025 Delivery Aéreo. Todos os direitos reservados.
      </p>
    </footer>
  );
}