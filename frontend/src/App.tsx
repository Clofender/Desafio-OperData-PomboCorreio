import { Routes, Route } from 'react-router-dom';
import { PombosPage } from './pages/PombosPage';
import { ClientesPage } from './pages/ClientesPage';
import { CartasPage } from './pages/CartasPage';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer'; 

function App() {
  const logoDataUrl =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 7h.01'/><path d='M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20'/><path d='m20 7 2 .5-2 .5'/><path d='M10 18v3'/><path d='M14 17.75V21'/><path d='M7 18a6 6 0 0 0 3.84-10.61'/></svg>";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ backgroundColor: '#0055a5', color: 'white', padding: '1rem' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', margin: 0 }}>
            <img src={logoDataUrl} alt="Logo" style={{ width: '40px', height: '40px' }} />
            Delivery Aéreo
          </h1>
        </div>
        <Navbar />
      </header>
      
      <main style={{ flexGrow: 1 }}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pombos" element={<div className="container"><PombosPage /></div>} />
          <Route path="/clientes" element={<div className="container"><ClientesPage /></div>} />
          <Route path="/cartas" element={<div className="container"><CartasPage /></div>} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;