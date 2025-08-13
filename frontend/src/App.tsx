import { Routes, Route } from 'react-router-dom';
import { PombosPage } from './pages/PombosPage';
import { ClientesPage } from './pages/ClientesPage';
import { CartasPage } from './pages/CartasPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <h1>Delivery Aéreo</h1>
        <Navbar />
      </header>
      
      <main className="container">
        <Routes>
          <Route path="/" element={<PombosPage />} />
          <Route path="/pombos" element={<PombosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/cartas" element={<CartasPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;