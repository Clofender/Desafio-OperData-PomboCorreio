import { useState, useEffect } from 'react';
import { type Carta, getCartas } from '../services/carta.service';

export function CartasPage() {
  const [cartas, setCartas] = useState<Carta[]>([]);

  useEffect(() => {
    getCartas()
      .then(setCartas)
      .catch((error) => {
        console.error('Erro ao buscar cartas:', error);
      });
  }, []);

  const listItemStyle = {
    marginBottom: '16px',
    padding: '8px',
    border: '1px solid #eee',
    borderRadius: '4px',
  };

  return (
    <div>
      <h2>Cartas Enviadas</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartas.map((carta) => (
          <li key={carta.id} style={listItemStyle}>
            <strong>Destinatário:</strong> {carta.nomeDestinatario} <br />
            <strong>Status:</strong> {carta.status} <br />
            <strong>Mensagem:</strong> {carta.conteudo} <br />
            <hr style={{ margin: '8px 0' }} />
            <small>
              Enviada por: {carta.remetente.nome} | Pombo: {carta.pombo.apelido}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}