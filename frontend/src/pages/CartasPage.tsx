import { useState, useEffect } from 'react';
import { type Carta, getCartas } from '../services/carta.service';
import { CartaForm } from '../components/CartaForm';
import { StatusUpdater } from '../components/StatusUpdater';

export function CartasPage() {
  const [cartas, setCartas] = useState<Carta[]>([]);

  useEffect(() => {
    getCartas()
      .then(setCartas)
      .catch((error) => {
        console.error('Erro ao buscar cartas:', error);
      });
  }, []);
  
  const handleCartaCriada = (novaCarta: Carta) => {
    setCartas((cartasAnteriores) => [...cartasAnteriores, novaCarta]);
  };
  
  const handleStatusUpdated = (cartaAtualizada: Carta) => {
    setCartas(cartas.map(c => c.id === cartaAtualizada.id ? cartaAtualizada : c));
  };

  return (
    <div>
      <CartaForm onCartaCriada={handleCartaCriada} />
      <hr />
      
      <h2>Cartas Enviadas</h2>
      <ul className="item-list">
        {cartas.map((carta) => (
          <li key={carta.id} className="list-item">
            <div className="list-item-info">
              <strong>Destinatário:</strong> {carta.nomeDestinatario} <br />
              <strong>Status:</strong> {carta.status} <br />
              <strong>Mensagem:</strong> {carta.conteudo} <br />
              <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>
                <small>
                  Enviada por: {carta.remetente.nome} | Pombo: {carta.pombo.apelido}
                </small>
              </div>
            </div>
            
            <div className="list-item-actions">
              <StatusUpdater carta={carta} onStatusUpdated={handleStatusUpdated} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}